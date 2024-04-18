# OpenApi.TeamAPIApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignTeamQuestion**](TeamAPIApi.md#assignTeamQuestion) | **PUT** /api/team/{id}/kb/{kbid}/questions/{qid} | putTeamQuestions
[**assignTeamTag**](TeamAPIApi.md#assignTeamTag) | **PUT** /api/team/{id}/tags/{tagid} | putTeamTag
[**createTeam**](TeamAPIApi.md#createTeam) | **POST** /api/team/ | postTeam
[**deleteTeam**](TeamAPIApi.md#deleteTeam) | **DELETE** /api/team/{id} | deleteTeam
[**deleteTeamTag**](TeamAPIApi.md#deleteTeamTag) | **DELETE** /api/team/{id}/tags/{tagid} | deleteTeamTag
[**getTeam**](TeamAPIApi.md#getTeam) | **GET** /api/team/{id} | getTeam
[**getTeamKB**](TeamAPIApi.md#getTeamKB) | **GET** /api/team/{id}/kb/{kbid} | getTeamKB
[**listTeamKB**](TeamAPIApi.md#listTeamKB) | **GET** /api/team/{id}/kb | getAllTeamKB
[**listTeamKBQuestions**](TeamAPIApi.md#listTeamKBQuestions) | **GET** /api/team/{id}/kb/{kbid}/questions | getAllTeamQuestions
[**listTeamTags**](TeamAPIApi.md#listTeamTags) | **GET** /api/team/{id}/tags | getAllTeamTag
[**listTeamUsers**](TeamAPIApi.md#listTeamUsers) | **GET** /api/team/{id}/users | getAllTeamUsers
[**updateTeam**](TeamAPIApi.md#updateTeam) | **PUT** /api/team/{id} | putTeam

<a name="assignTeamQuestion"></a>
# **assignTeamQuestion**
> UnknownInterface assignTeamQuestion(id, kbid, qid, opts)

putTeamQuestions

Assign a specific question to a team given a team ID, knowledge base ID, and question ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let kbid = "kbid_example"; // String | 
let qid = "qid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.assignTeamQuestion(id, kbid, qid, opts, (error, data, response) => {
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
 **kbid** | **String**|  | 
 **qid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="assignTeamTag"></a>
# **assignTeamTag**
> UnknownInterface assignTeamTag(id, tagid, opts)

putTeamTag

Assign a tag for a team given a team ID and a tag ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let tagid = "tagid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.assignTeamTag(id, tagid, opts, (error, data, response) => {
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
 **tagid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTeam"></a>
# **createTeam**
> Team createTeam(body)

postTeam

Create a team

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
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

<a name="deleteTeam"></a>
# **deleteTeam**
> UnknownInterface deleteTeam(id, opts)

deleteTeam

Delete a team given a team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.deleteTeam(id, opts, (error, data, response) => {
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

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTeamTag"></a>
# **deleteTeamTag**
> UnknownInterface deleteTeamTag(id, tagid, opts)

deleteTeamTag

Delete a tag for a team given a team ID and a tag ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let tagid = "tagid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.deleteTeamTag(id, tagid, opts, (error, data, response) => {
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
 **tagid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeam"></a>
# **getTeam**
> Team getTeam(id, opts)

getTeam

Get a team given team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
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

<a name="getTeamKB"></a>
# **getTeamKB**
> TeamKB getTeamKB(id, kbid, opts)

getTeamKB

Get a team knowledge base given a team ID and a knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let kbid = "kbid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getTeamKB(id, kbid, opts, (error, data, response) => {
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
 **kbid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**TeamKB**](TeamKB.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTeamKB"></a>
# **listTeamKB**
> TeamKB listTeamKB(id, opts)

getAllTeamKB

Get a team Knowledge Base given a team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listTeamKB(id, opts, (error, data, response) => {
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

[**TeamKB**](TeamKB.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTeamKBQuestions"></a>
# **listTeamKBQuestions**
> TeamQuestion listTeamKBQuestions(id, kbid, opts)

getAllTeamQuestions

List knowlege base questions for a team given a team ID, knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let kbid = "kbid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listTeamKBQuestions(id, kbid, opts, (error, data, response) => {
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
 **kbid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**TeamQuestion**](TeamQuestion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTeamTags"></a>
# **listTeamTags**
> TeamTag listTeamTags(id, opts)

getAllTeamTag

List tags for a team given a team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listTeamTags(id, opts, (error, data, response) => {
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

[**TeamTag**](TeamTag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTeamUsers"></a>
# **listTeamUsers**
> TeamUser listTeamUsers(id, opts)

getAllTeamUsers

List users within a team given a team ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.listTeamUsers(id, opts, (error, data, response) => {
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

[**TeamUser**](TeamUser.md)

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

let apiInstance = new OpenApi.TeamAPIApi();
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

