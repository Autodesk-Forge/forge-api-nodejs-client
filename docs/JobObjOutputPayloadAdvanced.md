# ForgeSdk.JobObjOutputPayloadAdvanced

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exportFileStructure** | **String** | &#x60;single&#x60; (default): creates one OBJ file for all the input files (assembly file)  &#x60;multiple&#x60;: creates a separate OBJ file for each object  | [optional] [default to &#39;single&#39;]
**modelGuid** | **String** | Required for geometry extractions. The model view ID (guid). | [optional] 
**objectIds** | **[String]** | Required for geometry extractions. List object ids to be translated. -1 will extract the entire model.  | [optional] 


<a name="ExportFileStructureEnum"></a>
## Enum: ExportFileStructureEnum


* `single` (value: `"single"`)

* `multiple` (value: `"multiple"`)




