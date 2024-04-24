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

const fs = require('fs');
const _path = require('path');
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
const FILE_PATH = _path.resolve(__dirname + '/test.nwd');

const bucketsApi = new ForgeSDK.BucketsApi(),
	objectsApi = new ForgeSDK.ObjectsApi(),
	derivativesApi = new ForgeSDK.DerivativesApi(/* undefined, ForgeSDK.JobPayloadDestination.RegionEnum.EMEA */);

// Initialize the 2-legged oauth2 client
const oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(APS_CLIENT_ID, APS_CLIENT_SECRET,
	['data:write', 'data:read', 'bucket:read', 'bucket:update', 'bucket:create'], true);

/**
 * General error handling method
 * @param err
 */
function defaultHandleError(err) {
	console.error('\x1b[31m Error:', err, '\x1b[0m');
}

/**
 * Gets the details of a bucket specified by a bucketKey.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} bucketKey
 * @returns {Promise}
 */
const getBucketDetails = function (bucketKey) {
	console.log("**** Getting bucket details : " + bucketKey);
	return bucketsApi.getBucketDetails(bucketKey, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Create a new bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} bucketKey
 * @returns {Promise}
 */
const createBucket = function (bucketKey) {
	console.log("**** Creating Bucket : " + bucketKey);
	const createBucketJson = {
		'bucketKey': bucketKey,
		'policyKey': 'temporary'
	};
	return bucketsApi.createBucket(createBucketJson, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * This function first makes an API call to getBucketDetails endpoint with the provided bucketKey.
 * If the bucket doesn't exist - it makes another call to createBucket endpoint.
 * @param {String} bucketKey
 * @returns {Promise - details of the bucket in Forge}
 */
const createBucketIfNotExist = function (bucketKey) {
	console.log("**** Creating bucket if not exist :", bucketKey);

	return new Promise(function (resolve, reject) {
		getBucketDetails(bucketKey).then(function (resp) {
			resolve(resp);
		},
			function (err) {
				if (err.statusCode === 404) {
					createBucket(bucketKey).then(function (res) {
						resolve(res);
					},
						function (err) {
							reject(err);
						});
				} else {
					reject(err);
				}
			});
	});
};

/**
 * Gets the details of an object specified by a bucketKey / objectKey.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} bucketKey
 * @param {String} objectKey
 * @returns {Promise}
 */
const getObjectDetails = function (bucketKey, objectKey) {
	console.log("**** Get object details :", bucketKey, objectKey);
	return objectsApi.getObjectDetails(bucketKey, objectKey, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Upload a File to previously created bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} bucketKey
 * @param {String} filePath
 * @param {String} fileName
 * @returns {Promise}
 */
const uploadFileIfNotExist = function (bucketKey, filePath, fileName) {
	console.log("**** Uploading file. bucket:" + bucketKey + " filePath:" + filePath);
	return new Promise(function (resolve, reject) {
		fs.readFile(__dirname + '/' + filePath, function (err, data) {
			if (err) {
				reject(err);
			} else {
				getObjectDetails(bucketKey, fileName)
					.then(function (details) {
						resolve(details);
					})
					.catch(function (err) {
						objectsApi.uploadObject(bucketKey, fileName, data.length, data, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials())
							.then(
								function (res) {
									resolve(res);
								},
								function (err) {
									reject(err);
								}
							);
					});
			}
		});
	});
};

/**
 * Delete the file uploaded by the application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} bucketKey
 * @param {String} fileName
 * @returns {Promise}
 */
const deleteFile = function (bucketKey, fileName) {
	console.log("**** Deleting file from bucket:" + bucketKey + ", filename:" + fileName);
	return objectsApi.deleteObject(bucketKey, fileName, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Create SVF.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} urn
 * @returns {Promise}
 */
const createSvf = function (urn) {
	console.log("**** Creating SVF : " + urn);

	const job = new ForgeSDK.JobPayload({
		input: new ForgeSDK.JobPayloadInput(urn),
		output: new ForgeSDK.JobPayloadOutput(
			[
				new ForgeSDK.JobSvfOutputPayload('svf', {
					views: [ForgeSDK.JobSvfOutputPayload.ViewsEnum["2d"], ForgeSDK.JobSvfOutputPayload.ViewsEnum["3d"]]
				}),
			],
			{
				destination: new ForgeSDK.JobPayloadDestination(ForgeSDK.JobPayloadDestination.RegionEnum.US)
			}
		),
		//misc: new ForgeSDK.JobPayloadMisc ()
	});

	return derivativesApi.translate(job, { xAdsForce: true }, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Create SVF2.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} urn
 * @returns {Promise}
 */
const createSvf2 = function (urn) {
	console.log("**** Creating SVF : " + urn);

	const job = new ForgeSDK.JobPayload({
		input: new ForgeSDK.JobPayloadInput(urn),
		output: new ForgeSDK.JobPayloadOutput(
			[
				new ForgeSDK.JobSvf2OutputPayload('svf', {
					views: [ForgeSDK.JobSvfOutputPayload.ViewsEnum["2d"], ForgeSDK.JobSvfOutputPayload.ViewsEnum["3d"]]
				}),
			],
			{
				destination: new ForgeSDK.JobPayloadDestination(ForgeSDK.JobPayloadDestination.RegionEnum.US)
			}
		),
		//misc: new ForgeSDK.JobPayloadMisc ()
	});

	return derivativesApi.translate(job, { xAdsForce: true }, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};


/**
 * Create an access token and run the API calls.
 */
oAuth2TwoLegged.authenticate()
	.then(function (credentials) {
		console.log("**** Got Credentials", credentials);

		createBucketIfNotExist(BUCKET_KEY)
			.then(function (createBucketRes) {
				console.log("**** Create bucket if not exist response:", createBucketRes.body);

				uploadFileIfNotExist(BUCKET_KEY, FILE_PATH, FILE_NAME)
					.then(function (uploadRes) {
						console.log("**** Upload file response:", uploadRes.body);

						const details = new ForgeSDK.ObjectDetails(uploadRes.body); // ObjectFullDetails
						const urn = Buffer.from(details.objectId).toString('base64')
							.replace(/\+/g, '-') // Convert '+' to '-'
							.replace(/\//g, '_') // Convert '/' to '_'
							.replace(/=+$/, '');

						// createSvf (urn)
						// 	.then (function (res) {
						// 		console.log("**** SVF requested:", res.body);
						// 		const result = new ForgeSDK.Job(undefined, undefined, res.body);
						// 		console.log ("*** URN: ", result.urn);

						// 		// deleteFile(BUCKET_KEY, FILE_NAME).then(function (deleteRes) {
						// 		// 	console.log("**** Delete file response status code:", deleteRes.statusCode);
						// 		// }, defaultHandleError);

						// 	}, defaultHandleError);

						createSvf2(urn)
							.then(function (res) {
								console.log("**** SVF2 requested:", res.body);
								const result = new ForgeSDK.Job(undefined, undefined, res.body);
								console.log("*** URN: ", result.urn);

								// deleteFile(BUCKET_KEY, FILE_NAME).then(function (deleteRes) {
								// 	console.log("**** Delete file response status code:", deleteRes.statusCode);
								// }, defaultHandleError);

							}, defaultHandleError);

					}, defaultHandleError);

			}, defaultHandleError);

	}, defaultHandleError);