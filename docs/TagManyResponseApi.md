# OpenApi.TagManyResponseApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMultipleTags**](TagManyResponseApi.md#createMultipleTags) | **POST** /api/tag/multiple | postMultipleTag

<a name="createMultipleTags"></a>
# **createMultipleTags**
> TagManyResponse createMultipleTags(body, opts)

postMultipleTag

Create multiple org tags

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TagManyResponseApi();
let body = new OpenApi.TagManyCreate(); // TagManyCreate | Request body for controller.TagManyCreate
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createMultipleTags(body, opts, (error, data, response) => {
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
 **body** | [**TagManyCreate**](TagManyCreate.md)| Request body for controller.TagManyCreate | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**TagManyResponse**](TagManyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

