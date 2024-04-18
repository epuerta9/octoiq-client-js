# OpenApi.GPTAPIApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gPTRequest**](GPTAPIApi.md#gPTRequest) | **POST** /api/gpt/ | postGpt

<a name="gPTRequest"></a>
# **gPTRequest**
> Gpt gPTRequest(body, opts)

postGpt

creates questions given a list of requirements from chatgpt and assigns them to the appropriate team

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.GPTAPIApi();
let body = new OpenApi.GptCreate(); // GptCreate | Request body for controller.GptCreate
let opts = { 
  'authorization': "authorization_example" // String | authorization
};
apiInstance.gPTRequest(body, opts, (error, data, response) => {
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
 **body** | [**GptCreate**](GptCreate.md)| Request body for controller.GptCreate | 
 **authorization** | **String**| authorization | [optional] 

### Return type

[**Gpt**](Gpt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

