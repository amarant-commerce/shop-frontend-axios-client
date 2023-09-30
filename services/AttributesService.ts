/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantAttributesAttributeModel } from '../models/AmarantAttributesAttributeModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AttributesService {

    /**
     * Get attributes collection
     * Returns a collection of attributes
     * @param q qs encoded string of schema DescribableSearchCriteriaFilter
     * @returns any OK
     * @throws ApiError
     */
    public static getAttributesAttributeCollection(
        q?: any,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data?: Array<AmarantAttributesAttributeModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1/attributes',
            query: {
                'q': q,
            },
        });
    }

    /**
     * Get attribute
     * Returns a single attribute
     * @param id Id
     * @returns AmarantAttributesAttributeModel OK
     * @throws ApiError
     */
    public static getAttributesAttributeItem(
        id: any,
    ): CancelablePromise<AmarantAttributesAttributeModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1/attributes/{id}',
            path: {
                'id': id,
            },
        });
    }

}
