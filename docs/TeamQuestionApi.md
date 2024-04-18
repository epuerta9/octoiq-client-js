# OpenApi.TeamQuestionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTeamKBQuestions**](TeamQuestionApi.md#listTeamKBQuestions) | **GET** /api/team/{id}/kb/{kbid}/questions | getAllTeamQuestions

<a name="listTeamKBQuestions"></a>
# **listTeamKBQuestions**
> TeamQuestion listTeamKBQuestions(id, kbid, opts)

getAllTeamQuestions

List knowlege base questions for a team given a team ID, knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TeamQuestionApi();
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

