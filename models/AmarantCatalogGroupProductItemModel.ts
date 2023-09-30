/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCatalogProductModel } from './AmarantCatalogProductModel';

export type AmarantCatalogGroupProductItemModel = {
    id?: (string | number);
    type?: string;
    sku?: string;
    product?: AmarantCatalogProductModel | null;
};

