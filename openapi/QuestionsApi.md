# .QuestionsApi

All URIs are relative to *https://1on1.taeho.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryRandomQuestion**](QuestionsApi.md#getCategoryRandomQuestion) | **GET** /categories/{category_id}/questions/random | Get a random question for a category
[**getQuestion**](QuestionsApi.md#getQuestion) | **GET** /questions/{question_id} | Get a question
[**getRandomQuestion**](QuestionsApi.md#getRandomQuestion) | **GET** /questions/random | Get a random question


# **getCategoryRandomQuestion**
> GetCategoryRandomQuestion200Response getCategoryRandomQuestion()

Get a random question for a category.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuestionsApi(configuration);

let body:.QuestionsApiGetCategoryRandomQuestionRequest = {
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
**400** | Invalid category ID supplied |  -  |
**404** | Question not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getQuestion**
> GetCategoryRandomQuestion200Response getQuestion()

Get a question.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuestionsApi(configuration);

let body:.QuestionsApiGetQuestionRequest = {
  // number | ID of question to return
  questionId: 1,
};

apiInstance.getQuestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | ID of question to return | defaults to undefined


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
**400** | Invalid question ID supplied |  -  |
**404** | Question not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRandomQuestion**
> GetCategoryRandomQuestion200Response getRandomQuestion()

Get a random question.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QuestionsApi(configuration);

let body:any = {};

apiInstance.getRandomQuestion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**404** | Question not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


