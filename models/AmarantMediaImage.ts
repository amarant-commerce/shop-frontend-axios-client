/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantMediaImageVariant } from './AmarantMediaImageVariant';

export type AmarantMediaImage = {
    id?: string;
    url?: string;
    position?: number;
    featured?: boolean;
    altText?: string | null;
    width?: string;
    height?: string;
    variants?: Array<AmarantMediaImageVariant>;
};

