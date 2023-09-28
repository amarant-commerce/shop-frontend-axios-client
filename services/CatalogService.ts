/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCatalogCategoryTree } from '../models/AmarantCatalogCategoryTree';
import type { AmarantCatalogProductModel } from '../models/AmarantCatalogProductModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CatalogService {

    /**
     * Get product collection
     * Returns a collection of products
     * @param page Page
     * @param itemsPerPage Items per page
     * @param q qs encoded string of schema DescribableSearchCriteriaFilter
     * @returns any OK
     * @throws ApiError
     */
    public static getCatalogProductCollection(
        page?: number,
        itemsPerPage?: number,
        q?: any,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantCatalogProductModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/catalog/v1/products',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
                'q': q,
            },
        });
    }

    /**
     * Get product
     * Returns a single product
     * @param id Id
     * @returns AmarantCatalogProductModel OK
     * @throws ApiError
     */
    public static getCatalogProductItem(
        id: any,
    ): CancelablePromise<AmarantCatalogProductModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/catalog/v1/products/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get category tree
     * Returns the category tree
     * @returns AmarantCatalogCategoryTree OK
     * @throws ApiError
     */
    public static getCatalogCategoryTree(): CancelablePromise<AmarantCatalogCategoryTree> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/catalog/v1/category-tree',
        });
    }

}
