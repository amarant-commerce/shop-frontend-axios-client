/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantSalesOrder } from '../models/AmarantSalesOrder';
import type { AmarantSalesOrderInput } from '../models/AmarantSalesOrderInput';
import type { AmarantSalesOrderItemAddInputDtoAddCartItemInput } from '../models/AmarantSalesOrderItemAddInputDtoAddCartItemInput';
import type { AmarantSalesOrderItemUpdateInputDtoUpdateCartItemInput } from '../models/AmarantSalesOrderItemUpdateInputDtoUpdateCartItemInput';
import type { AmarantSalesPaymentData } from '../models/AmarantSalesPaymentData';
import type { AmarantSalesPaymentInformationInputSetCartPaymentInformationInput } from '../models/AmarantSalesPaymentInformationInputSetCartPaymentInformationInput';
import type { AmarantShippingInformationInputGroupSetCartShippingInformationInput } from '../models/AmarantShippingInformationInputGroupSetCartShippingInformationInput';
import type { AmarantShippingRateData } from '../models/AmarantShippingRateData';
import type { AmarantShippingRateEstimationGroupGetCartShippingRatesInput } from '../models/AmarantShippingRateEstimationGroupGetCartShippingRatesInput';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CartService {

    /**
     * Create cart
     * Creates a new cart
     * @param requestBody
     * @returns AmarantSalesOrder Resource created
     * @throws ApiError
     */
    public static createCart(
        requestBody?: any,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales/v1/carts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get cart
     * Returns a single cart
     * @param uid Uid
     * @returns AmarantSalesOrder OK
     * @throws ApiError
     */
    public static getCart(
        uid: any,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/carts/{uid}',
            path: {
                'uid': uid,
            },
        });
    }

    /**
     * Add cart item
     * Adds an item to cart
     * @param uid Uid
     * @param requestBody
     * @returns AmarantSalesOrder Resource created
     * @throws ApiError
     */
    public static addCartItem(
        uid: any,
        requestBody?: AmarantSalesOrderItemAddInputDtoAddCartItemInput,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales/v1/carts/{uid}/items',
            path: {
                'uid': uid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get available payment methods
     * Returns a collection of available payment methods
     * @param uid Uid
     * @param requestBody
     * @returns any Resource created
     * @throws ApiError
     */
    public static getCartPaymentMethods(
        uid: any,
        requestBody?: AmarantSalesOrderInput,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data?: Array<AmarantSalesPaymentData>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales/v1/carts/{uid}/available-payment-methods',
            path: {
                'uid': uid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Set payment information
     * Sets cart payment information
     * @param uid Uid
     * @param requestBody
     * @returns AmarantSalesOrder Resource created
     * @throws ApiError
     */
    public static setCartPaymentInformation(
        uid: any,
        requestBody?: AmarantSalesPaymentInformationInputSetCartPaymentInformationInput,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales/v1/carts/{uid}/set-payment-information',
            path: {
                'uid': uid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update cart item
     * Updates a cart item
     * @param uid Uid
     * @param itemId ItemId
     * @param requestBody
     * @returns AmarantSalesOrder Resource updated
     * @throws ApiError
     */
    public static updateCartItem(
        uid: any,
        itemId: any,
        requestBody?: AmarantSalesOrderItemUpdateInputDtoUpdateCartItemInput,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/sales/v1/carts/{uid}/items/{itemId}',
            path: {
                'uid': uid,
                'itemId': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove cart item
     * Removes a cart item
     * @param uid Uid
     * @param itemId ItemId
     * @returns AmarantSalesOrder Resource deleted
     * @throws ApiError
     */
    public static deleteCartItem(
        uid: any,
        itemId: any,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/sales/v1/carts/{uid}/items/{itemId}',
            path: {
                'uid': uid,
                'itemId': itemId,
            },
        });
    }

    /**
     * Get available shipping rates
     * Returns a collection of available shipping rates
     * @param uid Uid
     * @param requestBody
     * @returns any Resource created
     * @throws ApiError
     */
    public static getCartShippingRates(
        uid: any,
        requestBody?: AmarantShippingRateEstimationGroupGetCartShippingRatesInput,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data?: Array<AmarantShippingRateData>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales/v1/carts/{uid}/available-shipping-rates',
            path: {
                'uid': uid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Set shipping information
     * Sets cart shipping information
     * @param uid Uid
     * @param requestBody
     * @returns AmarantSalesOrder Resource created
     * @throws ApiError
     */
    public static setCartShippingInformation(
        uid: any,
        requestBody?: AmarantShippingInformationInputGroupSetCartShippingInformationInput,
    ): CancelablePromise<AmarantSalesOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sales/v1/carts/{uid}/set-shipping-information',
            path: {
                'uid': uid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
