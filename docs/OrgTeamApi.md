# OpenApi.OrgTeamApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrgTeams**](OrgTeamApi.md#getOrgTeams) | **GET** /api/org/{id}/teams | getAllOrgTeam

<a name="getOrgTeams"></a>
# **getOrgTeams**
> OrgTeam getOrgTeams(id, opts)

getAllOrgTeam

List all teams within a specific org given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgTeamApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgTeams(id, opts, (error, data, response) => {
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

[**OrgTeam**](OrgTeam.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

