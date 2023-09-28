/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantAdditionalDataInput } from './AmarantAdditionalDataInput';
import type { AmarantCustomerAddressInput } from './AmarantCustomerAddressInput';

export type AmarantShippingInformationInput = {
    deliveryMethod?: string;
    address?: AmarantCustomerAddressInput | null;
    additionalData?: Array<AmarantAdditionalDataInput>;
};

