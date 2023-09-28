/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCustomer } from './AmarantCustomer';
import type { AmarantCustomerAddress } from './AmarantCustomerAddress';
import type { AmarantSalesAdjustment } from './AmarantSalesAdjustment';
import type { AmarantSalesOrderItem } from './AmarantSalesOrderItem';
import type { AmarantSalesPayment } from './AmarantSalesPayment';
import type { AmarantSalesTotal } from './AmarantSalesTotal';
import type { AmarantShippingBatch } from './AmarantShippingBatch';

export type AmarantSalesOrder = {
    uid?: string;
    baseCurrency?: string;
    currency?: string;
    customer?: AmarantCustomer | null;
    state?: string;
    billingAddress?: AmarantCustomerAddress | null;
    payments?: Array<AmarantSalesPayment>;
    items?: Array<AmarantSalesOrderItem>;
    adjustments?: Array<AmarantSalesAdjustment>;
    totals?: Array<AmarantSalesTotal>;
    currencyConversionRate?: string | null;
    physical?: boolean;
    shippingBatches?: Array<AmarantShippingBatch>;
    channelId?: number | null;
    shippingBatchIds?: Array<number>;
    customerId?: number | null;
};

