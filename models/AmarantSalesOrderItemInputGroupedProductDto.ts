/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantSalesAdditionalDataInputDto } from './AmarantSalesAdditionalDataInputDto';
import type { AmarantSalesOrderItemInputGenericProductDto } from './AmarantSalesOrderItemInputGenericProductDto';

export type AmarantSalesOrderItemInputGroupedProductDto = {
    sku?: string;
    children?: Array<AmarantSalesOrderItemInputGenericProductDto>;
    additionalData?: Array<AmarantSalesAdditionalDataInputDto>;
    type: 'grouped';
};

