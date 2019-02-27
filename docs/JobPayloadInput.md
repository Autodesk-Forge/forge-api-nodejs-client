# ForgeSdk.JobPayloadInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urn** | **String** | The design URN; returned when uploading the file to Forge The URN needs to be [Base64 (URL Safe) encoded](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/#id3).  | 
**compressedUrn** | **Boolean** | Set this to &#x60;true&#x60; if the source file is compressed. If set to &#x60;true&#x60;, you need to define the &#x60;rootFilename&#x60;. | [optional] [default to false]
**rootFilename** | **String** | The root filename of the compressed file. Mandatory if the &#x60;compressedUrn&#x60; is set to &#x60;true&#x60;. | [optional] 


