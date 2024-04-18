# OpenApi.TeamUserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTeamUsers**](TeamUserApi.md#listTeamUsers) | **GET** /api/team/{id}/users | getAllTeamUsers

<a name="listTeamUsers"></a>
# **listTeamUsers**
> TeamUser listTeamUsers(id, opts)

getAllTeamUsers

List users within a team given a team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamUserApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listTeamUsers(id, opts, (error, data, response) => {
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

[**TeamUser**](TeamUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

