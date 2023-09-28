/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCatalogProduct } from './AmarantCatalogProduct';
import type { AmarantSalesAdjustment } from './AmarantSalesAdjustment';
import type { AmarantSalesPayment } from './AmarantSalesPayment';

export type AmarantSalesOrderItem = {
    id?: string;
    payment?: AmarantSalesPayment | null;
    product?: AmarantCatalogProduct | null;
    parentProduct?: AmarantCatalogProduct | null;
    adjustments?: Array<AmarantSalesAdjustment>;
    sku?: string;
    parentSku?: string | null;
    name?: string;
    basePriceExTax?: string;
    basePrice?: string;
    priceExTax?: string;
    price?: string;
    baseSalePriceExTax?: string;
    baseSalePrice?: string;
    salePriceExTax?: string;
    salePrice?: string;
    qty?: string;
    baseRowTotalExTax?: string;
    rowTotalExTax?: string;
    baseRowTotalInclTax?: string;
    rowTotalInclTax?: string;
    baseSavings?: string;
    savings?: string;
    baseTaxAmount?: string;
    taxAmount?: string;
    taxPercent?: string;
    baseDiscountAmount?: string;
    discountAmount?: string;
    discountPercent?: string;
    sourceId?: number | null;
};

