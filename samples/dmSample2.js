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
const FILE_NAME = 'test.nwd';

// TODO - specify the full filename and path
const FILE_PATH = _path.resolve(__dirname, FILE_NAME);

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
 * Upload a File to previously created bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param filePath
 * @param fileName
 * @returns {Promise}
 */
const uploadFile = async (bucketKey, filePath, fileName) => {
	console.log('**** Uploading file. bucket:' + bucketKey + ' filePath:' + filePath);
	const data = await _fs.readFile(filePath);
	return (objectsApi.uploadResources(
		bucketKey,
		[
			{
				objectKey: fileName,
				data,
			}
		],
		{
			useAcceleration: false,
			minutesExpiration: 5,
		},
		oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()
	));
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

			const uploadRes = await uploadFile(BUCKET_KEY, FILE_PATH, FILE_NAME);
			console.log('**** Upload file response:', uploadRes[0].completedResponse.body.results[FILE_NAME]);

			const deleteRes = await deleteFile(BUCKET_KEY, FILE_NAME);
			console.log('**** Delete file response status code:', deleteRes.statusCode);
		} catch (err) {
			console.error('\x1b[31mError:', err, '\x1b[0m');
		}
	})
	.catch((err) => {
		console.error('\x1b[31mError:', err, '\x1b[0m');
	});
