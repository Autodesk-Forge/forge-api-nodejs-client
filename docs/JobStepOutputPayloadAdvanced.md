# ForgeSdk.JobStepOutputPayloadAdvanced

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationProtocol** | **String** | A STEP file can be generated with the following Application Protocols: &#x60;203&#x60; for configuration controlled design, &#x60;214&#x60; for core data for automotive mechanical design processes, &#x60;242&#x60; for managed model based 3D engineering. By default, &#x60;214&#x60; will be exported.  | [optional] [default to &#39;214&#39;]
**tolerance** | **Number** | Possible values are between &#x60;0&#x60; and &#x60;1&#x60;. By default it is set at 0.001. | [optional] [default to 0.001]


<a name="ApplicationProtocolEnum"></a>
## Enum: ApplicationProtocolEnum


* `203` (value: `"203"`)

* `214` (value: `"214"`)

* `242` (value: `"242"`)




