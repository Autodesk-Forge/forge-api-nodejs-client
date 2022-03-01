/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.export = (function () {
	'use strict';

	var expect = require('expect.js'),
		sinon = require('sinon'),
		ForgeSdk = require('../../src'),
		instance,
		oauth2client,
		credentials,
		mockedApiClientRequest,
		ApiClient = require('../../src/ApiClient'),
		BucketObjects = require('../../src/model/BucketObjects'),
		ObjectDetails = require('../../src/model/ObjectDetails'),
		ObjectFullDetails = require('../../src/model/ObjectFullDetails'),
		ObjectS3Download = require('../../src/model/ObjectS3Download'),
		PostBucketsSigned = require('../../src/model/PostBucketsSigned'),
		PostObjectSigned = require('../../src/model/PostObjectSigned'),
		Reason = require('../../src/model/Reason'),
		Result = require('../../src/model/Result');

	var sampleStrParam = 'test_string';
	var sampleIntParam = 10;
	var FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || '<your forge client ID>';
	var FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || '<your forge client secret>';

	var apiClient = new ApiClient();
	apiClient.defaultHeaders = { 'x-ads-test': sampleStrParam };

	before(function () {
		oauth2client = new ForgeSdk.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read', 'data:write']);
		credentials = {
			access_token: 'abce'
		};
		instance = new ForgeSdk.ObjectsApi(apiClient);
		mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
	});

	after(function () {
		apiClient.callApi.restore();
	});


	describe('ObjectsApi', function () {
		describe('copyTo', function () {
			it('should call copyTo successfully', function (done) {
				var postBody = null;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam,
					'newObjName': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = ObjectDetails;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}/copyto/{newObjName}', 'PUT',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.copyTo(sampleStrParam, sampleStrParam, sampleStrParam, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('createSignedResource', function () {
			it('should call createSignedResource successfully', function (done) {
				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam
				};
				var queryParams = {
					'access': opts.access
				};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = PostObjectSigned;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}/signed', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.createSignedResource(sampleStrParam, sampleStrParam, sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('deleteObject', function () {
			it('should call deleteObject successfully', function (done) {
				var postBody = null;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = [];
				var returnType = null;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'DELETE',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.deleteObject(sampleStrParam, sampleStrParam, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('deleteSignedResource', function () {
			it('should call deleteSignedResource successfully', function (done) {
				var opts = {
					region: 'US'
				};

				var postBody = null;

				var pathParams = {
					'id': sampleStrParam
				};
				var queryParams = {
					'region': opts.region
				};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['text/plain'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/oss/v2/signedresources/{id}', 'DELETE',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.deleteSignedResource(sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('getObject', function () {
			it('should call getObject successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Range': opts.range,
					'If-None-Match': opts.ifNoneMatch,
					'If-Modified-Since': opts.ifModifiedSince,
					'Accept-Encoding': opts.acceptEncoding
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/octet-stream'];
				var returnType = Object;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.getObject(sampleStrParam, sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('getObjectDetails', function () {
			it('should call getObjectDetails successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam
				};
				var queryParams = {
					'with': opts._with
				};
				var headerParams = {
					'If-Modified-Since': opts.ifModifiedSince
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = ObjectFullDetails;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}/details', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.getObjectDetails(sampleStrParam, sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('getObjects', function () {
			it('should call getObjects successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'bucketKey': sampleStrParam
				};
				var queryParams = {
					'limit': opts.limit,
					'beginsWith': opts.beginsWith,
					'startAt': opts.startAt
				};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = BucketObjects;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.getObjects(sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('getSignedResource', function () {
			it('should call getSignedResource successfully', function (done) {
				var opts = {
					region: 'US',
					range: sampleStrParam,
					ifNoneMatch: sampleStrParam,
					ifModifiedSince: sampleStrParam,
					acceptEncoding: sampleStrParam
				};

				var postBody = null;

				var pathParams = {
					'id': sampleStrParam
				};
				var queryParams = {
					region: opts.region
				};
				var headerParams = {
					'Range': opts.range,
					'If-None-Match': opts.ifNoneMatch,
					'If-Modified-Since': opts.ifModifiedSince,
					'Accept-Encoding': opts.acceptEncoding
				};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/octet-stream'];
				var returnType = Object;

				mockedApiClientRequest.withArgs('/oss/v2/signedresources/{id}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.getSignedResource(sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('getStatusBySessionId', function () {
			it('should call getStatusBySessionId successfully', function (done) {

				var postBody = null;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam,
					'sessionId': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {};
				var formParams = {};

				var contentTypes = ['application/json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}/status/{sessionId}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.getStatusBySessionId(sampleStrParam, sampleStrParam, sampleStrParam, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('uploadChunk', function () {
			it('should call uploadChunk successfully', function (done) {
				var opts = {
					contentDisposition: 'application/octet-stream',
					contentType: 'application/octet-stream',
					xAdsChunkSha1: sampleStrParam,
				};
				var postBody = sampleStrParam;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Content-Length': sampleIntParam,
					'Content-Range': sampleStrParam,
					'Content-Disposition': opts.contentDisposition,
					'x-ads-chunk-sha1': opts.xAdsChunkSha1,
					'Session-Id': sampleStrParam
				};
				var formParams = {};

				var contentTypes = opts.contentType || ['application/octet-stream'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = ObjectDetails;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}/resumable', 'PUT',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.uploadChunk(sampleStrParam, sampleStrParam, sampleIntParam, sampleStrParam, sampleStrParam, sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('uploadObject', function () {
			it('should call uploadObject successfully', function (done) {
				var opts = {
					contentDisposition: 'application/octet-stream',
					ifMatch: sampleStrParam,
					xAdsContentSha1: sampleStrParam,
				};
				var postBody = sampleStrParam;

				var pathParams = {
					'bucketKey': sampleStrParam,
					'objectName': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Content-Length': sampleIntParam,
					'Content-Disposition': opts.contentDisposition,
					'If-Match': opts.ifMatch,
					'x-ads-content-sha1': opts.xAdsContentSha1,
				};
				var formParams = {};

				var contentTypes = ['application/octet-stream'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = ObjectDetails;

				mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'PUT',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.uploadObject(sampleStrParam, sampleStrParam, sampleIntParam, sampleStrParam, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('uploadSignedResource', function () {
			it('should call uploadSignedResource successfully', function (done) {
				var opts = {
					xAdsRegion: 'US',
					contentDisposition: 'application/octet-stream',
					ifMatch: sampleStrParam,
					xAdsContentSha1: sampleStrParam
				};
				var postBody = sampleStrParam;

				var pathParams = {
					'id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Content-Length': sampleIntParam,
					'Content-Disposition': opts.contentDisposition,
					'x-ads-region': opts.xAdsRegion,
					'If-Match': opts.ifMatch,
					'x-ads-content-sha1': opts.xAdsContentSha1,
				};
				var formParams = {};

				var contentTypes = ['application/octet-stream'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = ObjectDetails;

				mockedApiClientRequest.withArgs('/oss/v2/signedresources/{id}', 'PUT',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.uploadSignedResource(pathParams.id, headerParams['Content-Length'], postBody, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
		describe('uploadSignedResourcesChunk', function () {
			it('should call uploadSignedResourcesChunk successfully', function (done) {
				var opts = {
					xAdsRegion: 'US',
					contentDisposition: 'application/octet-stream',
					ifMatch: sampleStrParam,
					xAdsChunkSha1: sampleStrParam
				};

				var postBody = sampleStrParam;

				var pathParams = {
					'id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'Content-Range': sampleStrParam,
					'Content-Disposition': opts.contentDisposition,
					'x-ads-region': opts.xAdsRegion,
					'x-ads-chunk-sha1': opts.xAdsChunkSha1,
					'Session-Id': sampleStrParam
				};
				var formParams = {};

				var contentTypes = ['application/octet-stream'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = ObjectDetails;

				mockedApiClientRequest.withArgs('/oss/v2/signedresources/{id}/resumable', 'PUT',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials
				).returns(Promise.resolve('Success result'));

				instance.uploadSignedResourcesChunk(pathParams.id, headerParams['Content-Range'], headerParams['Session-Id'], postBody, opts, oauth2client, credentials)
					.then(function (response) {
						expect(response).to.be.ok();
						done();
					}, function (err) {
						done(err);
					});
			});
		});
	});

}());