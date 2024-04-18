# OpenApi.AuthLoginResponseApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authLogin**](AuthLoginResponseApi.md#authLogin) | **POST** /api/auth/-/login | login
[**authRegister**](AuthLoginResponseApi.md#authRegister) | **POST** /api/auth/-/register | register

<a name="authLogin"></a>
# **authLogin**
> AuthLoginResponse authLogin(body)

login

Login using user credentials

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.AuthLoginResponseApi();
let body = new OpenApi.AuthLogin(); // AuthLogin | Request body for controller.AuthLogin

apiInstance.authLogin(body, (error, data, response) => {
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
 **body** | [**AuthLogin**](AuthLogin.md)| Request body for controller.AuthLogin | 

### Return type

[**AuthLoginResponse**](AuthLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authRegister"></a>
# **authRegister**
> AuthLoginResponse authRegister(body)

register

Register a new Org account with OctoIQ

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.AuthLoginResponseApi();
let body = new OpenApi.AuthLogin(); // AuthLogin | Request body for controller.AuthLogin

apiInstance.authRegister(body, (error, data, response) => {
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
 **body** | [**AuthLogin**](AuthLogin.md)| Request body for controller.AuthLogin | 

### Return type

[**AuthLoginResponse**](AuthLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

