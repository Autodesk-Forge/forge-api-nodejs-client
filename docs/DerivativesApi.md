# ForgeSdk.DerivativesApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteManifest**](DerivativesApi.md#deleteManifest) | **DELETE** /modelderivative/v2/designdata/{urn}/manifest | 
[**getDerivativeManifest**](DerivativesApi.md#getDerivativeManifest) | **GET** /modelderivative/v2/designdata/{urn}/manifest/{derivativeUrn} | 
[**getFormats**](DerivativesApi.md#getFormats) | **GET** /modelderivative/v2/designdata/formats | 
[**getManifest**](DerivativesApi.md#getManifest) | **GET** /modelderivative/v2/designdata/{urn}/manifest | 
[**getMetadata**](DerivativesApi.md#getMetadata) | **GET** /modelderivative/v2/designdata/{urn}/metadata | 
[**getModelviewMetadata**](DerivativesApi.md#getModelviewMetadata) | **GET** /modelderivative/v2/designdata/{urn}/metadata/{guid} | 
[**getModelviewProperties**](DerivativesApi.md#getModelviewProperties) | **GET** /modelderivative/v2/designdata/{urn}/metadata/{guid}/properties | 
[**getThumbnail**](DerivativesApi.md#getThumbnail) | **GET** /modelderivative/v2/designdata/{urn}/thumbnail | 
[**translate**](DerivativesApi.md#translate) | **POST** /modelderivative/v2/designdata/job | 


<a name="deleteManifest"></a>
# **deleteManifest**
> Result deleteManifest(urn, oauth2client, credentials)



Deletes the manifest and all its translated output files (derivatives). However, it does not delete the design source file. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urn** | **String**| The Base64 (URL Safe) encoded design URN  | 

### Return type

[**Result**](Result.md)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/vnd.api+json, application/json

<a name="getDerivativeManifest"></a>
# **getDerivativeManifest**
> getDerivativeManifest(urn, derivativeUrn, opts, oauth2client, credentials)



Downloads a selected derivative. To download the file, you need to specify the file’s URN, which you retrieve by calling the [GET {urn}/manifest](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) endpoint.  Note that the Model Derivative API uses 2 types of URNs. The **design URN** is generated when you upload the source design file to Forge, and is used when calling most of the Model Derivative endpoints. A **derivative URN** is generated for each translated output file format, and is used for downloading the output design files.  You can set the range of bytes that are returned when downloading the derivative, using the range header. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urn** | **String**| The Base64 (URL Safe) encoded design URN  | 
 **derivativeUrn** | **String**| The URL-encoded URN of the derivatives. The URN is retrieved from the GET :urn/manifest endpoint.  | 
 **range** | **Integer**| This is the standard RFC 2616 range request header. It only supports one range specifier per request: 1. Range:bytes&#x3D;0-63 (returns the first 64 bytes) 2. Range:bytes&#x3D;64-127 (returns the second set of 64 bytes) 3. Range:bytes&#x3D;1022- (returns all the bytes from offset 1022 to the end) 4. If the range header is not specified, the whole content is returned.  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="getFormats"></a>
# **getFormats**
> Formats getFormats(opts, oauth2client, credentials)



Returns an up-to-date list of Forge-supported translations, that you can use to identify which types of derivatives are supported for each source file type. You can set this endpoint to only return the list of supported translations if they have been updated since a specified date.  See the [Supported Translation Formats table](https://developer.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations) for more details about supported translations.  Note that we are constantly adding new file formats to the list of Forge translations. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ifModifiedSince** | **Date**| The supported formats are only returned if they were modified since the specified date. An invalid date returns the latest supported format list. If the supported formats have not been modified since the specified date, the endpoint returns a &#x60;NOT MODIFIED&#x60; (304) response.  | [optional] 
 **acceptEncoding** | **String**| If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format.  | [optional] 

### Return type

[**Formats**](Formats.md)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getManifest"></a>
# **getManifest**
> Manifest getManifest(urn, opts, oauth2client, credentials)



Returns information about derivatives that correspond to a specific source file, including derviative URNs and statuses.  The URNs of the derivatives are used to download the generated derivatives when calling the [GET {urn}/manifest/{derivativeurn}](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-derivativeurn-GET) endpoint.  The statuses are used to verify whether the translation of requested output files is complete.  Note that different output files might complete their translation processes at different times, and therefore may have different &#x60;status&#x60; values.  When translating a source file a second time, the previously created manifest is not deleted; it appends the information (only new translations) to the manifest. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urn** | **String**| The Base64 (URL Safe) encoded design URN  | 
 **acceptEncoding** | **String**| If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format.  | [optional] 

### Return type

[**Manifest**](Manifest.md)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getMetadata"></a>
# **getMetadata**
> Metadata getMetadata(urn, opts, oauth2client, credentials)



Returns a list of model view (metadata) IDs for a design model. The metadata ID enables end users to select an object tree and properties for a specific model view.  Although most design apps (e.g., Fusion and Inventor) only allow a single model view (object tree and set of properties), some apps (e.g., Revit) allow users to design models with multiple model views (e.g., HVAC, architecture, perspective).  Note that you can only retrieve metadata from an input file that has been translated into an SVF file. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urn** | **String**| The Base64 (URL Safe) encoded design URN  | 
 **acceptEncoding** | **String**| If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format.  | [optional] 

### Return type

[**Metadata**](Metadata.md)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getModelviewMetadata"></a>
# **getModelviewMetadata**
> Metadata getModelviewMetadata(urn, guid, opts, oauth2client, credentials)



Returns an object tree, i.e., a hierarchical list of objects for a model view.  To call this endpoint you first need to call the [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) endpoint, to determine which model view (object tree and set of properties) to use.  Although most design apps (e.g., Fusion and Inventor) only allow a single model view, some apps (e.g., Revit) allow users to design models with multiple model views (e.g., HVAC, architecture, perspective).  Note that you can only retrieve metadata from an input file that has been translated into an SVF file. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urn** | **String**| The Base64 (URL Safe) encoded design URN  | 
 **guid** | **String**| Unique model view ID. Call [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) to get the ID  | 
 **acceptEncoding** | **String**| If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format.  | [optional] 

### Return type

[**Metadata**](Metadata.md)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getModelviewProperties"></a>
# **getModelviewProperties**
> Metadata getModelviewProperties(urn, guid, opts, oauth2client, credentials)



Returns a list of properties for each object in an object tree. Properties are returned according to object ID and do not follow a hierarchical structure.  The following image displays a typical list of properties for a Revit object:  ![](https://developer.doc.autodesk.com/bPlouYTd/7/_images/Properties.png)  To call this endpoint you need to first call the [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) endpoint, which returns a list of model view (metadata) IDs for a design input model. Select a model view (metadata) ID to use when calling the Get Properties endpoint.  Note that you can only get properties from a design input file that was previously translated into an SVF file. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urn** | **String**| The Base64 (URL Safe) encoded design URN  | 
 **guid** | **String**| Unique model view ID. Call [GET {urn}/metadata](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-GET) to get the ID  | 
 **acceptEncoding** | **String**| If specified with &#x60;gzip&#x60; or &#x60;*&#x60;, content will be compressed and returned in a GZIP format.  | [optional] 

### Return type

[**Metadata**](Metadata.md)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getThumbnail"></a>
# **getThumbnail**
> Object getThumbnail(urn, opts, oauth2client, credentials)



Returns the thumbnail for the source file. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **urn** | **String**| The Base64 (URL Safe) encoded design URN  | 
 **width** | **Integer**| The desired width of the thumbnail. Possible values are 100, 200 and 400.  | [optional] 
 **height** | **Integer**| The desired height of the thumbnail. Possible values are 100, 200 and 400.  | [optional] 

### Return type

**Object**

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="translate"></a>
# **translate**
> Job translate(job, opts, oauth2client, credentials)



Translate a source file from one format to another.  Derivatives are stored in a manifest that is updated each time this endpoint is used on a source file.  Note that this endpoint is asynchronous and initiates a process that runs in the background, rather than keeping an open HTTP connection until completion. Use the [GET {urn}/manifest](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-manifest-GET) endpoint to poll for the job’s completion. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | [**JobPayload**](JobPayload.md)|  | 
 **xAdsForce** | **Boolean**| &#x60;true&#x60;: the endpoint replaces previously translated output file types with the newly generated derivatives  &#x60;false&#x60; (default): previously created derivatives are not replaced  | [optional] [default to false]

### Return type

[**Job**](Job.md)

### Authorization

[oauth2_access_code](../README.md#authentication), [oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

