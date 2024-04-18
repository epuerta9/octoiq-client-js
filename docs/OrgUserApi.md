# OpenApi.OrgUserApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrgUser**](OrgUserApi.md#createOrgUser) | **POST** /api/org/{id}/users | postOrgUser
[**getOrgUser**](OrgUserApi.md#getOrgUser) | **GET** /api/org/{id}/users/{userid} | getOrgUser
[**getOrgUsers**](OrgUserApi.md#getOrgUsers) | **GET** /api/org/{id}/users | getAllOrgUser

<a name="createOrgUser"></a>
# **createOrgUser**
> OrgUser createOrgUser(body, id, opts)

postOrgUser

Create a user within the org given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgUserApi();
let body = new OpenApi.OrgUserCreate(); // OrgUserCreate | Request body for controller.OrgUserCreate
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createOrgUser(body, id, opts, (error, data, response) => {
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
 **body** | [**OrgUserCreate**](OrgUserCreate.md)| Request body for controller.OrgUserCreate | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**OrgUser**](OrgUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrgUser"></a>
# **getOrgUser**
> OrgUser getOrgUser(id, userid, opts)

getOrgUser

Get a specific org user given the Org ID and the User ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgUserApi();
let id = "id_example"; // String | 
let userid = "userid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgUser(id, userid, opts, (error, data, response) => {
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
 **userid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**OrgUser**](OrgUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrgUsers"></a>
# **getOrgUsers**
> OrgUser getOrgUsers(id, opts)

getAllOrgUser

List all users in the org given the org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgUserApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgUsers(id, opts, (error, data, response) => {
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

[**OrgUser**](OrgUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

