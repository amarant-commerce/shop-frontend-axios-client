/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantCustomerOrigin } from './AmarantCustomerOrigin';

export type AmarantCustomerAccount = {
    uid?: string;
    email?: string;
    confirmationHash?: string | null;
    confirmationValidUntil?: string | null;
    state?: string;
    limitations?: Record<string, (string | number | boolean | null)>;
    origin?: AmarantCustomerOrigin | null;
    roles?: Array<string>;
};

