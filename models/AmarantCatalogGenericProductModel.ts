/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCatalogCategory } from './AmarantCatalogCategory';
import type { AmarantCatalogInventory } from './AmarantCatalogInventory';
import type { AmarantCatalogPricing } from './AmarantCatalogPricing';
import type { AmarantMediaImage } from './AmarantMediaImage';

export type AmarantCatalogGenericProductModel = {
    inventory?: AmarantCatalogInventory | null;
    type?: 'generic';
    id?: (string | number);
    url?: string;
    path?: string;
    localizedPath?: string;
    sku?: string;
    set?: string | null;
    setId?: number | null;
    attributes?: Record<string, (string | number | boolean | null)>;
    pricing?: AmarantCatalogPricing | null;
    createdAt?: string;
    updatedAt?: string;
    media?: Array<AmarantMediaImage>;
    categoryIds?: Array<number>;
    categories?: Array<AmarantCatalogCategory>;
};

