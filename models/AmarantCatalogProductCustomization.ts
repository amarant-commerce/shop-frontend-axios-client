/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCatalogCustomizationOptionModel } from './AmarantCatalogCustomizationOptionModel';
import type { AmarantCatalogProductModel } from './AmarantCatalogProductModel';

export type AmarantCatalogProductCustomization = {
    id?: number;
    options?: Array<AmarantCatalogCustomizationOptionModel>;
    productId?: (string | number);
    productType?: string;
    sku?: string;
    product?: AmarantCatalogProductModel | null;
};

