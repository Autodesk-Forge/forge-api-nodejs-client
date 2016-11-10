# ForgeSdk.ProjectsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProject**](ProjectsApi.md#getProject) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id} | 
[**getProjectHub**](ProjectsApi.md#getProjectHub) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id}/hub | 
[**postItem**](ProjectsApi.md#postItem) | **POST** /data/v1/projects/{project_id}/items | 
[**postStorage**](ProjectsApi.md#postStorage) | **POST** /data/v1/projects/{project_id}/storage | 
[**postVersion**](ProjectsApi.md#postVersion) | **POST** /data/v1/projects/{project_id}/versions | 


<a name="getProject"></a>
# **getProject**
> Project getProject(hubId, projectId, oauth2client)



Returns a project for a given &#x60;project_id&#x60;. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 
 **projectId** | **String**| the &#x60;project id&#x60; | 

### Return type

[**Project**](Project.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getProjectHub"></a>
# **getProjectHub**
> Hub getProjectHub(hubId, projectId, oauth2client)



Returns the hub for a given &#x60;project_id&#x60;. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 
 **projectId** | **String**| the &#x60;project id&#x60; | 

### Return type

[**Hub**](Hub.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postItem"></a>
# **postItem**
> ItemCreated postItem(projectId, body, oauth2client)



Creates a new item in the &#39;data&#39; domain service. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **body** | [**CreateItem**](CreateItem.md)| describe the item to be created | 

### Return type

[**ItemCreated**](ItemCreated.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postStorage"></a>
# **postStorage**
> StorageCreated postStorage(projectId, body, oauth2client)



Creates a storage location in the OSS where data can be uploaded to. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **body** | [**CreateStorage**](CreateStorage.md)| describe the file the storage is created for | 

### Return type

[**StorageCreated**](StorageCreated.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postVersion"></a>
# **postVersion**
> VersionCreated postVersion(projectId, body, oauth2client)



Creates a new version of an item in the &#39;data&#39; domain service. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **body** | [**CreateVersion**](CreateVersion.md)| describe the version to be created | 

### Return type

[**VersionCreated**](VersionCreated.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

