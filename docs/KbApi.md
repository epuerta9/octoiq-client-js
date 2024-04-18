# OpenApi.KbApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKB**](KbApi.md#createKB) | **POST** /api/kb/ | postKb
[**getKB**](KbApi.md#getKB) | **GET** /api/kb/{id} | getKb
[**updateKB**](KbApi.md#updateKB) | **PUT** /api/kb/{id} | putKb

<a name="createKB"></a>
# **createKB**
> Kb createKB(body, opts)

postKb

Create a new knowledge base

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KbApi();
let body = new OpenApi.KbCreate(); // KbCreate | Request body for controller.KbCreate
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createKB(body, opts, (error, data, response) => {
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
 **body** | [**KbCreate**](KbCreate.md)| Request body for controller.KbCreate | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Kb**](Kb.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getKB"></a>
# **getKB**
> Kb getKB(id, opts)

getKb

Get a specific knowledge base given a knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KbApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getKB(id, opts, (error, data, response) => {
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

[**Kb**](Kb.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateKB"></a>
# **updateKB**
> Kb updateKB(body, id, opts)

putKb

Update a specific knowledge base given a knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KbApi();
let body = new OpenApi.KbUpdate(); // KbUpdate | Request body for controller.KbUpdate
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.updateKB(body, id, opts, (error, data, response) => {
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
 **body** | [**KbUpdate**](KbUpdate.md)| Request body for controller.KbUpdate | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Kb**](Kb.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

