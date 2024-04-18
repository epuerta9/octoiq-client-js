# OpenApi.AuthAPIApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authLogin**](AuthAPIApi.md#authLogin) | **POST** /api/auth/-/login | login
[**authLogout**](AuthAPIApi.md#authLogout) | **POST** /api/auth/-/logout | logout
[**authRegister**](AuthAPIApi.md#authRegister) | **POST** /api/auth/-/register | register
[**authWhoAmI**](AuthAPIApi.md#authWhoAmI) | **GET** /api/auth/whoami | whoAmI

<a name="authLogin"></a>
# **authLogin**
> AuthLoginResponse authLogin(body)

login

Login using user credentials

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.AuthAPIApi();
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

<a name="authLogout"></a>
# **authLogout**
> UnknownInterface authLogout()

logout

Logout

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.AuthAPIApi();
apiInstance.authLogout((error, data, response) => {
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

<a name="authRegister"></a>
# **authRegister**
> AuthLoginResponse authRegister(body)

register

Register a new Org account with OctoIQ

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.AuthAPIApi();
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

<a name="authWhoAmI"></a>
# **authWhoAmI**
> AuthWhoAmIResponse authWhoAmI(opts)

whoAmI

Check who is the current user

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.AuthAPIApi();
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

