# OpenApi.TagApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagApi.md#createTag) | **POST** /api/tag/ | postTag
[**getTag**](TagApi.md#getTag) | **GET** /api/tag/{id} | getTag
[**getTagsOrg**](TagApi.md#getTagsOrg) | **GET** /api/tag/org/{orgid} | getAllTag
[**updateTag**](TagApi.md#updateTag) | **PUT** /api/tag/{id} | putTag

<a name="createTag"></a>
# **createTag**
> Tag createTag(body, opts)

postTag

Create a new org tag

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TagApi();
let body = new OpenApi.TagCreate(); // TagCreate | Request body for controller.TagCreate
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.createTag(body, opts, (error, data, response) => {
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
 **body** | [**TagCreate**](TagCreate.md)| Request body for controller.TagCreate | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTag"></a>
# **getTag**
> Tag getTag(id, opts)

getTag

Get a tag given tag ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TagApi();
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getTag(id, opts, (error, data, response) => {
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

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTagsOrg"></a>
# **getTagsOrg**
> Tag getTagsOrg(orgid, opts)

getAllTag

Get all tags with OrgID. This API is more open to the rest of the org instead of using org API

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TagApi();
let orgid = "orgid_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.getTagsOrg(orgid, opts, (error, data, response) => {
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
 **orgid** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTag"></a>
# **updateTag**
> Tag updateTag(body, id, opts)

putTag

Update a tag given tag ID

### Example
```javascript
import {OpenApi} from 'open_api';

let apiInstance = new OpenApi.TagApi();
let body = new OpenApi.TagUpdate(); // TagUpdate | Request body for controller.TagUpdate
let id = "id_example"; // String | 
let opts = { 
  'jwt': "jwt_example" // String | authorization
};
apiInstance.updateTag(body, id, opts, (error, data, response) => {
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
 **body** | [**TagUpdate**](TagUpdate.md)| Request body for controller.TagUpdate | 
 **id** | **String**|  | 
 **jwt** | **String**| authorization | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

