import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Category } from '../models/Category';
import { GetCategories200Response } from '../models/GetCategories200Response';
import { GetCategoryQuestions200Response } from '../models/GetCategoryQuestions200Response';
import { GetCategoryRandomQuestion200Response } from '../models/GetCategoryRandomQuestion200Response';
import { Question } from '../models/Question';
import { ObservableCategoriesApi } from './ObservableAPI';

import { CategoriesApiRequestFactory, CategoriesApiResponseProcessor} from "../apis/CategoriesApi";
export class PromiseCategoriesApi {
    private api: ObservableCategoriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoriesApiRequestFactory,
        responseProcessor?: CategoriesApiResponseProcessor
    ) {
        this.api = new ObservableCategoriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all categories.
     * Get all categories
     */
    public getCategories(_options?: Configuration): Promise<GetCategories200Response> {
        const result = this.api.getCategories(_options);
        return result.toPromise();
    }

    /**
     * Get all questions for a category.
     * Get all questions for a category
     * @param categoryId ID of category to return
     */
    public getCategoryQuestions(categoryId: number, _options?: Configuration): Promise<GetCategoryQuestions200Response> {
        const result = this.api.getCategoryQuestions(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Get a random question for a category.
     * Get a random question for a category
     * @param categoryId ID of category to return
     */
    public getCategoryRandomQuestion(categoryId: number, _options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        const result = this.api.getCategoryRandomQuestion(categoryId, _options);
        return result.toPromise();
    }


}



import { ObservableHealthApi } from './ObservableAPI';

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class PromiseHealthApi {
    private api: ObservableHealthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Health check endpoint. Returns 200 if the service is up and running.
     * Health check
     */
    public health(_options?: Configuration): Promise<any> {
        const result = this.api.health(_options);
        return result.toPromise();
    }


}



import { ObservableQuestionsApi } from './ObservableAPI';

import { QuestionsApiRequestFactory, QuestionsApiResponseProcessor} from "../apis/QuestionsApi";
export class PromiseQuestionsApi {
    private api: ObservableQuestionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QuestionsApiRequestFactory,
        responseProcessor?: QuestionsApiResponseProcessor
    ) {
        this.api = new ObservableQuestionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a random question for a category.
     * Get a random question for a category
     * @param categoryId ID of category to return
     */
    public getCategoryRandomQuestion(categoryId: number, _options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        const result = this.api.getCategoryRandomQuestion(categoryId, _options);
        return result.toPromise();
    }

    /**
     * Get a question.
     * Get a question
     * @param questionId ID of question to return
     */
    public getQuestion(questionId: number, _options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        const result = this.api.getQuestion(questionId, _options);
        return result.toPromise();
    }

    /**
     * Get all questions.
     * Get all questions
     */
    public getQuestions(_options?: Configuration): Promise<GetCategoryQuestions200Response> {
        const result = this.api.getQuestions(_options);
        return result.toPromise();
    }

    /**
     * Get a random question.
     * Get a random question
     */
    public getRandomQuestion(_options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        const result = this.api.getRandomQuestion(_options);
        return result.toPromise();
    }


}



