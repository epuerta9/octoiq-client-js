# OpenApi.UIApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appGet**](UIApi.md#appGet) | **GET** /app/ | 

<a name="appGet"></a>
# **appGet**
> UnknownInterface appGet()



### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.UIApi();
apiInstance.appGet((error, data, response) => {
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

