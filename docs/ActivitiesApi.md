# ForgeSdk.ActivitiesApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActivity**](ActivitiesApi.md#createActivity) | **POST** /autocad.io/us-east/v2/Activities | Creates a new Activity.
[**deleteActivity**](ActivitiesApi.md#deleteActivity) | **DELETE** /autocad.io/us-east/v2/Activities(%27{id}%27) | Removes a specific Activity.
[**deleteActivityHistory**](ActivitiesApi.md#deleteActivityHistory) | **POST** /autocad.io/us-east/v2/Activities(%27{id}%27)/Operations.DeleteHistory | Removes the version history of the specified Activity.
[**getActivity**](ActivitiesApi.md#getActivity) | **GET** /autocad.io/us-east/v2/Activities(%27{id}%27) | Returns the details of a specific Activity.
[**getActivityVersions**](ActivitiesApi.md#getActivityVersions) | **GET** /autocad.io/us-east/v2/Activities(%27{id}%27)/Operations.GetVersions | Returns all old versions of a specified Activity.
[**getAllActivities**](ActivitiesApi.md#getAllActivities) | **GET** /autocad.io/us-east/v2/Activities | Returns the details of all Activities.
[**patchActivity**](ActivitiesApi.md#patchActivity) | **PATCH** /autocad.io/us-east/v2/Activities(%27{id}%27) | Updates an Activity by specifying only the changed attributes.
[**setActivityVersion**](ActivitiesApi.md#setActivityVersion) | **POST** /autocad.io/us-east/v2/Activities(%27{id}%27)/Operations.SetVersion | Sets the Activity to the specified version.


<a name="createActivity"></a>
# **createActivity**
> Activity createActivity(activity, oauth2client, credentials)

Creates a new Activity.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activity** | [**Activity**](Activity.md)|  | 

### Return type

[**Activity**](Activity.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="deleteActivity"></a>
# **deleteActivity**
> deleteActivity(id, oauth2client, credentials)

Removes a specific Activity.

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

<a name="deleteActivityHistory"></a>
# **deleteActivityHistory**
> deleteActivityHistory(id, oauth2client, credentials)

Removes the version history of the specified Activity.

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

<a name="getActivity"></a>
# **getActivity**
> Activity getActivity(id, oauth2client, credentials)

Returns the details of a specific Activity.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Activity**](Activity.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getActivityVersions"></a>
# **getActivityVersions**
> DesignAutomationActivities getActivityVersions(id, oauth2client, credentials)

Returns all old versions of a specified Activity.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**DesignAutomationActivities**](DesignAutomationActivities.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getAllActivities"></a>
# **getAllActivities**
> DesignAutomationActivities getAllActivities(oauth2client, credentials)

Returns the details of all Activities.

### Parameters
This endpoint does not need any parameter.

### Return type

[**DesignAutomationActivities**](DesignAutomationActivities.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="patchActivity"></a>
# **patchActivity**
> patchActivity(id, activity, oauth2client, credentials)

Updates an Activity by specifying only the changed attributes.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **activity** | [**ActivityOptional**](ActivityOptional.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="setActivityVersion"></a>
# **setActivityVersion**
> setActivityVersion(id, activityVersion, oauth2client, credentials)

Sets the Activity to the specified version.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **activityVersion** | [**ActivityVersion**](ActivityVersion.md)|  | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

