/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * Contact: forge.help@autodesk.com
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
var FORGE_CLIENT_ID = process.env.FORGE_CLIENT_ID || '<your forge client ID>';
var FORGE_CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET || '<your forge client secret>';

var ApiClient = require('../src/ApiClient');
var apiclient = new ApiClient();
apiclient.basePath = 'https://developer-stg.api.autodesk.com'.replace(/\/+$/, '');

ApiClient.instance = apiclient;

var OAuth2TwoLegged = require('../src/auth/OAuth2TwoLegged');
var oauth2client2legged = new OAuth2TwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read', 'data:write', 'data:search', 'bucket:read', 'bucket:update', 'bucket:create']);

var BucketApi = require('../src/api/BucketsApi');

oauth2client2legged.authenticate()
	.then(function (response) {
		console.log(response);
		var bucketsApi = new BucketApi();
		return (bucketsApi.getBuckets({}, oauth2client2legged, oauth2client2legged.getCredentials()));
	})
	.then(function (response) {
		console.log(response);
	})
	.catch(function (err) {
		console.error(err);
	});

// var path =
// apiclient.callApi(
// 		path, 'GET', {}, {}, {}, {}, {}, [], [],
// 		null, null, null
// 	)
// 	.then(function (response) {
// 		console.log(response);
// 	})
// 	.catch(function (err) {
// 		console.error(err);
// 	});