var fs = require('fs');
var ForgeSDK = require('../src/index');

// ForgeSDK.ApiClient.instance.switchServerPath('https://developer-stg.api.autodesk.com');
// var StgApiClient = new ForgeSDK.ApiClient('https://developer-stg.api.autodesk.com');
// var bucketsApiStg = new ForgeSDK.BucketsApi(StgApiClient);
// var oAuth2TwoLeggedStg = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read'], true, StgApiClient);
// var oAuth2TwoLeggedtest = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read'], true); // back to prod

// TODO - insert your CLIENT_ID and CLIENT_SECRET
var FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || 'your forge client id';
var FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || 'your forge client secret';

// TODO - Choose a bucket key - a unique name to assign to a bucket. It must be globally unique across all applications and
// regions, otherwise the call will fail. Possible values: -_.a-z0-9 (between 3-128 characters in
// length). Note that you cannot change a bucket key.
var BUCKET_KEY = 'forge_sample_' + FORGE_CLIENT_ID.toLowerCase();

// TODO - Choose a filename - a key for the uploaded object
var FILE_NAME = 'test.nwd';

// TODO - specify the full filename and path
var FILE_PATH = 'test.nwd';

var bucketsApi = new ForgeSDK.BucketsApi(),
	objectsApi = new ForgeSDK.ObjectsApi(),
	derivativesApi = new ForgeSDK.DerivativesApi(/* undefined, ForgeSDK.JobPayloadDestination.RegionEnum.EMEA */);

// Initialize the 2-legged oauth2 client
var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET,
	['data:write', 'data:read', 'bucket:read', 'bucket:update', 'bucket:create'], true);

/**
 * General error handling method
 * @param err
 */
function defaultHandleError (err) {
	console.error('\x1b[31m Error:', err, '\x1b[0m');
}

/**
 * Gets the details of an object specified by a bucketKey / objectKey.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} bucketKey
 * @param {String} objectKey
 * @returns {Promise}
 */
var getObjectDetails = function (bucketKey, objectKey) {
	console.log("**** Get object details :", bucketKey, objectKey);
	return objectsApi.getObjectDetails(bucketKey, objectKey, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Gets the resource manifest.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} urn
 * @returns {Promise}
 */
var getManifest = function (urn) {
	console.log("**** Get resource manifest:", urn);
	return derivativesApi.getManifest(urn, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Gets the resource metadata.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} urn
 * @returns {Promise}
 */
var getMetadata = function (urn) {
	console.log("**** Get resource metadata:", urn);
	return derivativesApi.getMetadata(urn, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Delete the file uploaded by the application.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} bucketKey
 * @param {String} fileName
 * @returns {Promise}
 */
var deleteFile = function (bucketKey, fileName) {
	console.log("**** Deleting file from bucket:" + bucketKey + ", filename:" + fileName);
	return objectsApi.deleteObject(bucketKey, fileName, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};

/**
 * Create OBJ.
 * Uses the oAuth2TwoLegged object that you retrieved previously.
 * @param {String} urn
 * @param {String} guid
 * @returns {Promise}
 */
var createObj = function (urn, guid) {
	console.log("**** Creating OBJ : " + urn);

	var job = new ForgeSDK.JobPayload({
		input: new ForgeSDK.JobPayloadInput(urn),
		output: new ForgeSDK.JobPayloadOutput(
			[
				new ForgeSDK.JobObjOutputPayload('obj',
					{
						advanced: new ForgeSDK.JobObjOutputPayloadAdvanced(
							{
								unit: ForgeSDK.JobObjOutputPayloadAdvanced.UnitEnum.meter,
								modelGuid: guid,
								objectIds: [-1]
							})
					}),
			],
			{
				destination: new ForgeSDK.JobPayloadDestination(ForgeSDK.JobPayloadDestination.RegionEnum.US)
			}
		),
		//misc: new ForgeSDK.JobPayloadMisc ()
	});

	return derivativesApi.translate(job, {}, oAuth2TwoLegged, oAuth2TwoLegged.getCredentials());
};


/**
 * Create an access token and run the API calls.
 */
oAuth2TwoLegged.authenticate()
	.then(function (credentials) {

		console.log("**** Got Credentials", credentials);

		getObjectDetails(BUCKET_KEY, FILE_NAME)
			.then(function (details) {
				console.log("**** Object details:", details.body);

				var _details = new ForgeSDK.ObjectDetails(details.body); // ObjectFullDetails
				var urn = Buffer.from(_details.objectId).toString('base64')
					.replace(/\+/g, '-') // Convert '+' to '-'
					.replace(/\//g, '_') // Convert '/' to '_'
					.replace(/=+$/, '');

				getMetadata (urn)
					.then (function (metadata) {
						console.log("**** Metadata requested:", metadata.body);

						var _metadata = ForgeSDK.Metadata.constructFromObject (metadata.body);
						var guid = _metadata.data.metadata [0].guid;

						createObj(urn, guid)
							.then(function (reponse) {
								console.log("**** OBJ requested:", reponse.body);

								getManifest(urn)
									.then(function (manifest) {
										console.log("**** Manifest:", manifest.body);

										var _manifest = new ForgeSDK.Manifest.constructFromObject(manifest.body);
										console.log("**** Manifest:", _manifest);

									}, defaultHandleError);

							}, defaultHandleError);
						
					}, defaultHandleError);

			}, defaultHandleError);

	}, defaultHandleError)
	
	.catch(defaultHandleError);