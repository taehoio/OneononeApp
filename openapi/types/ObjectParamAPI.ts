import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Category } from '../models/Category';
import { GetCategories200Response } from '../models/GetCategories200Response';
import { GetCategoryQuestions200Response } from '../models/GetCategoryQuestions200Response';
import { GetCategoryRandomQuestion200Response } from '../models/GetCategoryRandomQuestion200Response';
import { Question } from '../models/Question';

import { ObservableCategoriesApi } from "./ObservableAPI";
import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";

export interface CategoriesApiGetCategoriesRequest {
}

export interface CategoriesApiGetCategoryQuestionsRequest {
    /**
     * ID of category to return
     * @type any
     * @memberof CategoriesApigetCategoryQuestions
     */
    categoryId: any
}

export interface CategoriesApiGetCategoryRandomQuestionRequest {
    /**
     * ID of category to return
     * @type any
     * @memberof CategoriesApigetCategoryRandomQuestion
     */
    categoryId: any
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

import { ObservableHealthApi } from "./ObservableAPI";
import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";

export interface HealthApiHealthRequest {
}

export class ObjectHealthApi {
    private api: ObservableHealthApi

    public constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Health check endpoint. Returns 200 if the service is up and running.
     * Health check
     * @param param the request object
     */
    public health(param: HealthApiHealthRequest = {}, options?: Configuration): Promise<any> {
        return this.api.health( options).toPromise();
    }

}

import { ObservableQuestionsApi } from "./ObservableAPI";
import { QuestionsApiRequestFactory, QuestionsApiResponseProcessor} from "../apis/QuestionsApi";

export interface QuestionsApiGetCategoryRandomQuestionRequest {
    /**
     * ID of category to return
     * @type any
     * @memberof QuestionsApigetCategoryRandomQuestion
     */
    categoryId: any
}

export interface QuestionsApiGetQuestionRequest {
    /**
     * ID of question to return
     * @type any
     * @memberof QuestionsApigetQuestion
     */
    questionId: any
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
