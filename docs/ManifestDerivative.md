# ForgeSdk.ManifestDerivative

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Output file type | 
**hasThumbnail** | **Boolean** | Indicates if a thumbnail has been generated | 
**outputType** | **String** |  | [optional] 
**progress** | **String** | Translation progress for requested entity | 
**status** | **String** | Status of the requested entity; possible values are: &#x60;pending&#x60;, &#x60;success&#x60;, &#x60;inprogress&#x60;, &#x60;failed&#x60;, &#x60;timeout&#x60; and &#x60;partialsuccess&#x60;  | 
**children** | [**[ManifestChildren]**](ManifestChildren.md) |  | 


<a name="OutputTypeEnum"></a>
## Enum: OutputTypeEnum


* `stl` (value: `"stl"`)

* `step` (value: `"step"`)

* `iges` (value: `"iges"`)

* `obj` (value: `"obj"`)

* `svf` (value: `"svf"`)

* `thumbnail` (value: `"thumbnail"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `inprogress` (value: `"inprogress"`)

* `success` (value: `"success"`)

* `failed` (value: `"failed"`)

* `timeout` (value: `"timeout"`)

* `partialsuccess` (value: `"partialsuccess"`)




