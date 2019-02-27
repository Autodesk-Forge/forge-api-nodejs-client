# ForgeSdk.RelRefMeta

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refType** | **String** |  | 
**direction** | **String** | describes the direction of the reference relative to the resource the refs are queried for | 
**fromId** | **String** |  | 
**fromType** | **String** |  | 
**toId** | **String** |  | 
**toType** | **String** |  | 
**extension** | [**BaseAttributesExtensionObject**](BaseAttributesExtensionObject.md) |  | 


<a name="RefTypeEnum"></a>
## Enum: RefTypeEnum


* `derived` (value: `"derived"`)

* `dependencies` (value: `"dependencies"`)

* `auxiliary` (value: `"auxiliary"`)

* `xrefs` (value: `"xrefs"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `from` (value: `"from"`)

* `to` (value: `"to"`)




<a name="FromTypeEnum"></a>
## Enum: FromTypeEnum


* `folders` (value: `"folders"`)

* `items` (value: `"items"`)

* `versions` (value: `"versions"`)




<a name="ToTypeEnum"></a>
## Enum: ToTypeEnum


* `folders` (value: `"folders"`)

* `items` (value: `"items"`)

* `versions` (value: `"versions"`)




