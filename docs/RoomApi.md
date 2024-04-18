# OpenApi.RoomApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserMessage**](RoomApi.md#deleteUserMessage) | **DELETE** /api/user/{id}/messages/{messageid} | getAllUserRooms
[**listUserRooms**](RoomApi.md#listUserRooms) | **GET** /api/user/{id}/rooms | getAllUserRooms
[**messageUser**](RoomApi.md#messageUser) | **POST** /api/user/{id}/messages | getAllUserRooms

<a name="deleteUserMessage"></a>
# **deleteUserMessage**
> Room deleteUserMessage(id, messageid, opts)

getAllUserRooms

Delete a message given a user ID and message ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.RoomApi();
let id = "id_example"; // String | 
let messageid = "messageid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.deleteUserMessage(id, messageid, opts, (error, data, response) => {
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
 **messageid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listUserRooms"></a>
# **listUserRooms**
> Room listUserRooms(id, opts)

getAllUserRooms

List all room a user is in given a user ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.RoomApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listUserRooms(id, opts, (error, data, response) => {
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

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="messageUser"></a>
# **messageUser**
> Room messageUser(id, opts)

getAllUserRooms

Send a user a message given a user ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.RoomApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.messageUser(id, opts, (error, data, response) => {
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

[**Room**](Room.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

