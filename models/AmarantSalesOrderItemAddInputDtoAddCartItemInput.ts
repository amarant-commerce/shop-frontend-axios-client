/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantSalesAdditionalDataInputDto } from './AmarantSalesAdditionalDataInputDto';
import type { AmarantSalesOrderItemInputProductDto } from './AmarantSalesOrderItemInputProductDto';

export type AmarantSalesOrderItemAddInputDtoAddCartItemInput = {
    product?: AmarantSalesOrderItemInputProductDto;
    additionalData?: Array<AmarantSalesAdditionalDataInputDto>;
};

