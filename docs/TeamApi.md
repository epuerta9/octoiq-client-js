# OpenApi.TeamApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeam**](TeamApi.md#createTeam) | **POST** /api/team/ | postTeam
[**getTeam**](TeamApi.md#getTeam) | **GET** /api/team/{id} | getTeam
[**updateTeam**](TeamApi.md#updateTeam) | **PUT** /api/team/{id} | putTeam

<a name="createTeam"></a>
# **createTeam**
> Team createTeam(body)

postTeam

Create a team

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamApi();
let body = new OpenApi.TeamCreate(); // TeamCreate | Request body for controller.TeamCreate

apiInstance.createTeam(body, (error, data, response) => {
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
 **body** | [**TeamCreate**](TeamCreate.md)| Request body for controller.TeamCreate | 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTeam"></a>
# **getTeam**
> Team getTeam(id, opts)

getTeam

Get a team given team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getTeam(id, opts, (error, data, response) => {
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

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTeam"></a>
# **updateTeam**
> Team updateTeam(body, id, opts)

putTeam

Update a team given team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamApi();
let body = new OpenApi.TeamUpdate(); // TeamUpdate | Request body for controller.TeamUpdate
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.updateTeam(body, id, opts, (error, data, response) => {
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
 **body** | [**TeamUpdate**](TeamUpdate.md)| Request body for controller.TeamUpdate | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

