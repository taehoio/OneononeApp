import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Category } from '../models/Category';
import { GetApiStatus200Response } from '../models/GetApiStatus200Response';
import { GetCategories200Response } from '../models/GetCategories200Response';
import { GetCategoryQuestions200Response } from '../models/GetCategoryQuestions200Response';
import { GetCategoryRandomQuestion200Response } from '../models/GetCategoryRandomQuestion200Response';
import { GetCategoryRandomQuestion400Response } from '../models/GetCategoryRandomQuestion400Response';
import { Question } from '../models/Question';

import { ObservableCategoriesApi } from "./ObservableAPI";
import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";

export interface CategoriesApiGetCategoriesRequest {
}

export interface CategoriesApiGetCategoryQuestionsRequest {
    /**
     * ID of category to return
     * @type number
     * @memberof CategoriesApigetCategoryQuestions
     */
    categoryId: number
}

export interface CategoriesApiGetCategoryRandomQuestionRequest {
    /**
     * ID of category to return
     * @type number
     * @memberof CategoriesApigetCategoryRandomQuestion
     */
    categoryId: number
}

export class ObjectCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(configuration: Configuration, requestFactory?: CategoriesApiRequestFactory, responseProcessor?: CategoriesApiResponseProcessor) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all categories.
     * Get all categories
     * @param param the request object
     */
    public getCategories(param: CategoriesApiGetCategoriesRequest = {}, options?: Configuration): Promise<GetCategories200Response> {
        return this.api.getCategories( options).toPromise();
    }

    /**
     * Get all questions for a category.
     * Get all questions for a category
     * @param param the request object
     */
    public getCategoryQuestions(param: CategoriesApiGetCategoryQuestionsRequest, options?: Configuration): Promise<GetCategoryQuestions200Response> {
        return this.api.getCategoryQuestions(param.categoryId,  options).toPromise();
    }

    /**
     * Get a random question for a category.
     * Get a random question for a category
     * @param param the request object
     */
    public getCategoryRandomQuestion(param: CategoriesApiGetCategoryRandomQuestionRequest, options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        return this.api.getCategoryRandomQuestion(param.categoryId,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetApiStatusRequest {
}

export interface DefaultApiHeadApiStatusRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get API status.
     * Get API status
     * @param param the request object
     */
    public getApiStatus(param: DefaultApiGetApiStatusRequest = {}, options?: Configuration): Promise<GetApiStatus200Response> {
        return this.api.getApiStatus( options).toPromise();
    }

    /**
     * Get API status.
     * Get API status
     * @param param the request object
     */
    public headApiStatus(param: DefaultApiHeadApiStatusRequest = {}, options?: Configuration): Promise<void> {
        return this.api.headApiStatus( options).toPromise();
    }

}

import { ObservableQuestionsApi } from "./ObservableAPI";
import { QuestionsApiRequestFactory, QuestionsApiResponseProcessor} from "../apis/QuestionsApi";

export interface QuestionsApiGetCategoryRandomQuestionRequest {
    /**
     * ID of category to return
     * @type number
     * @memberof QuestionsApigetCategoryRandomQuestion
     */
    categoryId: number
}

export interface QuestionsApiGetQuestionRequest {
    /**
     * ID of question to return
     * @type number
     * @memberof QuestionsApigetQuestion
     */
    questionId: number
}

export interface QuestionsApiGetRandomQuestionRequest {
}

export class ObjectQuestionsApi {
    private api: ObservableQuestionsApi

    public constructor(configuration: Configuration, requestFactory?: QuestionsApiRequestFactory, responseProcessor?: QuestionsApiResponseProcessor) {
        this.api = new ObservableQuestionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a random question for a category.
     * Get a random question for a category
     * @param param the request object
     */
    public getCategoryRandomQuestion(param: QuestionsApiGetCategoryRandomQuestionRequest, options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        return this.api.getCategoryRandomQuestion(param.categoryId,  options).toPromise();
    }

    /**
     * Get a question.
     * Get a question
     * @param param the request object
     */
    public getQuestion(param: QuestionsApiGetQuestionRequest, options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        return this.api.getQuestion(param.questionId,  options).toPromise();
    }

    /**
     * Get a random question.
     * Get a random question
     * @param param the request object
     */
    public getRandomQuestion(param: QuestionsApiGetRandomQuestionRequest = {}, options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        return this.api.getRandomQuestion( options).toPromise();
    }

}
