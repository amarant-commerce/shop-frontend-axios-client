/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCustomer } from '../models/AmarantCustomer';
import type { AmarantCustomerAddress } from '../models/AmarantCustomerAddress';
import type { AmarantCustomerInput } from '../models/AmarantCustomerInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * Get current customer
     * Returns the currently logged in customer
     * @param requestBody
     * @returns AmarantCustomer Resource created
     * @throws ApiError
     */
    public static getCurrentCustomer(
        requestBody?: AmarantCustomerInput,
    ): CancelablePromise<AmarantCustomer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customers/v1/me',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get customer
     * Returns a single customer
     * @param uid Uid
     * @returns AmarantCustomer OK
     * @throws ApiError
     */
    public static getCustomer(
        uid: any,
    ): CancelablePromise<AmarantCustomer> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/{uid}',
            path: {
                'uid': uid,
            },
        });
    }

    /**
     * Get customer addresses
     * Returns a collection of customer addresses
     * @param uid Uid
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomerAddress(
        uid: any,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantCustomerAddress>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/{uid}/addresses',
            path: {
                'uid': uid,
            },
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

}
