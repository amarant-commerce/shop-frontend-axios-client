/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantSalesAdjustment } from './AmarantSalesAdjustment';
import type { AmarantSalesInvoiceItem } from './AmarantSalesInvoiceItem';
import type { AmarantSalesPayment } from './AmarantSalesPayment';
import type { AmarantSalesTotal } from './AmarantSalesTotal';

export type AmarantSalesInvoice = {
    id?: string;
    uid?: string;
    payment?: AmarantSalesPayment | null;
    items?: Array<AmarantSalesInvoiceItem>;
    totals?: Array<AmarantSalesTotal>;
    adjustments?: Array<AmarantSalesAdjustment>;
    createdAt?: string;
    updatedAt?: string;
};

