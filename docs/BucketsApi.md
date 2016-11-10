# ForgeSdk.BucketsApi

All URIs are relative to *https://developer.api.autodesk.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBucket**](BucketsApi.md#createBucket) | **POST** /oss/v2/buckets | 
[**deleteBucket**](BucketsApi.md#deleteBucket) | **DELETE** /oss/v2/buckets/{bucketKey} | 
[**getBucketDetails**](BucketsApi.md#getBucketDetails) | **GET** /oss/v2/buckets/{bucketKey}/details | 
[**getBuckets**](BucketsApi.md#getBuckets) | **GET** /oss/v2/buckets | 


<a name="createBucket"></a>
# **createBucket**
> Bucket createBucket(postBuckets, opts, oauth2client, credentials)



Use this endpoint to create a bucket. Buckets are arbitrary spaces created and owned by applications. Bucket keys are globally unique across all regions, regardless of where they were created, and they cannot be changed. The application creating the bucket is the owner of the bucket. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postBuckets** | [**PostBucketsPayload**](PostBucketsPayload.md)| Body Structure | 
 **xAdsRegion** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]

### Return type

[**Bucket**](Bucket.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="deleteBucket"></a>
# **deleteBucket**
> deleteBucket(bucketKey, oauth2client, credentials)



This endpoint will delete a bucket. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 

### Return type

null (empty response body)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getBucketDetails"></a>
# **getBucketDetails**
> Bucket getBucketDetails(bucketKey, oauth2client, credentials)



This endpoint will return the buckets owned by the application. This endpoint supports pagination.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketKey** | **String**| URL-encoded bucket key | 

### Return type

[**Bucket**](Bucket.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

<a name="getBuckets"></a>
# **getBuckets**
> Buckets getBuckets(opts, oauth2client, credentials)



This endpoint will return the buckets owned by the application. This endpoint supports pagination. 

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region** | **String**| The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  | [optional] [default to US]
 **limit** | **Integer**| Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10  | [optional] [default to 10]
 **startAt** | **String**| Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response  | [optional] 

### Return type

[**Buckets**](Buckets.md)

### Authorization

[oauth2_application](../README.md#authentication)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.api+json, application/json

