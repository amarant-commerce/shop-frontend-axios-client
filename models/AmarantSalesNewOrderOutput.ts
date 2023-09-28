/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantSalesOrderLink } from './AmarantSalesOrderLink';

export type AmarantSalesNewOrderOutput = {
    uid?: string;
    links?: Array<AmarantSalesOrderLink>;
    meta?: Record<string, (string | number | boolean | null) | null>;
};

