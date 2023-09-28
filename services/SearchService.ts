/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSearchResultList } from '../models/AmarantSearchResultList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchService {

    /**
     * Full text search
     * Returns a collection of search results
     * @param q Search query
     * @returns AmarantSearchResultList OK
     * @throws ApiError
     */
    public static searchGetCollection(
        q: any,
    ): CancelablePromise<AmarantSearchResultList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/search/v1/',
            query: {
                'q': q,
            },
        });
    }

}
