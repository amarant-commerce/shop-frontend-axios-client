/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AmarantCatalogCategoryTree = {
    id?: number;
    label?: string;
    url?: string | null;
    mediaUrl?: string | null;
    children?: Array<AmarantCatalogCategoryTree>;
};

