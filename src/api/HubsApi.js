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

module.exports = (function () {
	'use strict';

	var ApiClient = require('../ApiClient'),
		Forbidden = require('../model/Forbidden'),
		Hub = require('../model/Hub'),
		Hubs = require('../model/Hubs'),
		NotFound = require('../model/NotFound');

	/**
	 * Hubs service.
	 * @module api/HubsApi
	 */

	/**
	 * Constructs a new HubsApi.
	 * @alias module:api/HubsApi
	 * @class
	 * @param {module:ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:ApiClient#instance} if unspecified.
	 */
	var exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance;

		/**
		 * Returns data on a specific hub_id.
		 * @param {String} hubId the hub id for the current operation
		 * data is of type: {module:model/Hub}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getHub = function (hubId, oauth2client, credentials) {
			return this.getHub2(hubId, {}, oauth2client, credentials);
		};

		/**
		 * Returns data on a specific hub_id.
		 * @param {String} hubId the hub id for the current operation
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * data is of type: {module:model/Hub}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getHub2 = function (hubId, opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			// verify the required parameter 'hubId' is set
			if (hubId == undefined || hubId == null) {
				return Promise.reject("Missing the required parameter 'hubId' when calling getHub");
			}

			var pathParams = {
				'hub_id': hubId
			};
			var queryParams = {};
			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = ['application/vnd.api+json'];
			var accepts = ['application/vnd.api+json', 'application/json'];
			var returnType = Hub;

			return this.apiClient.callApi(
				'/project/v1/hubs/{hub_id}', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

		/**
		 * Returns a collection of accessible hubs for this member. A Hub represents an A360 Team/Personal hub or a BIM 360 account.
		 * @param {Object} opts Optional parameters
		 * @param {String} opts.xuserid API call will be limited to act on behalf of only the user specified
		 * @param {Array.<String>} opts.filterId filter by the `id` of the `ref` target
		 * @param {Array.<String>} opts.filterName filter by the `name` of the `ref` target
		 * @param {Array.<String>} opts.filterExtensionType filter by the extension type
		 * @param {Array.<*>} opts['filter[*]<-modifier>'] generic filter / <-modifier> is optional
		 * data is of type: {module:model/Hubs}
		 * @param {Object} oauth2client oauth2client for the call
		 * @param {Object} credentials credentials for the call
		 */
		this.getHubs = function (opts, oauth2client, credentials) {
			opts = opts || {};
			var postBody = null;

			var pathParams = {};
			var queryParams = {
				'filter[id]': this.apiClient.buildCollectionParam(opts['filterId'], 'csv'),
				'filter[name]': this.apiClient.buildCollectionParam(opts['filterName'], 'csv'),
				'filter[extension.type]': this.apiClient.buildCollectionParam(opts['filterExtensionType'], 'csv')
			};
			var keys = Object.keys(opts).filter(function (elt) {
				return (new RegExp(/^filter\[/).test(elt));
			});
			var that = this;
			keys.map(function (elt) {
				queryParams[elt] = that.apiClient.buildCollectionParam(opts[elt], 'csv');
				return (elt);
			});

			var headerParams = {
				'x-user-id': opts.xuserid
			};
			var formParams = {};

			var contentTypes = [];
			var accepts = [];
			var returnType = Hubs;

			return this.apiClient.callApi(
				'/project/v1/hubs', 'GET',
				pathParams, queryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, oauth2client, credentials
			);
		};

	};

	return exports;
}());