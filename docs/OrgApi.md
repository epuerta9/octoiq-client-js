# OpenApi.OrgApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrg**](OrgApi.md#getOrg) | **GET** /api/org/{id} | getOrg
[**updateOrg**](OrgApi.md#updateOrg) | **PUT** /api/org/{id} | putOrg

<a name="getOrg"></a>
# **getOrg**
> Org getOrg(id, opts)

getOrg

Get a specific org

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrg(id, opts, (error, data, response) => {
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

[**Org**](Org.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOrg"></a>
# **updateOrg**
> Org updateOrg(body, id, opts)

putOrg

Update a specific org given ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgApi();
let body = new OpenApi.OrgUpdate(); // OrgUpdate | Request body for controller.OrgUpdate
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.updateOrg(body, id, opts, (error, data, response) => {
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
 **body** | [**OrgUpdate**](OrgUpdate.md)| Request body for controller.OrgUpdate | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Org**](Org.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

