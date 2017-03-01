# ForgeSdk.EnginesApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllEngines**](EnginesApi.md#getAllEngines) | **GET** /autocad.io/us-east/v2/Engines | Returns the details of all available AutoCAD core engines.
[**getEngine**](EnginesApi.md#getEngine) | **GET** /autocad.io/us-east/v2/Engines(%27{id}%27) | Returns the details of a specific AutoCAD core engine.


<a name="getAllEngines"></a>
# **getAllEngines**
> DesignAutomationEngines getAllEngines(oauth2client, credentials)

Returns the details of all available AutoCAD core engines.

### Parameters
This endpoint does not need any parameter.

### Return type

[**DesignAutomationEngines**](DesignAutomationEngines.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getEngine"></a>
# **getEngine**
> Engine getEngine(id, oauth2client, credentials)

Returns the details of a specific AutoCAD core engine.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Engine**](Engine.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

