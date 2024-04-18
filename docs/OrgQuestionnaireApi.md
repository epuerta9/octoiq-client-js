# OpenApi.OrgQuestionnaireApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrgQuestionnaire**](OrgQuestionnaireApi.md#createOrgQuestionnaire) | **POST** /api/org/{id}/questionnaire | postOrgQuestionnaire
[**getOrgQuestionnaire**](OrgQuestionnaireApi.md#getOrgQuestionnaire) | **GET** /api/org/{id}/questionnaire | getOrgQuestionnaire

<a name="createOrgQuestionnaire"></a>
# **createOrgQuestionnaire**
> OrgQuestionnaire createOrgQuestionnaire(body, id, opts)

postOrgQuestionnaire

Create a specific org questionnaire given Org ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgQuestionnaireApi();
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

<a name="getOrgQuestionnaire"></a>
# **getOrgQuestionnaire**
> OrgQuestionnaire getOrgQuestionnaire(id, opts)

getOrgQuestionnaire

Get a specific org onboarding questionnaire

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.OrgQuestionnaireApi();
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

