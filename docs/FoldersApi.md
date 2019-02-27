# ForgeSdk.FoldersApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFolder**](FoldersApi.md#getFolder) | **GET** /data/v1/projects/{project_id}/folders/{folder_id} | 
[**getFolderContents**](FoldersApi.md#getFolderContents) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/contents | 
[**getFolderParent**](FoldersApi.md#getFolderParent) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/parent | 
[**getFolderRefs**](FoldersApi.md#getFolderRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/refs | 
[**getFolderRelationshipsRefs**](FoldersApi.md#getFolderRelationshipsRefs) | **GET** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs | 
[**postFolder**](FoldersApi.md#postFolder) | **POST** /data/v1/projects/{project_id}/folders | 
[**postFolderRelationshipsRef**](FoldersApi.md#postFolderRelationshipsRef) | **POST** /data/v1/projects/{project_id}/folders/{folder_id}/relationships/refs | 


<a name="getFolder"></a>
# **getFolder**
> Folder getFolder(projectId, folderId, oauth2client, credentials)



Returns the folder by ID for any folder within a given project. All folders or sub-folders within a project are associated with their own unique ID, including the root folder. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 

### Return type

[**Folder**](Folder.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderContents"></a>
# **getFolderContents**
> JsonApiCollection getFolderContents(projectId, folderId, opts, oauth2client, credentials)



Returns a collection of items and folders within a folder. Items represent word documents, fusion design files, drawings, spreadsheets, etc. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **filterType** | [**[String]**](String.md)| filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 
 **pageNumber** | **Integer**| specify the page number | [optional] 
 **pageLimit** | **Integer**| specify the maximal number of elements per page | [optional] 

### Return type

[**JsonApiCollection**](JsonApiCollection.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderParent"></a>
# **getFolderParent**
> Folder getFolderParent(projectId, folderId, oauth2client, credentials)



Returns the parent folder (if it exists). In a project, subfolders and resource items are stored under a folder except the root folder which does not have a parent of its own. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 

### Return type

[**Folder**](Folder.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderRefs"></a>
# **getFolderRefs**
> JsonApiCollection getFolderRefs(projectId, folderId, opts, oauth2client, credentials)



Returns the resources (&#x60;items&#x60;, &#x60;folders&#x60;, and &#x60;versions&#x60;) which have a custom relationship with the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **filterType** | [**[String]**](String.md)| filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**JsonApiCollection**](JsonApiCollection.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="getFolderRelationshipsRefs"></a>
# **getFolderRelationshipsRefs**
> Refs getFolderRelationshipsRefs(projectId, folderId, opts, oauth2client, credentials)



Returns the custom relationships that are associated to the given &#x60;folder_id&#x60;. Custom relationships can be established between a folder and other resources within the &#39;data&#39; domain service (folders, items, and versions). 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **filterType** | [**[String]**](String.md)| filter by the &#x60;type&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterId** | [**[String]**](String.md)| filter by the &#x60;id&#x60; of the &#x60;ref&#x60; target | [optional] 
 **filterRefType** | [**[String]**](String.md)| filter by &#x60;refType&#x60; | [optional] 
 **filterDirection** | **String**| filter by the direction of the reference | [optional] 
 **filterExtensionType** | [**[String]**](String.md)| filter by the extension type | [optional] 

### Return type

[**Refs**](Refs.md)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postFolder"></a>
# **postFolder**
> postFolder(body, oauth2client, credentials)



Creates a new folder in the &#x60;data&#x60; domain service

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFolder**](CreateFolder.md)| describe the folder to be created | 

### Return type

null (empty response body)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

<a name="postFolderRelationshipsRef"></a>
# **postFolderRelationshipsRef**
> postFolderRelationshipsRef(projectId, folderId, body, oauth2client, credentials)



Creates a custom relationship between a folder and another resource within the &#39;data&#39; domain service (folder, item, or version). 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| the &#x60;project id&#x60; | 
 **folderId** | **String**| the &#x60;folder id&#x60; | 
 **body** | [**CreateRef**](CreateRef.md)| describe the ref to be created | 

### Return type

null (empty response body)

### Authorization

[oauth2_access_code](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json, application/json

