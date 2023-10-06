//
// Copyright (c) 2019 Autodesk, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
/*jshint esversion: 9 */

const __fs = require('fs');
const _fs = require('fs/promises');
const _path = require('path');
const { ApiClient } = require('../src/index');

const ForgeSDK = require('../src/index');

// TODO - insert your CLIENT_ID and CLIENT_SECRET
const APS_CLIENT_ID = process.env.APS_CLIENT_ID || 'your forge client id';
const APS_CLIENT_SECRET = process.env.APS_CLIENT_SECRET || 'your forge client secret';

// TODO - Choose a bucket key - a unique name to assign to a bucket. It must be globally unique across all applications and
// regions, otherwise the call will fail. Possible values: -_.a-z0-9 (between 3-128 characters in
// length). Note that you cannot change a bucket key.
const BUCKET_KEY = 'forge_sample_' + APS_CLIENT_ID.toLowerCase();

// TODO - Choose a filename - a key for the uploaded object
const FILE_NAME0 = 'test.txt';
const FILE_NAME1 = 'test-small.obj';
const FILE_NAME2 = 'test.nwd';
const FILE_NAME3 = 'test-large.dwfx';

// TODO - specify the full filename and path
const FILE_PATH1 = _path.resolve(__dirname, FILE_NAME1);
const FILE_PATH2 = _path.resolve(__dirname, FILE_NAME2);
const FILE_PATH3 = _path.resolve(__dirname, FILE_NAME3);

const apiClient = new ForgeSDK.ApiClient();
apiClient.defaultHeaders = { 'x-ads-test': BUCKET_KEY };

const bucketsApi = new ForgeSDK.BucketsApi(apiClient); // Buckets Client
const objectsApi = new ForgeSDK.ObjectsApi(apiClient); // Objects Client
// objectsApi.apiClient.isDebugMode = true;

// Initialize the 2-legged oauth2 client
const oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(
	APS_CLIENT_ID, APS_CLIENT_SECRET,
	['data:write', 'data:read', 'bucket:read', 'bucket:update', 'bucket:create'], true
);

const sleep = (delay) => {
	return (new Promise((resolve, reject) => {
		setTimeout(() => resolve(), delay * 1000);
	}));
};

/**
 * Gets the details of a bucket specified by a bucketKey.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 */
const getBucketDetails = (bucketKey) => {
	console.log(`**** Getting bucket details: ${bucketKey}`);
	return (bucketsApi.getBucketDetails(bucketKey, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()));
};

/**
 * Create a new bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 */
const createBucket = (bucketKey) => {
	console.log(`**** Creating Bucket: ${bucketKey}`);
	const createBucketJson = {
		'bucketKey': bucketKey,
		'policyKey': 'temporary'
	};
	return (bucketsApi.createBucket(createBucketJson, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()));
};

/**
 * This function first makes an API call to getBucketDetails endpoint with the provided bucketKey.
 * If the bucket doesn't exist - it makes another call to createBucket endpoint.
 * @param bucketKey
 * @returns {Promise - details of the bucket in Forge}
 */
const createBucketIfNotExist = async (bucketKey) => {
	try {
		console.log(`**** Creating bucket if not exist: ${bucketKey}`);
		return (await getBucketDetails(bucketKey));
	} catch (err) {
		if (err.statusCode === 404 /* NOT_FOUND */)
			return (await createBucket(bucketKey));
		throw err;
	}
};

/**
 * Upload files to previously created bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param objects
 * @param opts
 * @returns {Promise}
 */
const uploadObjects = async (bucketKey, objects, opts) => {
	opts = opts || {};
	console.log(`**** Uploading file(s). bucket: ${bucketKey}`);
	return (objectsApi.uploadResources(
		bucketKey,
		objects,
		{
			useAcceleration: false,
			minutesExpiration: 20,
			...opts,
		},
		oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()
	));
};

/**
 * Download objects from a bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param objects
 * @param opts
 * @returns {Promise}
 */
const downloadObjects = async (bucketKey, objects, opts) => {
	opts = opts || {};
	console.log(`**** Downloading objects(s). bucket: ${bucketKey}`);
	return (objectsApi.downloadResources(
		bucketKey,
		objects,
		{
			useCdn: false,
			minutesExpiration: 20,
			...opts,
		},
		oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()
	));
};

/**
 * Verify local file and server object SHA1.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 */
const verifyServerObjectsSha1 = async (bucketKey, objects) => {
	const sha1s = await Promise.all(objects.map(async (resp) => { // SHA1 takes time to be processed in the server, need to wait sometimes
		if (resp.error)
			return (null);
		const srcSha1 = await objectsApi.calculateSHA1(resp.data);
		for (; ;) {
			const serverSha1Resp = await objectsApi.getObjectDetails(bucketKey, resp.objectKey, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
			const serverSha1 = serverSha1Resp.body.sha1;
			if (!serverSha1) {
				await sleep(5); // 5 seconds - usually it is faster, but for large objects might take a bit longer
				continue;
			}
			if (srcSha1 !== serverSha1) {
				console.error('\x1b[31mError:', `SHA1 differs for object ${resp.objectKey} (${resp.data.length || resp.length} vs ${serverSha1Resp.body.size})`, '\x1b[0m');
				console.log(serverSha1Resp.body);
			}
			return (srcSha1);
		}
	}));
	return (sha1s);
};

/**
 * Delete all objects listed.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 */
const deleteAllServerObjects = async (bucketKey, objects) => {
	return (await Promise.all(objects.map(async (resp) => {
		if (resp.error)
			return;
		const deleteRes = await deleteFile(bucketKey, resp.objectKey);
		console.log('**** Delete file response status code:', deleteRes.statusCode);
	})));
};

/**
 * Delete the file uploaded by the application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param fileName
 */
const deleteFile = (bucketKey, objectKey) => {
	console.log(`**** Deleting file from bucket: ${bucketKey}, object: ${objectKey}`);
	return (objectsApi.deleteObject(bucketKey, objectKey, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()));
};

/**
 * Get the buckets owned by an application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 */
const getBuckets = () => {
	console.log('**** Getting all buckets');
	return (bucketsApi.getBuckets({}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()));
};

const compareObjects = async (uploadRes, downloadRes) => {
	const sha1s = await Promise.all(uploadRes.map(async (upload) => { // SHA1 takes time to be processed in the server, need to wait sometimes
		if (upload.error)
			return (null);
		const srcSha1 = await objectsApi.calculateSHA1(upload.data);
		const target = downloadRes.filter((rec) => rec.objectKey === upload.objectKey)[0];
		const targetSha1 = await objectsApi.calculateSHA1(target.data);
		if (srcSha1 !== targetSha1) {
			console.error('\x1b[31mError:', `SHA1 differs for object ${upload.objectKey}`, '\x1b[0m');
			console.log(target.downloadParams);
		}
		return (targetSha1 === srcSha1);
	}));
	return (sha1s);
};

const onRefreshToken = async () => {
	let credentials = await oAuth2TwoLegged.authenticate();
	return (credentials);
};

/**
 * Create an access token and run the API calls.
 */
oAuth2TwoLegged.authenticate()
	.then(async (credentials) => {
		try {
			console.log('**** Got Credentials', credentials);

			const createBucketRes = await createBucketIfNotExist(BUCKET_KEY);
			console.log('**** Create bucket if not exist response:', createBucketRes.body);

			const getBucketsRes = await getBuckets();
			console.log('**** Get all buckets response:');
			const bucketsArray = getBucketsRes.body.items;
			bucketsArray.map((currentBucket) => console.log(currentBucket.bucketKey));

			// Small Files
			console.log('**** Testing object and small files');

			let _buffer = await _fs.readFile(FILE_PATH1);
			let _stream = __fs.createReadStream(FILE_PATH1);
			let uploadRes = await uploadObjects(
				BUCKET_KEY,
				[
					{ objectKey: FILE_NAME0, data: 'this is a string', }, // string test
					{ objectKey: FILE_NAME1 + '.txt', data: _buffer.toString('utf8'), }, // file:// test, we know it is a text file
					{ objectKey: FILE_NAME1, data: _buffer, }, // file:// test, but as Buffer this time
					{ objectKey: FILE_NAME1 + '.bin', data: _stream, length: _buffer.length, }, // file:// test, but as ReadableStream this time
				],
				{
					// chunkSize: 3, // use 3Mb to make it fails, use a debug ApiClient, objectsApi.apiClient.isDebugMode = true
					// minutesExpiration: 2,
					// useAcceleration: true,
					onUploadProgress: (data) => console.warn(data),
					onRefreshToken,
				}
			);

			console.log('**** Upload object(s) response(s):');
			//uploadRes.map((resp) => console.log(JSON.stringify(resp.completed, null, 4)));
			uploadRes.map((resp) => console.log(resp.completed));
			console.log('**** Verifying SHA1 codes'); // re-assembling files takes times, but we uploaded these files in 1 part :)
			await verifyServerObjectsSha1(BUCKET_KEY, uploadRes);

			_stream = __fs.createWriteStream(FILE_PATH1 + '.out');
			let downloadRes = await downloadObjects(
				BUCKET_KEY,
				[
					{ objectKey: FILE_NAME0, responseType: 'text', }, // string test
					{ objectKey: FILE_NAME1 + '.txt', responseType: 'arraybuffer', }, // Buffer
					{ objectKey: FILE_NAME1, responseType: 'arraybuffer', }, // Buffer
					{ objectKey: FILE_NAME1 + '.bin', responseType: 'stream', data: _stream, }, // file:// test, but as WritableStream this time
				],
				{
					// publicResourceFallback: true, // Allows fallback to OSS signed URLs in case of unmerged resumable uploads.
					// useCdn: true, // Will generate a CloudFront URL for the S3 object.
					// minutesExpiration: 2,
					onDownloadProgress: (data) => console.warn(data),
					onRefreshToken,
				}
			);
			console.log('**** Verifying SHA1 codes with downloads');
			await compareObjects(uploadRes, downloadRes);

			console.log('**** Deleting server files(s)');
			await deleteAllServerObjects(BUCKET_KEY, uploadRes);
			try { await _fs.unlink(FILE_PATH1 + '.out'); } catch (ex) { }

			// Large Files < 5Mb <
			console.log('**** Testing Large files');

			_buffer = await _fs.readFile(FILE_PATH2);
			_stream = __fs.createReadStream(FILE_PATH2);
			const _buffer3 = await _fs.readFile(FILE_PATH3);
			let _stream3 = __fs.createReadStream(FILE_PATH3);
			const size = await _fs.stat(FILE_PATH3);
			uploadRes = await uploadObjects(
				BUCKET_KEY,
				[
					{ objectKey: FILE_NAME2, data: _buffer, },
					{ objectKey: FILE_NAME2 + '.bin', data: _stream, length: _buffer.length, },
					{ objectKey: FILE_NAME3, data: _buffer3, },
					{ objectKey: FILE_NAME3 + '.bin', data: _stream3, length: size.size, },
				],
				{
					//chunkSize: 3, // use 3Mb to make it fails, use a debug ApiClient, objectsApi.apiClient.isDebugMode = true
					minutesExpiration: 60, // use 1 to stress error code 403 - Forbidden
					onUploadProgress: (data) => console.warn(data),
					onRefreshToken,
				}
			);
			console.log('**** Upload file(s) response(s):');
			//uploadRes.map((resp) => console.log(JSON.stringify(resp.completed, null, 4)));
			uploadRes.map((resp) => console.log(resp.objectKey, resp.error ? 'error' : '', resp.completed));
			console.log('**** Verifying SHA1 codes (please wait, the system is reassembling parts)');
			await verifyServerObjectsSha1(BUCKET_KEY, uploadRes);

			_stream = __fs.createWriteStream(FILE_PATH2 + '.out');
			_stream3 = __fs.createWriteStream(FILE_PATH3 + '.out');
			downloadRes = await downloadObjects(
				BUCKET_KEY,
				[
					{ objectKey: FILE_NAME2, responseType: 'arraybuffer', }, // Buffer
					{ objectKey: FILE_NAME2 + '.bin', responseType: 'steam', data: _stream, },
					{ objectKey: FILE_NAME3, responseType: 'arraybuffer', }, // Buffer
					{ objectKey: FILE_NAME3 + '.bin', responseType: 'stream', data: _stream3, },
				],
				{
					// publicResourceFallback: true, // Allows fallback to OSS signed URLs in case of unmerged resumable uploads.
					// useCdn: true, // Will generate a CloudFront URL for the S3 object.
					minutesExpiration: 5, // use 1 to stress error code 403 - Forbidden
					onDownloadProgress: (data) => console.warn(data),
					onRefreshToken,
				}
			);
			console.log('**** Verifying SHA1 codes with downloads');
			await compareObjects(uploadRes, downloadRes);

			console.log('**** Deleting server files(s)');
			await deleteAllServerObjects(BUCKET_KEY, uploadRes);
			try { await _fs.unlink(FILE_PATH2 + '.out'); } catch (ex) { }
			try { await _fs.unlink(FILE_PATH3 + '.out'); } catch (ex) { }

		} catch (err) {
			console.error('\x1b[31mError:', err, '\x1b[0m');
		}
	})
	.catch((err) => {
		console.error('\x1b[31mError:', err, '\x1b[0m');
	});
