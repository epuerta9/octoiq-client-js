# OpenApi.KnowledgeBaseAPIApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKB**](KnowledgeBaseAPIApi.md#createKB) | **POST** /api/kb/ | postKb
[**createKBQuestion**](KnowledgeBaseAPIApi.md#createKBQuestion) | **POST** /api/kb/{id}/questions | postKbQuestion
[**createVersionKBQuestion**](KnowledgeBaseAPIApi.md#createVersionKBQuestion) | **POST** /api/kb/{id}/questions/{qid} | putKbQuestion
[**dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag**](KnowledgeBaseAPIApi.md#dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag) | **DELETE** /api/kb/{id}/questions/{qid}/tags/{tagid} | deleteKbQuestionTag
[**deleteKB**](KnowledgeBaseAPIApi.md#deleteKB) | **DELETE** /api/kb/{id} | deleteKb
[**deleteKBQuestion**](KnowledgeBaseAPIApi.md#deleteKBQuestion) | **DELETE** /api/kb/{id}/questions/{questionid} | deleteKbQuestion
[**gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks**](KnowledgeBaseAPIApi.md#gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks) | **GET** /api/kb/{id}/questions/{qid}/share | getAllKbQuestionMagicLinks
[**gETApikbidquestionsqidversionsGetKbQuestionVersions**](KnowledgeBaseAPIApi.md#gETApikbidquestionsqidversionsGetKbQuestionVersions) | **GET** /api/kb/{id}/questions/{qid}/versions | getKbQuestionVersions
[**gETApikbidquestionsqidversionslatestGetKbQuestionLatest**](KnowledgeBaseAPIApi.md#gETApikbidquestionsqidversionslatestGetKbQuestionLatest) | **GET** /api/kb/{id}/questions/{qid}/versions/latest | getKbQuestionLatest
[**getAllKBQuestion**](KnowledgeBaseAPIApi.md#getAllKBQuestion) | **GET** /api/kb/{id}/questions | getAllQuestions
[**getKB**](KnowledgeBaseAPIApi.md#getKB) | **GET** /api/kb/{id} | getKb
[**pOSTApikbidquestionsqidversionsPostKbQuestionVersion**](KnowledgeBaseAPIApi.md#pOSTApikbidquestionsqidversionsPostKbQuestionVersion) | **POST** /api/kb/{id}/questions/{qid}/versions | postKbQuestionVersion
[**pUTApikbidquestionsqidtagstagidAssignKbQuestionTag**](KnowledgeBaseAPIApi.md#pUTApikbidquestionsqidtagstagidAssignKbQuestionTag) | **PUT** /api/kb/{id}/questions/{qid}/tags/{tagid} | assignKbQuestionTag
[**updateKB**](KnowledgeBaseAPIApi.md#updateKB) | **PUT** /api/kb/{id} | putKb

<a name="createKB"></a>
# **createKB**
> Kb createKB(body, opts)

postKb

Create a new knowledge base

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let body = new OpenApi.KbCreate(); // KbCreate | Request body for controller.KbCreate
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createKB(body, opts, (error, data, response) => {
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
 **body** | [**KbCreate**](KbCreate.md)| Request body for controller.KbCreate | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Kb**](Kb.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createKBQuestion"></a>
# **createKBQuestion**
> UnknownInterface createKBQuestion(id, opts)

postKbQuestion

Create a new question within the knowledge base given the knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createKBQuestion(id, opts, (error, data, response) => {
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

<a name="createVersionKBQuestion"></a>
# **createVersionKBQuestion**
> UnknownInterface createVersionKBQuestion(id, qid, opts)

putKbQuestion

Create a new question version for a particular question within the knowledge base given the knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let qid = "qid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createVersionKBQuestion(id, qid, opts, (error, data, response) => {
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
 **qid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag"></a>
# **dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag**
> UnknownInterface dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag(id, qid, tagid, opts)

deleteKbQuestionTag

controller: github.com/epuerta9/octoiq/controllers.KbRessources.deleteKbQuestionTag

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let qid = "qid_example"; // String | 
let tagid = "tagid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.dELETEApikbidquestionsqidtagstagidDeleteKbQuestionTag(id, qid, tagid, opts, (error, data, response) => {
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
 **qid** | **String**|  | 
 **tagid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteKB"></a>
# **deleteKB**
> UnknownInterface deleteKB(id, opts)

deleteKb

Delete a knowledge base

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.deleteKB(id, opts, (error, data, response) => {
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

<a name="deleteKBQuestion"></a>
# **deleteKBQuestion**
> UnknownInterface deleteKBQuestion(id, questionid, opts)

deleteKbQuestion

Delete a question from the knowledge base given the knowledge base ID and the question ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let questionid = "questionid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.deleteKBQuestion(id, questionid, opts, (error, data, response) => {
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
 **questionid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks"></a>
# **gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks**
> UnknownInterface gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks(id, qid, opts)

getAllKbQuestionMagicLinks

controller: github.com/epuerta9/octoiq/controllers.KbRessources.getAllKbQuestionMagicLinks

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let qid = "qid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.gETApikbidquestionsqidshareGetAllKbQuestionMagicLinks(id, qid, opts, (error, data, response) => {
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
 **qid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gETApikbidquestionsqidversionsGetKbQuestionVersions"></a>
# **gETApikbidquestionsqidversionsGetKbQuestionVersions**
> UnknownInterface gETApikbidquestionsqidversionsGetKbQuestionVersions(id, qid, opts)

getKbQuestionVersions

controller: github.com/epuerta9/octoiq/controllers.KbRessources.getKbQuestionVersions

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let qid = "qid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.gETApikbidquestionsqidversionsGetKbQuestionVersions(id, qid, opts, (error, data, response) => {
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
 **qid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="gETApikbidquestionsqidversionslatestGetKbQuestionLatest"></a>
# **gETApikbidquestionsqidversionslatestGetKbQuestionLatest**
> UnknownInterface gETApikbidquestionsqidversionslatestGetKbQuestionLatest(id, qid, opts)

getKbQuestionLatest

controller: github.com/epuerta9/octoiq/controllers.KbRessources.getKbQuestionLatest

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let qid = "qid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.gETApikbidquestionsqidversionslatestGetKbQuestionLatest(id, qid, opts, (error, data, response) => {
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
 **qid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllKBQuestion"></a>
# **getAllKBQuestion**
> UnknownInterface getAllKBQuestion(id, opts)

getAllQuestions

List all questions in the knowledge base given the knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getAllKBQuestion(id, opts, (error, data, response) => {
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

<a name="getKB"></a>
# **getKB**
> Kb getKB(id, opts)

getKb

Get a specific knowledge base given a knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getKB(id, opts, (error, data, response) => {
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

[**Kb**](Kb.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pOSTApikbidquestionsqidversionsPostKbQuestionVersion"></a>
# **pOSTApikbidquestionsqidversionsPostKbQuestionVersion**
> UnknownInterface pOSTApikbidquestionsqidversionsPostKbQuestionVersion(id, qid, opts)

postKbQuestionVersion

controller: github.com/epuerta9/octoiq/controllers.KbRessources.postKbQuestionVersion

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let qid = "qid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.pOSTApikbidquestionsqidversionsPostKbQuestionVersion(id, qid, opts, (error, data, response) => {
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
 **qid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pUTApikbidquestionsqidtagstagidAssignKbQuestionTag"></a>
# **pUTApikbidquestionsqidtagstagidAssignKbQuestionTag**
> UnknownInterface pUTApikbidquestionsqidtagstagidAssignKbQuestionTag(id, qid, tagid, opts)

assignKbQuestionTag

controller: github.com/epuerta9/octoiq/controllers.KbRessources.assignKbQuestionTag

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let id = "id_example"; // String | 
let qid = "qid_example"; // String | 
let tagid = "tagid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.pUTApikbidquestionsqidtagstagidAssignKbQuestionTag(id, qid, tagid, opts, (error, data, response) => {
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
 **qid** | **String**|  | 
 **tagid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**UnknownInterface**](UnknownInterface.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateKB"></a>
# **updateKB**
> Kb updateKB(body, id, opts)

putKb

Update a specific knowledge base given a knowledge base ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.KnowledgeBaseAPIApi();
let body = new OpenApi.KbUpdate(); // KbUpdate | Request body for controller.KbUpdate
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.updateKB(body, id, opts, (error, data, response) => {
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
 **body** | [**KbUpdate**](KbUpdate.md)| Request body for controller.KbUpdate | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Kb**](Kb.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

