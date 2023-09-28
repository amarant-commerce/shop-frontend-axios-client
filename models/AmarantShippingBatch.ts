/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantShippingBatchItem } from './AmarantShippingBatchItem';
import type { AmarantShippingRate } from './AmarantShippingRate';

export type AmarantShippingBatch = {
    id?: string;
    shippingRate?: AmarantShippingRate | null;
    shippingItems?: Array<AmarantShippingBatchItem>;
};

