/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSalesNewOrderOutput } from '../models/AmarantSalesNewOrderOutput';
import type { AmarantSalesOrder } from '../models/AmarantSalesOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * Get order
     * Returns a single order
     * @param uid Uid
     * @returns AmarantSalesOrder OK
     * @throws ApiError
     */
    public static getOrderItem(
        uid: any,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/orders/{uid}',
            path: {
                'uid': uid,
            },
        });
    }

    /**
     * Place order
     * Places an order from cart
     * @param uid Uid
     * @param requestBody
     * @returns AmarantSalesNewOrderOutput Resource created
     * @throws ApiError
     */
    public static placeOrder(
        uid: any,
        requestBody?: any,
    ): CancelablePromise<AmarantSalesNewOrderOutput> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales/v1/orders/{uid}',
            path: {
                'uid': uid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get orders
     * Returns a collection of orders
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderCollection(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantSalesOrder>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/orders',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

}
