/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantDirectoryCountry } from './AmarantDirectoryCountry';
import type { AmarantDirectoryRegion } from './AmarantDirectoryRegion';

export type AmarantCustomerAddress = {
    addressType?: number | null;
    uid?: string;
    phone?: string | null;
    street?: Array<string>;
    city?: string | null;
    postCode?: string | null;
    country?: AmarantDirectoryCountry | null;
    countryId?: number;
    region?: AmarantDirectoryRegion | null;
    regionId?: number;
    title?: string | null;
    firstName?: string;
    middleName?: string | null;
    lastName?: string;
};

