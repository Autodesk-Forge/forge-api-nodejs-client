# ForgeSdk.HubsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHub**](HubsApi.md#getHub) | **GET** /project/v1/hubs/{hub_id} | 
[**getHubs**](HubsApi.md#getHubs) | **GET** /project/v1/hubs | 


<a name="getHub"></a>
# **getHub**
> Hub getHub(hubId, oauth2client, credentials)



Returns data on a specific &#x60;hub_id&#x60;. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 

### Return type

[**Hub**](Hub.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getHubs"></a>
# **getHubs**
> Hubs getHubs(opts, oauth2client, credentials)



Returns a collection of accessible hubs for this member. A Hub represents an A360 Team/Personal hub or a BIM 360 account. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**Hubs**](Hubs.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

