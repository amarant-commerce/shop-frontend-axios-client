/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCatalogCustomizationOptionModel } from './AmarantCatalogCustomizationOptionModel';
import type { AmarantCatalogProductModel } from './AmarantCatalogProductModel';

export type AmarantCatalogProductCustomization = {
    id?: number;
    options?: Array<AmarantCatalogCustomizationOptionModel>;
    product?: AmarantCatalogProductModel;
};

