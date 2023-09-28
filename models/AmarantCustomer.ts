/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCustomerAccount } from './AmarantCustomerAccount';
import type { AmarantStoreChannel } from './AmarantStoreChannel';

export type AmarantCustomer = {
    uid?: string;
    title?: string | null;
    firstName?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    email?: string;
    account?: AmarantCustomerAccount | null;
    channel?: AmarantStoreChannel | null;
};

