/**
 * 1on1
 * Hassle-free 1on1 questions.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Question } from '../models/Question';
import { HttpFile } from '../http/http';

export class GetCategoryRandomQuestion200Response {
    'question'?: Question;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "question",
            "baseName": "question",
            "type": "Question",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCategoryRandomQuestion200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
