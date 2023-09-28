/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAliasData } from '../models/AmarantAliasData';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AliasService {

    /**
     * Get alias collection
     * Returns a collection of aliases
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getAliasCollection(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantAliasData>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alias/v1/aliases',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

    /**
     * Match alias
     * Returns a matched alias
     * @param aliasUri Alias URI to match
     * @returns AmarantAliasData OK
     * @throws ApiError
     */
    public static getAliasMatch(
        aliasUri: any,
    ): CancelablePromise<AmarantAliasData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/alias/v1/match',
            query: {
                'aliasUri': aliasUri,
            },
        });
    }

}
