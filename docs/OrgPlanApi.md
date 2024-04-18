# OpenApi.OrgPlanApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrgPlan**](OrgPlanApi.md#getOrgPlan) | **GET** /api/org/{id}/plan | getOrgPlan

<a name="getOrgPlan"></a>
# **getOrgPlan**
> OrgPlan getOrgPlan(id, opts)

getOrgPlan

Get the current plan given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgPlanApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgPlan(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**OrgPlan**](OrgPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

