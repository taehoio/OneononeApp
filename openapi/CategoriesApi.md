# .CategoriesApi

All URIs are relative to *https://api.taeho.io/oneonone/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategories**](CategoriesApi.md#getCategories) | **GET** /categories | Get all categories
[**getCategoryQuestions**](CategoriesApi.md#getCategoryQuestions) | **GET** /categories/{category_id}/questions | Get all questions for a category
[**getCategoryRandomQuestion**](CategoriesApi.md#getCategoryRandomQuestion) | **GET** /categories/{category_id}/questions/random | Get a random question for a category


# **getCategories**
> GetCategories200Response getCategories()

Get all categories.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:any = {};

apiInstance.getCategories(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetCategories200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryQuestions**
> GetCategoryQuestions200Response getCategoryQuestions()

Get all questions for a category.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiGetCategoryQuestionsRequest = {
  // number | ID of category to return
  categoryId: 1,
};

apiInstance.getCategoryQuestions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**number**] | ID of category to return | defaults to undefined


### Return type

**GetCategoryQuestions200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategoryRandomQuestion**
> GetCategoryRandomQuestion200Response getCategoryRandomQuestion()

Get a random question for a category.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiGetCategoryRandomQuestionRequest = {
  // number | ID of category to return
  categoryId: 1,
};

apiInstance.getCategoryRandomQuestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | [**number**] | ID of category to return | defaults to undefined


### Return type

**GetCategoryRandomQuestion200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


