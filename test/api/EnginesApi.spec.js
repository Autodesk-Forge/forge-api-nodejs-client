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

module.export = (function() {
  'use strict';

  var expect = require('expect.js'),
      sinon = require('sinon'),
      ForgeSdk = require('../../src'),
      instance,
      oauth2client,
      credentials,
      mockedApiClientRequest,
      ApiClient = require('../../src/ApiClient'),
      DesignAutomationEngines = require('../../src/model/DesignAutomationEngines'),
      Engine = require('../../src/model/Engine');

  var sampleStrParam = 'test_string';
  var sampleIntParam = 10;

  var apiClient = new ApiClient();

  before(function(){
    oauth2client = new ForgeSdk.AuthClientTwoLegged('CLIENT_ID', 'CLIENT_SECRET', ['data:read', 'data:write']);
    credentials = {access_token: 'abce'};
    instance = new ForgeSdk.EnginesApi(apiClient);
    mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
  });

   after(function () {
     apiClient.callApi.restore();
   });


  describe('EnginesApi', function() {
    describe('getAllEngines', function() {
      it('should call getAllEngines successfully', function(done) {

        var postBody = null;

        var pathParams = { 
        };
        var queryParams = { 
        };
        var headerParams = { 
        };
        var formParams = { 
        };

        var contentTypes = ['application/json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = DesignAutomationEngines;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/Engines', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getAllEngines(oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getEngine', function() {
      it('should call getEngine successfully', function(done) {

        var postBody = null;

        var pathParams = { 
        'id': sampleStrParam
        };
        var queryParams = { 
        };
        var headerParams = { 
        };
        var formParams = { 
        };

        var contentTypes = ['application/json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Engine;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/Engines(%27{id}%27)', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getEngine(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
  });

}());
