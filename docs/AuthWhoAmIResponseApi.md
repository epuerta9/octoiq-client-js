# OpenApi.AuthWhoAmIResponseApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authWhoAmI**](AuthWhoAmIResponseApi.md#authWhoAmI) | **GET** /api/auth/whoami | whoAmI

<a name="authWhoAmI"></a>
# **authWhoAmI**
> AuthWhoAmIResponse authWhoAmI(opts)

whoAmI

Check who is the current user

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.AuthWhoAmIResponseApi();
let opts = { 
  'jwt': "jwt_example" // String | Authorization
};
apiInstance.authWhoAmI(opts, (error, data, response) => {
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
 **jwt** | **String**| Authorization | [optional] 

### Return type

[**AuthWhoAmIResponse**](AuthWhoAmIResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

