/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSalesInvoice } from '../models/AmarantSalesInvoice';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InvoiceService {

    /**
     * Get invoices
     * Returns a collection of invoices
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getInvoiceCollection(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantSalesInvoice>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/invoices',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

    /**
     * Get invoice
     * Returns a single invoice
     * @param id Id
     * @returns AmarantSalesInvoice OK
     * @throws ApiError
     */
    public static getInvoice(
        id: any,
    ): CancelablePromise<AmarantSalesInvoice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/invoices/{id}',
            path: {
                'id': id,
            },
        });
    }

}
