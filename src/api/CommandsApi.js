/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
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
/*jshint esversion: 9 */

module.exports = (function () {
	'use strict';

	var ApiClient = require('../ApiClient');
	var FoldersApi = require('./FoldersApi');

	/**
	 * Commands service.
	 * @module api/CommandsApi
	 */

	/**
	 * Constructs a new CommandsApi.
	 * @alias module:api/CommandsApi
	 * @class
	 * @param {module:ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 */
	var exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance;

		/**
		 * Checks if a user has permission to perform specified actions on specified resources.
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body API payload
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.checkPermission = function (projectId, body, opts, oauth2client, credentials) {
			body.jsonapi.version = '1.0';

			body.data.type = 'commands';
			body.data.attributes.extension.type = 'commands:autodesk.core:CheckPermission';

			return (this._commandsApiCall(projectId, body, opts, oauth2client, credentials));
		};

		/**
		 * Retrieves the custom relationships between specified versions of items and other resources in the data domain service (folders, items, and versions). You can retrieve the relationships of up to 50 versions.
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body API payload
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.listRefs = function (projectId, body, opts, oauth2client, credentials) {
			body.jsonapi.version = '1.0';

			body.data.type = 'commands';
			body.data.attributes.extension.type = 'commands:autodesk.core:ListRefs';

			return (this._commandsApiCall(projectId, body, opts, oauth2client, credentials));
		};

		/**
		 * Retrieves metadata for up to 50 specified items. For example, an item name, or the date it was created. It returns the tip (latest) version of the items.
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body API payload
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.listItems = function (projectId, body, opts, oauth2client, credentials) {
			body.jsonapi.version = '1.0';

			body.data.type = 'commands';
			body.data.attributes.extension.type = 'commands:autodesk.core:ListItems';

			return (this._commandsApiCall(projectId, body, opts, oauth2client, credentials));
		};

		/**
		 * Creates folders in BIM 360 Docs.
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body API payload
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 * 
		 * @deprecated Please use the POST /folders API instead (FoldersApi.postFolder2())
		 */
		this.createFolder = function (projectId, body, opts, oauth2client, credentials) {
			body.jsonapi.version = '1.0';
			body.data.type = 'commands';
			body.data.attributes.extension.type = 'commands:autodesk.core:CreateFolder';
			return (this._commandsApiCall(projectId, body, opts, oauth2client, credentials));

			// return (new Promise(function (fullfil, reject) {
			// 	var prs = body.included.map(function (item) {
			// 		delete item.id;
			// 		var data = {
			// 			jsonapi: {
			// 				version: '1.0'
			// 			},
			// 			data: item
			// 		};
			// 		var foldersApi = new FoldersApi(this.apiClient);
			// 		return (foldersApi.postFolder2(projectId, data, opts, oauth2client, credentials));
			// 	});
			// 	Promise.all(prs)
			// 		.then(fullfil)
			// 		.catch(reject);
			// }));
		};

		/**
		 * Publishes the latest version of a Collaboration for Revit (C4R) model to BIM 360 Docs.
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body API payload
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.publishModel = function (projectId, body, opts, oauth2client, credentials) {
			body.jsonapi.version = '1.0';

			body.data.type = 'commands';
			body.data.attributes.extension.type = 'commands:autodesk.bim360:C4RModelPublish';

			return (this._commandsApiCall(projectId, body, opts, oauth2client, credentials));
		};

		/**
		 * Verifies whether a Collaboration for Revit (C4R) model needs to be published to BIM 360 Docs.
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body API payload
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getPublishModelJob = function (projectId, body, opts, oauth2client, credentials) {
			body.jsonapi.version = '1.0';

			body.data.type = 'commands';
			body.data.attributes.extension.type = 'commands:autodesk.bim360:C4RModelGetPublishJob';

			return (this._commandsApiCall(projectId, body, opts, oauth2client, credentials));
		};

		/**
		 * private method
		 * @param {String} projectId the project id
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Object} body API payload
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this._commandsApiCall = function (projectId, body, opts, oauth2client, credentials) {
			opts = opts || {};

			// verify the required parameter 'projectId' is set
			if (projectId == undefined || projectId == null) {
				return Promise.reject("Missing the required parameter 'projectId' when calling checkPermission");
			}

			// verify the required parameter 'body' is set
			if (body == undefined || body == null) {
				return Promise.reject("Missing the required parameter 'body' when calling checkPermission");
			}

			var postBody = body;

			var pathParams = {
				project_id: projectId
			};
			var queryParams = {};

			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = null;

			return this.apiClient.callApi(
				'/data/v1/projects/{project_id}/commands', 'POST',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

	};

	return exports;
}());