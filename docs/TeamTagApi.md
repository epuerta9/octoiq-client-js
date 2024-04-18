# OpenApi.TeamTagApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTeamTags**](TeamTagApi.md#listTeamTags) | **GET** /api/team/{id}/tags | getAllTeamTag

<a name="listTeamTags"></a>
# **listTeamTags**
> TeamTag listTeamTags(id, opts)

getAllTeamTag

List tags for a team given a team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamTagApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listTeamTags(id, opts, (error, data, response) => {
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

[**TeamTag**](TeamTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

