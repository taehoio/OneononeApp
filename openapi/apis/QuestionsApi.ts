// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetCategoryRandomQuestion200Response } from '../models/GetCategoryRandomQuestion200Response';
import { GetCategoryRandomQuestion400Response } from '../models/GetCategoryRandomQuestion400Response';

/**
 * no description
 */
export class QuestionsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a random question for a category.
     * Get a random question for a category
     * @param categoryId ID of category to return
     */
    public async getCategoryRandomQuestion(categoryId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'categoryId' is not null or undefined
        if (categoryId === null || categoryId === undefined) {
            throw new RequiredError("QuestionsApi", "getCategoryRandomQuestion", "categoryId");
        }


        // Path Params
        const localVarPath = '/categories/{category_id}/questions/random'
            .replace('{' + 'category_id' + '}', encodeURIComponent(String(categoryId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a question.
     * Get a question
     * @param questionId ID of question to return
     */
    public async getQuestion(questionId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("QuestionsApi", "getQuestion", "questionId");
        }


        // Path Params
        const localVarPath = '/questions/{question_id}'
            .replace('{' + 'question_id' + '}', encodeURIComponent(String(questionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a random question.
     * Get a random question
     */
    public async getRandomQuestion(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/questions/random';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class QuestionsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCategoryRandomQuestion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCategoryRandomQuestion(response: ResponseContext): Promise<GetCategoryRandomQuestion200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion200Response", ""
            ) as GetCategoryRandomQuestion200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion400Response", ""
            ) as GetCategoryRandomQuestion400Response;
            throw new ApiException<GetCategoryRandomQuestion400Response>(response.httpStatusCode, "Invalid category ID supplied", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion400Response", ""
            ) as GetCategoryRandomQuestion400Response;
            throw new ApiException<GetCategoryRandomQuestion400Response>(response.httpStatusCode, "Question not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCategoryRandomQuestion200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion200Response", ""
            ) as GetCategoryRandomQuestion200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getQuestion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getQuestion(response: ResponseContext): Promise<GetCategoryRandomQuestion200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion200Response", ""
            ) as GetCategoryRandomQuestion200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion400Response", ""
            ) as GetCategoryRandomQuestion400Response;
            throw new ApiException<GetCategoryRandomQuestion400Response>(response.httpStatusCode, "Invalid question ID supplied", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion400Response", ""
            ) as GetCategoryRandomQuestion400Response;
            throw new ApiException<GetCategoryRandomQuestion400Response>(response.httpStatusCode, "Question not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCategoryRandomQuestion200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion200Response", ""
            ) as GetCategoryRandomQuestion200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRandomQuestion
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRandomQuestion(response: ResponseContext): Promise<GetCategoryRandomQuestion200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion200Response", ""
            ) as GetCategoryRandomQuestion200Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: GetCategoryRandomQuestion400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion400Response", ""
            ) as GetCategoryRandomQuestion400Response;
            throw new ApiException<GetCategoryRandomQuestion400Response>(response.httpStatusCode, "Question not found", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCategoryRandomQuestion200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCategoryRandomQuestion200Response", ""
            ) as GetCategoryRandomQuestion200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
