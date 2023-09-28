/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmarantAdditionalDataInput } from './AmarantAdditionalDataInput';
import type { AmarantCustomerAddressInput } from './AmarantCustomerAddressInput';

export type AmarantSalesPaymentInformationInputSetCartPaymentInformationInput = {
    paymentMethod?: string;
    address?: AmarantCustomerAddressInput;
    additionalData?: Array<AmarantAdditionalDataInput>;
};

