# OpenApi.OrgAPIApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignOrgUser**](OrgAPIApi.md#assignOrgUser) | **PUT** /api/org/{id}/users/{userid}/teams/{teamid} | putOrgUser
[**createOrgQuestionnaire**](OrgAPIApi.md#createOrgQuestionnaire) | **POST** /api/org/{id}/questionnaire | postOrgQuestionnaire
[**createOrgUser**](OrgAPIApi.md#createOrgUser) | **POST** /api/org/{id}/users | postOrgUser
[**deleteOrgUser**](OrgAPIApi.md#deleteOrgUser) | **DELETE** /api/org/{id}/users/{userid} | deleteOrgUser
[**getOrg**](OrgAPIApi.md#getOrg) | **GET** /api/org/{id} | getOrg
[**getOrgPlan**](OrgAPIApi.md#getOrgPlan) | **GET** /api/org/{id}/plan | getOrgPlan
[**getOrgQuestionnaire**](OrgAPIApi.md#getOrgQuestionnaire) | **GET** /api/org/{id}/questionnaire | getOrgQuestionnaire
[**getOrgTags**](OrgAPIApi.md#getOrgTags) | **GET** /api/org/{id}/teams/tags | getAllOrgTeamTags
[**getOrgTeams**](OrgAPIApi.md#getOrgTeams) | **GET** /api/org/{id}/teams | getAllOrgTeam
[**getOrgUser**](OrgAPIApi.md#getOrgUser) | **GET** /api/org/{id}/users/{userid} | getOrgUser
[**getOrgUsers**](OrgAPIApi.md#getOrgUsers) | **GET** /api/org/{id}/users | getAllOrgUser
[**updateOrg**](OrgAPIApi.md#updateOrg) | **PUT** /api/org/{id} | putOrg
[**updateOrgQuestionnaire**](OrgAPIApi.md#updateOrgQuestionnaire) | **PUT** /api/org/{id}/questionnaire | putOrgQuestionnaire

<a name="assignOrgUser"></a>
# **assignOrgUser**
> UnknownInterface assignOrgUser(id, userid, teamid, opts)

putOrgUser

Assign a user to a specific team given the Org ID, the User ID, and the designated Team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let id = "id_example"; // String | 
let userid = "userid_example"; // String | 
let teamid = "teamid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.assignOrgUser(id, userid, teamid, opts, (error, data, response) => {
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
 **teamid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createOrgQuestionnaire"></a>
# **createOrgQuestionnaire**
> OrgQuestionnaire createOrgQuestionnaire(body, id, opts)

postOrgQuestionnaire

Create a specific org questionnaire given Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let body = new OpenApi.OrgCreateQuestionnaire(); // OrgCreateQuestionnaire | Request body for controller.OrgCreateQuestionnaire
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createOrgQuestionnaire(body, id, opts, (error, data, response) => {
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
 **body** | [**OrgCreateQuestionnaire**](OrgCreateQuestionnaire.md)| Request body for controller.OrgCreateQuestionnaire | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**OrgQuestionnaire**](OrgQuestionnaire.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createOrgUser"></a>
# **createOrgUser**
> OrgUser createOrgUser(body, id, opts)

postOrgUser

Create a user within the org given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
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

<a name="deleteOrgUser"></a>
# **deleteOrgUser**
> UnknownInterface deleteOrgUser(id, userid, opts)

deleteOrgUser

Delete a specific org user given the org ID and the user ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let id = "id_example"; // String | 
let userid = "userid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.deleteOrgUser(id, userid, opts, (error, data, response) => {
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

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrg"></a>
# **getOrg**
> Org getOrg(id, opts)

getOrg

Get a specific org

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrg(id, opts, (error, data, response) => {
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

[**Org**](Org.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrgPlan"></a>
# **getOrgPlan**
> OrgPlan getOrgPlan(id, opts)

getOrgPlan

Get the current plan given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgPlan(id, opts, (error, data, response) => {
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

[**OrgPlan**](OrgPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrgQuestionnaire"></a>
# **getOrgQuestionnaire**
> OrgQuestionnaire getOrgQuestionnaire(id, opts)

getOrgQuestionnaire

Get a specific org onboarding questionnaire

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgQuestionnaire(id, opts, (error, data, response) => {
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

[**OrgQuestionnaire**](OrgQuestionnaire.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrgTags"></a>
# **getOrgTags**
> OrgTag getOrgTags(id, opts)

getAllOrgTeamTags

List all team tags within a specific org given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getOrgTags(id, opts, (error, data, response) => {
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

[**OrgTag**](OrgTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOrgTeams"></a>
# **getOrgTeams**
> OrgTeam getOrgTeams(id, opts)

getAllOrgTeam

List all teams within a specific org given the Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
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

<a name="getOrgUser"></a>
# **getOrgUser**
> OrgUser getOrgUser(id, userid, opts)

getOrgUser

Get a specific org user given the Org ID and the User ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
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

let apiInstance = new OpenApi.OrgAPIApi();
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

<a name="updateOrg"></a>
# **updateOrg**
> Org updateOrg(body, id, opts)

putOrg

Update a specific org given ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let body = new OpenApi.OrgUpdate(); // OrgUpdate | Request body for controller.OrgUpdate
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.updateOrg(body, id, opts, (error, data, response) => {
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
 **body** | [**OrgUpdate**](OrgUpdate.md)| Request body for controller.OrgUpdate | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Org**](Org.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrgQuestionnaire"></a>
# **updateOrgQuestionnaire**
> UnknownInterface updateOrgQuestionnaire(body, id, opts)

putOrgQuestionnaire

Update a specific org questionnaire

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgAPIApi();
let body = new OpenApi.OrgUpdateQuestionnaire(); // OrgUpdateQuestionnaire | Request body for controller.OrgUpdateQuestionnaire
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.updateOrgQuestionnaire(body, id, opts, (error, data, response) => {
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
 **body** | [**OrgUpdateQuestionnaire**](OrgUpdateQuestionnaire.md)| Request body for controller.OrgUpdateQuestionnaire | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

