# ForgeSdk.ProjectsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHubProjects**](ProjectsApi.md#getHubProjects) | **GET** /project/v1/hubs/{hub_id}/projects | 
[**getProject**](ProjectsApi.md#getProject) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id} | 
[**getProjectHub**](ProjectsApi.md#getProjectHub) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id}/hub | 
[**getProjectTopFolders**](ProjectsApi.md#getProjectTopFolders) | **GET** /project/v1/hubs/{hub_id}/projects/{project_id}/topFolders | 
[**postStorage**](ProjectsApi.md#postStorage) | **POST** /data/v1/projects/{project_id}/storage | 


<a name="getHubProjects"></a>
# **getHubProjects**
> Projects getHubProjects(hubId, opts, oauth2client, credentials)



Returns a collection of projects for a given &#x60;hub_id&#x60;. A project represents an A360 project or a BIM 360 project which is set up under an A360 hub or BIM 360 account, respectively. Within a hub or an account, multiple projects can be created to be used. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**Projects**](Projects.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getProject"></a>
# **getProject**
> Project getProject(hubId, projectId, oauth2client, credentials)



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
> Hub getProjectHub(hubId, projectId, oauth2client, credentials)



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

<a name="getProjectTopFolders"></a>
# **getProjectTopFolders**
> TopFolders getProjectTopFolders(hubId, projectId, oauth2client, credentials)



Returns the details of the highest level folders the user has access to for a given project

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hubId** | **String**| the &#x60;hub id&#x60; for the current operation | 
 **projectId** | **String**| the &#x60;project id&#x60; | 

### Return type

[**TopFolders**](TopFolders.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postStorage"></a>
# **postStorage**
> StorageCreated postStorage(projectId, body, oauth2client, credentials)



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

