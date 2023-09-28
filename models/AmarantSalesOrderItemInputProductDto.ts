/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantSalesOrderItemInputGenericProductDto } from './AmarantSalesOrderItemInputGenericProductDto';
import type { AmarantSalesOrderItemInputGroupedProductDto } from './AmarantSalesOrderItemInputGroupedProductDto';

export type AmarantSalesOrderItemInputProductDto = (AmarantSalesOrderItemInputGenericProductDto | AmarantSalesOrderItemInputGroupedProductDto | {
    type: string;
});

