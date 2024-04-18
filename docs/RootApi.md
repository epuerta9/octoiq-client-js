# OpenApi.RootApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gET1**](RootApi.md#gET1) | **GET** / | 1

<a name="gET1"></a>
# **gET1**
> UnknownInterface gET1()

1

controller: main.main.Run.func1.1

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.RootApi();
apiInstance.gET1((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

