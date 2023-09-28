/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCatalogProductPriceItem } from './AmarantCatalogProductPriceItem';

export type AmarantCatalogPricing = {
    currencyCode?: string;
    prices?: Array<AmarantCatalogProductPriceItem>;
    regularPrice?: number;
    lowestPrice?: number;
    meta?: Record<string, (string | number | boolean | null)> | null;
};

