var fs = require('fs');

var ForgeSDK = require('./../src/index');

// TODO - insert your CLIENT_ID and CLIENT_SECRET
var FORGE_CLIENT_ID = 'your forge client id';
var FORGE_CLIENT_SECRET = 'your forge client secret';

// TODO - Choose a bucket key - a unique name to assign to a bucket. It must be globally unique across all applications and
// regions, otherwise the call will fail. Possible values: -_.a-z0-9 (between 3-128 characters in
// length). Note that you cannot change a bucket key.
var BUCKET_KEY = 'forge_sample_' + FORGE_CLIENT_ID.toLowerCase();

// TODO - Choose a filename - a key for the uploaded object
var FILE_NAME = 'my-file.extension';

// TODO - specify the full filename and path
var FILE_PATH = '/path/to/your/file.extension';

var bucketsApi = new ForgeSDK.BucketsApi(), // Buckets Client
	objectsApi = new ForgeSDK.ObjectsApi(); // Objects Client

// Initialize the 2-legged oauth2 client
var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET,
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
 * @param bucketKey
 */
var getBucketDetails = function (bucketKey) {
	console.log("**** Getting bucket details : " + bucketKey);
	return bucketsApi.getBucketDetails(bucketKey, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Create a new bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 */
var createBucket = function (bucketKey) {
	console.log("**** Creating Bucket : " + bucketKey);
	var createBucketJson = {
		'bucketKey': bucketKey,
		'policyKey': 'temporary'
	};
	return bucketsApi.createBucket(createBucketJson, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * This function first makes an API call to getBucketDetails endpoint with the provided bucketKey.
 * If the bucket doesn't exist - it makes another call to createBucket endpoint.
 * @param bucketKey
 * @returns {Promise - details of the bucket in Forge}
 */
var createBucketIfNotExist = function (bucketKey) {
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
						})
				} else {
					reject(err);
				}
			});
	});
};

/**
 * Upload a File to previously created bucket.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param filePath
 * @param fileName
 * @returns {Promise}
 */
var uploadFile = function (bucketKey, filePath, fileName) {
	console.log("**** Uploading file. bucket:" + bucketKey + " filePath:" + filePath);
	return new Promise(function (resolve, reject) {
		fs.readFile(filePath, function (err, data) {
			if (err) {
				reject(err);
			} else {
				objectsApi.uploadObject(bucketKey, fileName, data.length, data, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials()).then(
					function (res) {
						resolve(res);
					},
					function (err) {
						reject(err);
					}
				)
			}
		});
	});
};

/**
 * Delete the file uploaded by the application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param bucketKey
 * @param fileName
 */
var deleteFile = function (bucketKey, fileName) {
	console.log("**** Deleting file from bucket:" + bucketKey + ", filename:" + fileName);
	return objectsApi.deleteObject(bucketKey, fileName, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Get the buckets owned by an application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 */
var getBuckets = function () {
	console.log("**** Getting all buckets");
	return bucketsApi.getBuckets({}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Create an access token and run the API calls.
 */
oAuth2TwoLegged.authenticate().then(function (credentials) {

	console.log("**** Got Credentials", credentials);

	createBucketIfNotExist(BUCKET_KEY).then(

		function (createBucketRes) {
			console.log("**** Create bucket if not exist response:", createBucketRes.body);

			getBuckets().then(function (getBucketsRes) {
				console.log("**** Get all buckets response:");
				var bucketsArray = getBucketsRes.body.items;
				bucketsArray.map(function (currentBucket) {
					console.log(currentBucket.bucketKey);
				})
			}, function (err) {
				console.error(err);
			});

			uploadFile(BUCKET_KEY, FILE_PATH, FILE_NAME).then(function (uploadRes) {
				console.log("**** Upload file response:", uploadRes.body);

				deleteFile(BUCKET_KEY, FILE_NAME).then(function (deleteRes) {
					console.log("**** Delete file response status code:", deleteRes.statusCode);
				}, defaultHandleError);

			}, defaultHandleError);

		}, defaultHandleError);

}, defaultHandleError);