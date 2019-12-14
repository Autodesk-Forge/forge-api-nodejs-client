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
		BadInput = require('../../src/model/BadInput'),
		Conflict = require('../../src/model/Conflict'),
		CreateRef = require('../../src/model/CreateRef'),
		CreateVersion = require('../../src/model/CreateVersion'),
		Forbidden = require('../../src/model/Forbidden'),
		Item = require('../../src/model/Item'),
		JsonApiCollection = require('../../src/model/JsonApiCollection'),
		NotFound = require('../../src/model/NotFound'),
		Refs = require('../../src/model/Refs'),
		Version = require('../../src/model/Version'),
		VersionCreated = require('../../src/model/VersionCreated');

	var sampleStrParam = 'test_string';
	var sampleIntParam = 10;
	var FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || '<your forge client ID>';
	var FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || '<your forge client secret>';

	var apiClient = new ApiClient();

	before(function () {
		oauth2client = new ForgeSdk.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read', 'data:write']);
		credentials = {
			access_token: 'abce'
		};
		instance = new ForgeSdk.VersionsApi(apiClient);
		mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
	});

	after(function () {
		apiClient.callApi.restore();
	});


	describe('VersionsApi', function () {
		describe('getVersion', function () {
			it('should call getVersion successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'version_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Version;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/versions/{version_id}', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getVersion(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('getVersionItem', function () {
			it('should call getVersionItem successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'version_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Item;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/versions/{version_id}/item', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getVersionItem(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('getVersionRefs', function () {
			it('should call getVersionRefs successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'version_id': sampleStrParam
				};
				var queryParams = {
					'filter[type]': instance.apiClient.buildCollectionParam(opts.filterType, 'csv'),
					'filter[id]': instance.apiClient.buildCollectionParam(opts.filterId, 'csv'),
					'filter[extension.type]': instance.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv')
				};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = JsonApiCollection;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/versions/{version_id}/refs', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getVersionRefs(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('getVersionRelationshipsRefs', function () {
			it('should call getVersionRelationshipsRefs successfully', function (done) {
				var opts = {};
				var postBody = null;

				var pathParams = {
					'project_id': sampleStrParam,
					'version_id': sampleStrParam
				};
				var queryParams = {
					'filter[type]': instance.apiClient.buildCollectionParam(opts.filterType, 'csv'),
					'filter[id]': instance.apiClient.buildCollectionParam(opts.filterId, 'csv'),
					'filter[refType]': instance.apiClient.buildCollectionParam(opts.filterRefType, 'csv'),
					'filter[direction]': opts.filterDirection,
					'filter[extension.type]': instance.apiClient.buildCollectionParam(opts.filterExtensionType, 'csv')
				};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = Refs;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs', 'GET',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.getVersionRelationshipsRefs(sampleStrParam, sampleStrParam, opts, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('postVersion', function () {
			it('should call postVersion successfully', function (done) {
				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					'project_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = VersionCreated;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/versions', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.postVersion(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
		describe('postVersionRelationshipsRef', function () {
			it('should call postVersionRelationshipsRef successfully', function (done) {
				var opts = {};
				var postBody = sampleStrParam;

				var pathParams = {
					'project_id': sampleStrParam,
					'version_id': sampleStrParam
				};
				var queryParams = {};
				var headerParams = {
					'x-user-id': opts.xuserid
				};
				var formParams = {};

				var contentTypes = ['application/vnd.api+json'];
				var accepts = ['application/vnd.api+json', 'application/json'];
				var returnType = null;

				mockedApiClientRequest.withArgs('/data/v1/projects/{project_id}/versions/{version_id}/relationships/refs', 'POST',
					pathParams, queryParams, headerParams, formParams, postBody,
					contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

				instance.postVersionRelationshipsRef(sampleStrParam, sampleStrParam, sampleStrParam, oauth2client, credentials).then(function (response) {
					expect(response).to.be.ok();
					done();
				}, function (err) {
					done(err);
				});
			});
		});
	});

}());