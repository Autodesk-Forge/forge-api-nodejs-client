# Forge Node.js SDK [![Build Status](https://travis-ci.org/Autodesk-Forge/forge-api-nodejs-client.svg?branch=master)](https://travis-ci.org/Autodesk-Forge/forge-api-nodejs-client)

*Forge API*:
[![oAuth2](https://img.shields.io/badge/oAuth2-v1-green.svg)](https://forge.autodesk.com/developer/documentation)
[![Data-Management](https://img.shields.io/badge/Data%20Management-v1-green.svg)](https://forge.autodesk.com/developer/documentation)
[![OSS](https://img.shields.io/badge/OSS-v2-green.svg)](https://forge.autodesk.com/developer/documentation)
[![Model-Derivative](https://img.shields.io/badge/Model%20Derivative-v2-green.svg)](https://forge.autodesk.com/developer/documentation)

*NOTE*: The [Design Automation v2 API](https://forge.autodesk.com/en/docs/design-automation/v2/developers_guide/overview/) is deprecated in this module. Instead move to the [Design Automation v3 API](https://forge.autodesk.com/en/docs/design-automation/v3/developers_guide/overview/) using this [NPM package](https://www.npmjs.com/package/autodesk.forge.designautomation)

*This Version includes Data Management filters and pagination, and the Data Management 'Commands' API.*

## Overview

This [Node.js](https://nodejs.org/) SDK enables you to easily integrate the Forge REST APIs
into your application, including [OAuth](https://developer.autodesk.com/en/docs/oauth/v2/overview/),
[Data Management](https://developer.autodesk.com/en/docs/data/v2/overview/),
[Model Derivative](https://developer.autodesk.com/en/docs/model-derivative/v2/overview/),

### Requirements

* Node.js version 6 and above.
* A registered app on the [Forge Developer portal](https://developer.autodesk.com/myapps).
* A Node.js web server (such as Express) for 3-legged authentication.


### Installation

```sh
    npm install forge-apis --save
```

## Tutorial

Follow this tutorial to see a step-by-step authentication guide, and examples of how to use the Forge APIs.

### Create an App

Create an app on the Forge Developer portal. Note the client ID and client secret.

### Authentication

This SDK comes with an [OAuth 2.0](https://developer.autodesk.com/en/docs/oauth/v2/overview/) client that allows you to
retrieve 2-legged and 3-legged tokens. It also enables you to refresh 3-legged tokens. The tutorial uses 2-legged
and 3-legged tokens for calling different Data Management endpoints.

#### 2-Legged Token

This type of token is given directly to the application.

To get a 2-legged token run the following code. Note that you need to replace `your-client-id` and `your-client-secret` with your [app](https://developer.autodesk.com/myapps)'s client ID and client secret.

``` JavaScript
var ForgeSDK = require('forge-apis');
var FORGE_CLIENT_ID = '<your-client-id>' , FORGE_CLIENT_SECRET = '<your-client-secret>';

// Initialize the 2-legged OAuth2 client, set specific scopes and optionally set the `autoRefresh` parameter to true
// if you want the token to auto refresh
var autoRefresh = true; // or false

var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, [
    'data:read',
    'data:write'
], autoRefresh);

oAuth2TwoLegged.authenticate().then(function(credentials){
    // The `credentials` object contains an access_token that is being used to call the endpoints.
    // In addition, this object is applied globally on the oAuth2TwoLegged client that you should use when calling secure endpoints.
}, function(err){
    console.error(err);
});
```

#### 3-Legged Token

##### Generate an Authentication URL

To ask for permissions from a user to retrieve an access token, you
redirect the user to a consent page.

Replace `your-client-id`, `your-client-secret`, and `your-redirect-url` with your [app](https://developer.autodesk.com/myapps)'s client ID, client secret, and redirect URL, and run the code to create a consent page URL.

Note that the redirect URL must match the pattern of the callback URL field of the app’s registration in the My Apps section. The pattern may include wildcards after the hostname, allowing different redirect URL values to be specified in different parts of your app.

``` JavaScript
var ForgeSDK = require('forge-apis');
var FORGE_CLIENT_ID = '<your-client-id>', FORGE_CLIENT_SECRET = '<your-client-secret>', REDIRECT_URL = '<your-redirect-url>';

// Initialize the 3-legged OAuth2 client, set specific scopes and optionally set the `autoRefresh` parameter to true
// if you want the token to auto refresh
var autoRefresh = true;
var oAuth2ThreeLegged = new ForgeSDK.AuthClientThreeLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, REDIRECT_URL, [
    'data:read',
    'data:write'
], autoRefresh);

// Generate a URL page that asks for permissions for the specified scopes.
oAuth2ThreeLegged.generateAuthUrl();
```

##### Retrieve an Authorization Code

Once a user receives permissions on the consent page, Forge will redirect
the page to the redirect URL you provided when you created the app. An authorization code is returned in the query string.

GET /callback?code={authorizationCode}

##### Retrieve an Access Token

Request an access token using the authorization code you received, as shown below:

``` JavaScript
oAuth2ThreeLegged.getToken(authorizationCode).then(function (credentials) {
    // The `credentials` object contains an `access_token` and an optional `refresh_token` that you can use to call the endpoints.
}, function(err){
    console.error(err);
});
```

Note that access tokens expire after a short period of time. The `expires_in` field in the `credentials` object gives
the validity of an access token in seconds. To refresh your access token, call the `oAuth2ThreeLegged.refreshToken(credentials);` method.

#### Example API Calls

Use the `oauth2client` (2-legged or 3-legged) object and the `credentials` object to call the Forge APIs.

``` JavaScript

// Import the library.
var ForgeSDK = require('forge-apis');

// Initialize the relevant clients; in this example, the Hubs and Buckets clients (part of the Data Management API).
var HubsApi = new ForgeSDK.HubsApi(); //Hubs Client
var BucketsApi = new ForgeSDK.BucketsApi(); //Buckets Client

// Get the buckets owned by an application.
// Use the oAuth2TwoLegged client object and the credentials object that were
// obtained from the previous step
// notice that you need do add a bucket:read scope for the getBuckets to work
BucketsApi.getBuckets({}, oAuth2TwoLegged, credentials).then(function(buckets){
    console.log(buckets);
}, function(err){
     console.error(err);
});

// Get the hubs that are accessible for a member.
// Use the oAuth2ThreeLegged client object and the credentials object that were
// obtained from the previous step
HubsApi.getHubs({}, oAuth2ThreeLegged, credentials).then(function(hubs) {
    console.log(hubs);
}, function(err){
     console.error(err);
});

```

## API Documentation

You can get the full documentation for the API on the [Developer Portal](https://developer.autodesk.com/)


### Documentation for API Endpoints

All URIs are relative to *https://developer.api.autodesk.com/* (for example createBucket URI is 'https://developer.api.autodesk.com/oss/v2/buckets')

#### DerivativesApi regions

```javascript
ForgeSDK.DerivativesApi(apiClient =null, region ='US'); // defaults to US
// if null/undefined, apiClient defaults to the default ForgeSDK.ApiClient.instance
```

Region | Path |
------------ | ------------- |
US | /modelderivative/v2/ |
EMEA | /modelderivative/v2/regions/eu/ |
EU | /modelderivative/v2/regions/eu/ |

ex:
```javascript
var DerivativesApi = new ForgeSDK.DerivativesApi(); // defaults to US
var DerivativesApi = new ForgeSDK.DerivativesApi(undefined, 'EMEA'); // Use EMEA endpoint
var DerivativesApi = new ForgeSDK.DerivativesApi(undefined, 'EU'); // Use EMEA endpoint
var DerivativesApi = new ForgeSDK.DerivativesApi(undefined, 'US'); // Use US endpoint
```

#### Classes

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ForgeSdk.BucketsApi* | [**createBucket**](docs/BucketsApi.md#createBucket) | **POST** /oss/v2/buckets |
*ForgeSdk.BucketsApi* | [**deleteBucket**](docs/BucketsApi.md#deleteBucket) | **DELETE** /oss/v2/buckets/{bucketKey} |
*ForgeSdk.BucketsApi* | [**getBucketDetails**](docs/BucketsApi.md#getBucketDetails) | **GET** /oss/v2/buckets/{bucketKey}/details |
*ForgeSdk.BucketsApi* | [**getBuckets**](docs/BucketsApi.md#getBuckets) | **GET** /oss/v2/buckets |
*ForgeSdk.DerivativesApi* | [**deleteManifest**](docs/DerivativesApi.md#deleteManifest) | **DELETE** /modelderivative/v2/designdata/{urn}/manifest |
*ForgeSdk.DerivativesApi* | [**getDerivativeManifest**](docs/DerivativesApi.md#getDerivativeManifest) | **GET** /modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn} |
*ForgeSdk.DerivativesApi* | [**getFormats**](docs/DerivativesApi.md#getFormats) | **GET** /modelderivative/v2/designdata/formats |
*ForgeSdk.DerivativesApi* | [**getManifest**](docs/DerivativesApi.md#getManifest) | **GET** /modelderivative/v2/designdata/{urn}/manifest |
*ForgeSdk.DerivativesApi* | [**getMetadata**](docs/DerivativesApi.md#getMetadata) | **GET** /modelderivative/v2/designdata/{urn}/metadata |
*ForgeSdk.DerivativesApi* | [**getModelviewMetadata**](docs/DerivativesApi.md#getModelviewMetadata) | **GET** /modelderivative/v2/designdata/{urn}/metadata/{guid} |
*ForgeSdk.DerivativesApi* | [**getModelviewProperties**](docs/DerivativesApi.md#getModelviewProperties) | **GET** /modelderivative/v2/designdata/{urn}/metadata/{guid}/properties |
*ForgeSdk.DerivativesApi* | [**getThumbnail**](docs/DerivativesApi.md#getThumbnail) | **GET** /modelderivative/v2/designdata/{urn}/thumbnail |
*ForgeSdk.DerivativesApi* | [**translate**](docs/DerivativesApi.md#translate) | **POST** /modelderivative/v2/designdata/job |
*ForgeSdk.FoldersApi* | [**getFolder**](docs/FoldersApi.md#getFolder) | **GET** /data/v1/projects/{project_id}/folders/{folder_id} |
*ForgeSdk.FoldersApi* | [**getFolderContents**](docs/FoldersApi.md#getFolderContents) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/contents |
*ForgeSdk.FoldersApi* | [**getFolderParent**](docs/FoldersApi.md#getFolderParent) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/parent |
*ForgeSdk.FoldersApi* | [**getFolderRefs**](docs/FoldersApi.md#getFolderRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/refs |
*ForgeSdk.FoldersApi* | [**getFolderRelationshipsRefs**](docs/FoldersApi.md#getFolderRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs |
*ForgeSdk.FoldersApi* | [**postFolder**](docs/FoldersApi.md#postFolder) | **POST** /data/v1/projects/{project_id}/folders |
*ForgeSdk.FoldersApi* | [**postFolderRelationshipsRef**](docs/FoldersApi.md#postFolderRelationshipsRef) | **POST** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs |
*ForgeSdk.HubsApi* | [**getHub**](docs/HubsApi.md#getHub) | **GET** /project/v1/hubs/{hub_id} |
*ForgeSdk.HubsApi* | [**getHubs**](docs/HubsApi.md#getHubs) | **GET** /project/v1/hubs |
*ForgeSdk.ItemsApi* | [**getItem**](docs/ItemsApi.md#getItem) | **GET** /data/v1/projects/{project_id}/items/{item_id} |
*ForgeSdk.ItemsApi* | [**getItemParentFolder**](docs/ItemsApi.md#getItemParentFolder) | **GET** /data/v1/projects/{project_id}/items/{item_id}/parent |
*ForgeSdk.ItemsApi* | [**getItemRefs**](docs/ItemsApi.md#getItemRefs) | **GET** /data/v1/projects/{project_id}/items/{item_id}/refs |
*ForgeSdk.ItemsApi* | [**getItemRelationshipsRefs**](docs/ItemsApi.md#getItemRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/items/{item_id}/relationships/refs |
*ForgeSdk.ItemsApi* | [**getItemTip**](docs/ItemsApi.md#getItemTip) | **GET** /data/v1/projects/{project_id}/items/{item_id}/tip |
*ForgeSdk.ItemsApi* | [**getItemVersions**](docs/ItemsApi.md#getItemVersions) | **GET** /data/v1/projects/{project_id}/items/{item_id}/versions |
*ForgeSdk.ItemsApi* | [**postItem**](docs/ItemsApi.md#postItem) | **POST** /data/v1/projects/{project_id}/items |
*ForgeSdk.ItemsApi* | [**postItemRelationshipsRef**](docs/ItemsApi.md#postItemRelationshipsRef) | **POST** /data/v1/projects/{project_id}/items/{item_id}/relationships/refs |
*ForgeSdk.ObjectsApi* | [**copyTo**](docs/ObjectsApi.md#copyTo) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName}/copyto/{newObjName} |
*ForgeSdk.ObjectsApi* | [**createSignedResource**](docs/ObjectsApi.md#createSignedResource) | **POST** /oss/v2/buckets/{bucketKey}/objects/{objectName}/signed |
*ForgeSdk.ObjectsApi* | [**deleteObject**](docs/ObjectsApi.md#deleteObject) | **DELETE** /oss/v2/buckets/{bucketKey}/objects/{objectName} |
*ForgeSdk.ObjectsApi* | [**deleteSignedResource**](docs/ObjectsApi.md#deleteSignedResource) | **DELETE** /oss/v2/signedresources/{id} |
*ForgeSdk.ObjectsApi* | [**getObject**](docs/ObjectsApi.md#getObject) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName} |
*ForgeSdk.ObjectsApi* | [**getObjectDetails**](docs/ObjectsApi.md#getObjectDetails) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName}/details |
*ForgeSdk.ObjectsApi* | [**getObjects**](docs/ObjectsApi.md#getObjects) | **GET** /oss/v2/buckets/{bucketKey}/objects |
*ForgeSdk.ObjectsApi* | [**getSignedResource**](docs/ObjectsApi.md#getSignedResource) | **GET** /oss/v2/signedresources/{id} |
*ForgeSdk.ObjectsApi* | [**getStatusBySessionId**](docs/ObjectsApi.md#getStatusBySessionId) | **GET** /oss/v2/buckets/{bucketKey}/objects/{objectName}/status/{sessionId} |
*ForgeSdk.ObjectsApi* | [**uploadChunk**](docs/ObjectsApi.md#uploadChunk) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName}/resumable |
*ForgeSdk.ObjectsApi* | [**uploadObject**](docs/ObjectsApi.md#uploadObject) | **PUT** /oss/v2/buckets/{bucketKey}/objects/{objectName} |
*ForgeSdk.ObjectsApi* | [**uploadSignedResource**](docs/ObjectsApi.md#uploadSignedResource) | **PUT** /oss/v2/signedresources/{id} |
*ForgeSdk.ObjectsApi* | [**uploadSignedResourcesChunk**](docs/ObjectsApi.md#uploadSignedResourcesChunk) | **PUT** /oss/v2/signedresources/{id}/resumable |
*ForgeSdk.ProjectsApi* | [**getHubProjects**](docs/ProjectsApi.md#getHubProjects) | **GET** /project/v1/hubs/{hub_id}/projects |
*ForgeSdk.ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getProject) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id} |
*ForgeSdk.ProjectsApi* | [**getProjectHub**](docs/ProjectsApi.md#getProjectHub) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id}/hub |
*ForgeSdk.ProjectsApi* | [**getProjectTopFolders**](docs/ProjectsApi.md#getProjectTopFolders) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id}/topFolders |
*ForgeSdk.ProjectsApi* | [**postStorage**](docs/ProjectsApi.md#postStorage) | **POST** /data/v1/projects/{project_id}/storage |
*ForgeSdk.UserProfileApi* | [**getUserProfile**](docs/UserProfileApi.md#getUserProfile) | **GET** /userprofile/v1/users/@me | Returns the profile information of an authorizing end user.
*ForgeSdk.VersionsApi* | [**getVersion**](docs/VersionsApi.md#getVersion) | **GET** /data/v1/projects/{project_id}/versions/{version_id} |
*ForgeSdk.VersionsApi* | [**getVersionItem**](docs/VersionsApi.md#getVersionItem) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/item |
*ForgeSdk.VersionsApi* | [**getVersionRefs**](docs/VersionsApi.md#getVersionRefs) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/refs |
*ForgeSdk.VersionsApi* | [**getVersionRelationshipsRefs**](docs/VersionsApi.md#getVersionRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs |
*ForgeSdk.VersionsApi* | [**postVersion**](docs/VersionsApi.md#postVersion) | **POST** /data/v1/projects/{project_id}/versions |
*ForgeSdk.VersionsApi* | [**postVersionRelationshipsRef**](docs/VersionsApi.md#postVersionRelationshipsRef) | **POST** /data/v1/projects/{project_id}/versions/{version_id}/relationships/refs |


### Thumbnail

![thumbnail](/thumbnail.png)

## Support

forge.help@autodesk.com
