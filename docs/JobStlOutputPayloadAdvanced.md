# ForgeSdk.JobStlOutputPayloadAdvanced

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | Default format is &#x60;binary&#x60;. Possible values are &#x60;binary&#x60; or &#x60;ascii&#x60;. | [optional] [default to &#39;binary&#39;]
**exportColor** | **Boolean** | Color is exported by default. If set to &#x60;true&#x60;, color is exported. If set to &#x60;false&#x60;, color is not exported. | [optional] [default to true]
**exportFileStructure** | **String** | &#x60;single&#x60; (default): creates one STL file for all the input files (assembly file)  &#x60;multiple&#x60;: creates a separate STL file for each object  | [optional] [default to &#39;single&#39;]


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `binary` (value: `"binary"`)

* `ascii` (value: `"ascii"`)




<a name="ExportFileStructureEnum"></a>
## Enum: ExportFileStructureEnum


* `single` (value: `"single"`)

* `multiple` (value: `"multiple"`)




