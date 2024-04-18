# OpenApi.UserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUser**](UserApi.md#getUser) | **GET** /api/user/{id} | getUser

<a name="getUser"></a>
# **getUser**
> User getUser(id, opts)

getUser

Get a user given a user ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.UserApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getUser(id, opts, (error, data, response) => {
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

