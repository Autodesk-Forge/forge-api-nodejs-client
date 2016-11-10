# ForgeSdk.ManifestChildren

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of this JSON object | 
**role** | **String** | Output file type | 
**name** | **String** | Output file type | [optional] 
**hasThumbnail** | **Boolean** | Indicates if a thumbnail has been generated  | [optional] 
**mime** | **String** | MIME type of the generated file | 
**urn** | **String** | Output file URN; used as a file identifier | [optional] 
**progress** | **String** | Translation progress for requested entity | [optional] 
**status** | **String** | Status of the requested entity; possible values are: &#x60;pending&#x60;, &#x60;success&#x60;, &#x60;inprogress&#x60;, &#x60;failed&#x60;, &#x60;timeout&#x60; and &#x60;partialsuccess&#x60;  | [optional] 
**resolution** | **[String]** | Available thumbnail resolution | [optional] 
**modelGUID** | **String** |  | [optional] 
**objectIds** | **[Integer]** |  | [optional] 
**messages** | [**Messages**](Messages.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `resource` (value: `"resource"`)

* `manifest` (value: `"manifest"`)

* `geometry` (value: `"geometry"`)

* `view` (value: `"view"`)




<a name="RoleEnum"></a>
## Enum: RoleEnum


* `2d` (value: `"2d"`)

* `3d` (value: `"3d"`)

* `graphics` (value: `"graphics"`)

* `manifest` (value: `"manifest"`)

* `thumbnail` (value: `"thumbnail"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `inprogress` (value: `"inprogress"`)

* `success` (value: `"success"`)

* `failed` (value: `"failed"`)

* `timeout` (value: `"timeout"`)

* `partialsuccess` (value: `"partialsuccess"`)




