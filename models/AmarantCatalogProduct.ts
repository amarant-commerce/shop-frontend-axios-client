/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantMediaEntry } from './AmarantMediaEntry';

export type AmarantCatalogProduct = {
    id?: string;
    sku?: string;
    type?: string;
    media?: Array<AmarantMediaEntry>;
    urlAlias?: string | null;
    attributes?: Record<string, (string | number | boolean | null)>;
};

