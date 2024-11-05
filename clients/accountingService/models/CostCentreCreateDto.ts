/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CostCentreCreateDto = {
    readonly id?: string;
    readonly timestamp?: string;
    name?: string | null;
    disabled?: boolean;
    description?: string | null;
    costCentreType?: CostCentreCreateDto.costCentreType;
    tenantId?: string | null;
    costCentresGroupId?: string | null;
    parentCostCentreId?: string | null;
};
export namespace CostCentreCreateDto {
    export enum costCentreType {
        '_0' = 0,
        '_1' = 1,
    }
}

