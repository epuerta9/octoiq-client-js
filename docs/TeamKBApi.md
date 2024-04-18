# OpenApi.TeamKBApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeamKB**](TeamKBApi.md#getTeamKB) | **GET** /api/team/{id}/kb/{kbid} | getTeamKB
[**listTeamKB**](TeamKBApi.md#listTeamKB) | **GET** /api/team/{id}/kb | getAllTeamKB

<a name="getTeamKB"></a>
# **getTeamKB**
> TeamKB getTeamKB(id, kbid, opts)

getTeamKB

Get a team knowledge base given a team ID and a knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamKBApi();
let id = "id_example"; // String | 
let kbid = "kbid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getTeamKB(id, kbid, opts, (error, data, response) => {
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
 **kbid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**TeamKB**](TeamKB.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTeamKB"></a>
# **listTeamKB**
> TeamKB listTeamKB(id, opts)

getAllTeamKB

Get a team Knowledge Base given a team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamKBApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listTeamKB(id, opts, (error, data, response) => {
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

[**TeamKB**](TeamKB.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

