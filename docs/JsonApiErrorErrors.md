# ForgeSdk.JsonApiErrorErrors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | a unique identifier for this particular occurrence of the problem | 
**status** | **String** | the HTTP status code applicable to this problem, expressed as a string value | 
**code** | **String** | an application-specific error code, expressed as a string value | [optional] 
**title** | **String** | a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization | [optional] 
**detail** | **String** | a human-readable explanation specific to this occurrence of the problem. Like title, this field&#39;s value can be localized | 
**meta** | **Object** | a meta object containing non-standard meta-information about the error | [optional] 
**links** | [**JsonApiErrorLinks**](JsonApiErrorLinks.md) |  | [optional] 


