/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantApiError } from './AmarantApiError';
import type { AmarantApiLinks } from './AmarantApiLinks';

export type AmarantApiPaginatedCollectionResponse = {
    meta?: Record<string, (string | number | boolean | null) | null>;
    errors?: Array<AmarantApiError> | null;
    links?: AmarantApiLinks | null;
    data?: any;
};

