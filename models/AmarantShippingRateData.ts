/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AmarantShippingRateData = {
    id?: string;
    addressId?: (string | number);
    identifier?: string | null;
    carrierCode?: string;
    method?: string;
    title?: string;
    price?: (string | number);
    isShippable?: boolean;
    metaData?: Record<string, (string | number | boolean | null)>;
};

