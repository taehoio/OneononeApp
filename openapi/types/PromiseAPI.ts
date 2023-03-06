import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Category } from '../models/Category';
import { GetApiStatus200Response } from '../models/GetApiStatus200Response';
import { GetCategories200Response } from '../models/GetCategories200Response';
import { GetCategoryQuestions200Response } from '../models/GetCategoryQuestions200Response';
import { GetCategoryRandomQuestion200Response } from '../models/GetCategoryRandomQuestion200Response';
import { GetCategoryRandomQuestion400Response } from '../models/GetCategoryRandomQuestion400Response';
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



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get API status.
     * Get API status
     */
    public getApiStatus(_options?: Configuration): Promise<GetApiStatus200Response> {
        const result = this.api.getApiStatus(_options);
        return result.toPromise();
    }

    /**
     * Get API status.
     * Get API status
     */
    public headApiStatus(_options?: Configuration): Promise<void> {
        const result = this.api.headApiStatus(_options);
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
     * Get a random question.
     * Get a random question
     */
    public getRandomQuestion(_options?: Configuration): Promise<GetCategoryRandomQuestion200Response> {
        const result = this.api.getRandomQuestion(_options);
        return result.toPromise();
    }


}



