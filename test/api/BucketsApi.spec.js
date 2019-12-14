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
      Bucket = require('../../src/model/Bucket'),
      Buckets = require('../../src/model/Buckets'),
      PostBucketsPayload = require('../../src/model/PostBucketsPayload'),
      Reason = require('../../src/model/Reason');

  var sampleStrParam = 'test_string';
  var sampleIntParam = 10;

  var apiClient = new ApiClient();

  before(function(){
    oauth2client = new ForgeSdk.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['data:read', 'data:write']);
    credentials = {access_token: 'abce'};
    instance = new ForgeSdk.BucketsApi(apiClient);
    mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
  });

   after(function () {
     apiClient.callApi.restore();
   });


  describe('BucketsApi', function() {
    describe('createBucket', function() {
      it('should call createBucket successfully', function(done) {
        var opts = {};
        var postBody = sampleStrParam;

        var pathParams = {
        };
        var queryParams = {
        };
        var headerParams = {
        'x-ads-region': opts['xAdsRegion']
        };
        var formParams = {
        };

        var contentTypes = ['application/json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Bucket;

        mockedApiClientRequest.withArgs('/oss/v2/buckets', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.createBucket(sampleStrParam, opts, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('deleteBucket', function() {
      it('should call deleteBucket successfully', function(done) {

        var postBody = null;

        var pathParams = {
        'bucketKey': sampleStrParam
        };
        var queryParams = {
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = null;

        mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}', 'DELETE',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.deleteBucket(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getBucketDetails', function() {
      it('should call getBucketDetails successfully', function(done) {

        var postBody = null;

        var pathParams = {
        'bucketKey': sampleStrParam
        };
        var queryParams = {
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Bucket;

        mockedApiClientRequest.withArgs('/oss/v2/buckets/{bucketKey}/details', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getBucketDetails(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getBuckets', function() {
      it('should call getBuckets successfully', function(done) {
        var opts = {};
        var postBody = null;

        var pathParams = {
        };
        var queryParams = {
        'region': opts['region'],
        'limit': opts['limit'],
        'startAt': opts['startAt']
        };
        var headerParams = {
        };
        var formParams = {
        };

        var contentTypes = ['application/json'];
        var accepts = ['application/vnd.api+json', 'application/json'];
        var returnType = Buckets;

        mockedApiClientRequest.withArgs('/oss/v2/buckets', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getBuckets(opts, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
  });

}());
