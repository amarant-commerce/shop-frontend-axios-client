/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantAdditionalDataInput } from './AmarantAdditionalDataInput';

export type AmarantCustomerAddressInput = {
    email?: string;
    firstname?: string;
    middlename?: string | null;
    lastname?: string;
    phone?: string;
    street?: Array<string>;
    city?: string;
    postcode?: string;
    regionId?: string;
    countryId?: string;
    additionalData?: Array<AmarantAdditionalDataInput>;
};

