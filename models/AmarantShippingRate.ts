/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCustomerAddress } from './AmarantCustomerAddress';

export type AmarantShippingRate = {
    id?: string;
    address?: AmarantCustomerAddress | null;
    carrierCode?: string;
    title?: string;
    method?: string;
    shippable?: boolean;
    price?: string;
};

