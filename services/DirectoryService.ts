/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantDirectoryCity } from '../models/AmarantDirectoryCity';
import type { AmarantDirectoryCountry } from '../models/AmarantDirectoryCountry';
import type { AmarantDirectoryRegion } from '../models/AmarantDirectoryRegion';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DirectoryService {

    /**
     * Get country collection
     * Returns a collection of countries
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getDirectoryCountries(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantDirectoryCountry>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

    /**
     * Get region collection
     * Returns a collection of regions
     * @param id Id
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getDirectoryCountryRegions(
        id: any,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantDirectoryRegion>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries/{id}/regions',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

    /**
     * Get city collection
     * Returns a collection of country cities
     * @param id Id
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getDirectoryCountryCities(
        id: any,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantDirectoryCity>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries/{id}/cities',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

    /**
     * Get city collection
     * Returns a collection of country region cities
     * @param id Id
     * @param regionId RegionId
     * @param page Page
     * @param itemsPerPage Items per page
     * @returns any OK
     * @throws ApiError
     */
    public static getDirectoryCountryRegionCities(
        id: any,
        regionId: any,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data?: Array<AmarantDirectoryCity>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/directory/v1/countries/{id}/regions/{regionId}/cities',
            path: {
                'id': id,
                'regionId': regionId,
            },
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }

}
