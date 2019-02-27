# ForgeSdk.Manifest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urn** | **String** | The Base64 (URL safe) encoded source file URN | 
**type** | **String** | Type of this JSON object | 
**progress** | **String** | Overall progress for all translation jobs in the manifest. Possible values are: &#x60;complete&#x60; or &#x60;##%&#x60;  | 
**status** | **String** | Overall status for translation jobs in the “manifest”. Possible values are: &#x60;pending&#x60;, &#x60;success&#x60;, &#x60;inprogress&#x60;, &#x60;failed&#x60; and &#x60;timeout&#x60;  | 
**hasThumbnail** | **Boolean** | Indicates if a thumbnail has been generated for the source file URN | 
**region** | **String** | Region  | [optional] 
**derivatives** | [**[ManifestDerivative]**](ManifestDerivative.md) | Requested output files for the source file URN | 


