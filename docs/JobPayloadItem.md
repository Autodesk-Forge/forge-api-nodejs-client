# ForgeSdk.JobPayloadItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The requested output types. Possible values include &#x60;svf&#x60;, &#x60;thumbnai&#x60;, &#x60;stl&#x60;, &#x60;step&#x60;, &#x60;iges&#x60;, or &#x60;obj&#x60;. For a list of supported types, call the [GET formats](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/formats-GET) endpoint. | 
**views** | **[String]** |  | [optional] 
**advanced** | [**JobObjOutputPayloadAdvanced**](JobObjOutputPayloadAdvanced.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `svf` (value: `"svf"`)

* `thumbnail` (value: `"thumbnail"`)

* `stl` (value: `"stl"`)

* `step` (value: `"step"`)

* `iges` (value: `"iges"`)

* `obj` (value: `"obj"`)




<a name="[ViewsEnum]"></a>
## Enum: [ViewsEnum]


* `2d` (value: `"2d"`)

* `3d` (value: `"3d"`)




