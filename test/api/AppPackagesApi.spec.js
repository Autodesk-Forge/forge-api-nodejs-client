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
      AppPackage = require('../../src/model/AppPackage'),
      AppPackageOptional = require('../../src/model/AppPackageOptional'),
      AppPackageVersion = require('../../src/model/AppPackageVersion'),
      DesignAutomationAppPackages = require('../../src/model/DesignAutomationAppPackages');

  var sampleStrParam = 'test_string';
  var sampleIntParam = 10;

  var apiClient = new ApiClient();

  before(function(){
    oauth2client = new ForgeSdk.AuthClientTwoLegged('CLIENT_ID', 'CLIENT_SECRET', ['data:read', 'data:write']);
    credentials = {access_token: 'abce'};
    instance = new ForgeSdk.AppPackagesApi(apiClient);
    mockedApiClientRequest = sinon.stub(instance.apiClient, 'callApi');
  });

   after(function () {
     apiClient.callApi.restore();
   });


  describe('AppPackagesApi', function() {
    describe('createAppPackage', function() {
      it('should call createAppPackage successfully', function(done) {

        var postBody = sampleStrParam;

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
        var returnType = AppPackage;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.createAppPackage(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('deleteAppPackage', function() {
      it('should call deleteAppPackage successfully', function(done) {

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
        var returnType = null;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'DELETE',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.deleteAppPackage(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('deleteAppPackageHistory', function() {
      it('should call deleteAppPackageHistory successfully', function(done) {

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
        var returnType = null;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.DeleteHistory', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.deleteAppPackageHistory(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getAllAppPackages', function() {
      it('should call getAllAppPackages successfully', function(done) {

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
        var returnType = DesignAutomationAppPackages;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getAllAppPackages(oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getAppPackage', function() {
      it('should call getAppPackage successfully', function(done) {

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
        var returnType = AppPackage;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getAppPackage(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getAppPackageVersions', function() {
      it('should call getAppPackageVersions successfully', function(done) {

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
        var returnType = DesignAutomationAppPackages;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.GetVersions', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getAppPackageVersions(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getUploadUrl', function() {
      it('should call getUploadUrl successfully', function(done) {

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
        var returnType = null;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages/Operations.GetUploadUrl', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getUploadUrl(oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('getUploadUrlWithRequireContentType', function() {
      it('should call getUploadUrlWithRequireContentType successfully', function(done) {

        var postBody = null;

        var pathParams = { 
        'require': sampleStrParam
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

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages/Operations.GetUploadUrl(RequireContentType={require})', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.getUploadUrlWithRequireContentType(sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('patchAppPackage', function() {
      it('should call patchAppPackage successfully', function(done) {

        var postBody = sampleStrParam;

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
        var returnType = null;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'PATCH',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.patchAppPackage(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('setAppPackageVersion', function() {
      it('should call setAppPackageVersion successfully', function(done) {

        var postBody = sampleStrParam;

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
        var returnType = null;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.SetVersion', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.setAppPackageVersion(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
    describe('updateAppPackage', function() {
      it('should call updateAppPackage successfully', function(done) {

        var postBody = sampleStrParam;

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
        var returnType = null;

        mockedApiClientRequest.withArgs('/autocad.io/us-east/v2/AppPackages(%27{id}%27)', 'PUT',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, oauth2client, credentials).returns(Promise.resolve('Success result'));

        instance.updateAppPackage(sampleStrParam, sampleStrParam, oauth2client, credentials).then(function(response){
            expect(response).to.be.ok();
            done();
        }, function(err){
            done(err);
        });
      });
    });
  });

}());
