# OpenApi.OrgTagApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrgTags**](OrgTagApi.md#getOrgTags) | **GET** /api/org/{id}/teams/tags | getAllOrgTeamTags

<a name="getOrgTags"></a>
# **getOrgTags**
> OrgTag getOrgTags(id, opts)

getAllOrgTeamTags

List all team tags within a specific org given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgTagApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgTags(id, opts, (error, data, response) => {
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

[**OrgTag**](OrgTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

