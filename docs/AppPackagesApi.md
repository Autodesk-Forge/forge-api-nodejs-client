# ForgeSdk.AppPackagesApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAppPackage**](AppPackagesApi.md#createAppPackage) | **POST** /autocad.io/us-east/v2/AppPackages | Creates an AppPackage module.
[**deleteAppPackage**](AppPackagesApi.md#deleteAppPackage) | **DELETE** /autocad.io/us-east/v2/AppPackages(%27{id}%27) | Removes a specific AppPackage.
[**deleteAppPackageHistory**](AppPackagesApi.md#deleteAppPackageHistory) | **POST** /autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.DeleteHistory | Removes the version history of the specified AppPackage.
[**getAllAppPackages**](AppPackagesApi.md#getAllAppPackages) | **GET** /autocad.io/us-east/v2/AppPackages | Returns the details of all AppPackages.
[**getAppPackage**](AppPackagesApi.md#getAppPackage) | **GET** /autocad.io/us-east/v2/AppPackages(%27{id}%27) | Returns the details of a specific AppPackage.
[**getAppPackageVersions**](AppPackagesApi.md#getAppPackageVersions) | **GET** /autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.GetVersions | Returns all old versions of a specified AppPackage.
[**getUploadUrl**](AppPackagesApi.md#getUploadUrl) | **GET** /autocad.io/us-east/v2/AppPackages/Operations.GetUploadUrl | Requests a pre-signed URL for uploading a zip file that contains the binaries for this AppPackage.
[**getUploadUrlWithRequireContentType**](AppPackagesApi.md#getUploadUrlWithRequireContentType) | **GET** /autocad.io/us-east/v2/AppPackages/Operations.GetUploadUrl(RequireContentType&#x3D;{require}) | Requests a pre-signed URL for uploading a zip file that contains the binaries for this AppPackage. Unlike the GetUploadUrl method that takes no parameters, this method allows the client to request that the pre-signed URL to be issued so that the subsequent HTTP PUT operation will require Content-Type&#x3D;binary/octet-stream.
[**patchAppPackage**](AppPackagesApi.md#patchAppPackage) | **PATCH** /autocad.io/us-east/v2/AppPackages(%27{id}%27) | Updates an AppPackage by specifying only the changed attributes.
[**setAppPackageVersion**](AppPackagesApi.md#setAppPackageVersion) | **POST** /autocad.io/us-east/v2/AppPackages(%27{id}%27)/Operations.SetVersion | Sets the AppPackage to the specified version.
[**updateAppPackage**](AppPackagesApi.md#updateAppPackage) | **PUT** /autocad.io/us-east/v2/AppPackages(%27{id}%27) | Updates an AppPackage by redefining the entire Activity object.


<a name="createAppPackage"></a>
# **createAppPackage**
> AppPackage createAppPackage(appPackage, oauth2client, credentials)

Creates an AppPackage module.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appPackage** | [**AppPackage**](AppPackage.md)|  | 

### Return type

[**AppPackage**](AppPackage.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="deleteAppPackage"></a>
# **deleteAppPackage**
> deleteAppPackage(id, oauth2client, credentials)

Removes a specific AppPackage.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="deleteAppPackageHistory"></a>
# **deleteAppPackageHistory**
> deleteAppPackageHistory(id, oauth2client, credentials)

Removes the version history of the specified AppPackage.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getAllAppPackages"></a>
# **getAllAppPackages**
> DesignAutomationAppPackages getAllAppPackages(oauth2client, credentials)

Returns the details of all AppPackages.

### Parameters
This endpoint does not need any parameter.

### Return type

[**DesignAutomationAppPackages**](DesignAutomationAppPackages.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getAppPackage"></a>
# **getAppPackage**
> AppPackage getAppPackage(id, oauth2client, credentials)

Returns the details of a specific AppPackage.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**AppPackage**](AppPackage.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getAppPackageVersions"></a>
# **getAppPackageVersions**
> DesignAutomationAppPackages getAppPackageVersions(id, oauth2client, credentials)

Returns all old versions of a specified AppPackage.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**DesignAutomationAppPackages**](DesignAutomationAppPackages.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getUploadUrl"></a>
# **getUploadUrl**
> getUploadUrl(oauth2client, credentials)

Requests a pre-signed URL for uploading a zip file that contains the binaries for this AppPackage.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getUploadUrlWithRequireContentType"></a>
# **getUploadUrlWithRequireContentType**
> getUploadUrlWithRequireContentType(require, oauth2client, credentials)

Requests a pre-signed URL for uploading a zip file that contains the binaries for this AppPackage. Unlike the GetUploadUrl method that takes no parameters, this method allows the client to request that the pre-signed URL to be issued so that the subsequent HTTP PUT operation will require Content-Type&#x3D;binary/octet-stream.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **require** | **Boolean**|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="patchAppPackage"></a>
# **patchAppPackage**
> patchAppPackage(id, appPackage, oauth2client, credentials)

Updates an AppPackage by specifying only the changed attributes.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **appPackage** | [**AppPackageOptional**](AppPackageOptional.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="setAppPackageVersion"></a>
# **setAppPackageVersion**
> setAppPackageVersion(id, appPackageVersion, oauth2client, credentials)

Sets the AppPackage to the specified version.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **appPackageVersion** | [**AppPackageVersion**](AppPackageVersion.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="updateAppPackage"></a>
# **updateAppPackage**
> updateAppPackage(id, appPackage, oauth2client, credentials)

Updates an AppPackage by redefining the entire Activity object.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **appPackage** | [**AppPackage**](AppPackage.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

