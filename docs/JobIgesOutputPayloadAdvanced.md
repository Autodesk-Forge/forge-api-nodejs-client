# ForgeSdk.JobIgesOutputPayloadAdvanced

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tolerance** | **Number** | Possible values are between &#x60;0&#x60; and &#x60;1&#x60;. By default it is set at 0.001. | [optional] [default to 0.001]
**surfaceType** | **String** | Possible values are &#x60;bounded&#x60;, &#x60;trimmed&#x60; and &#x60;wireframe&#x60;. By default it is set to bounded surface. | [optional] [default to &#39;bounded&#39;]
**sheetType** | **String** | Export the sheet body to IGES. &#x60;open&#x60;, &#x60;shell&#x60;, &#x60;surface&#x60; or &#x60;wireframe&#x60;. By default, it is set to &#x60;surface&#x60;. | [optional] [default to &#39;surface&#39;]
**solidType** | **String** | Export the solid body to IGES &#x60;solid&#x60;, &#x60;surface&#x60; or &#x60;wireframe&#x60;. By default, it is set to &#x60;solid&#x60;. | [optional] [default to &#39;solid&#39;]


<a name="SurfaceTypeEnum"></a>
## Enum: SurfaceTypeEnum


* `bounded` (value: `"bounded"`)

* `trimmed` (value: `"trimmed"`)

* `wireframe` (value: `"wireframe"`)




<a name="SheetTypeEnum"></a>
## Enum: SheetTypeEnum


* `open` (value: `"open"`)

* `surface` (value: `"surface"`)

* `shell` (value: `"shell"`)

* `wireframe` (value: `"wireframe"`)




<a name="SolidTypeEnum"></a>
## Enum: SolidTypeEnum


* `solid` (value: `"solid"`)

* `surface` (value: `"surface"`)

* `wireframe` (value: `"wireframe"`)




