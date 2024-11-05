/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CostCentreDto = {
    id?: string | null;
    timestamp?: string | null;
    name?: string | null;
    disabled?: boolean;
    description?: string | null;
    costCentreType?: CostCentreDto.costCentreType;
    tenantId?: string | null;
    costCentresGroupId?: string | null;
    parentCostCentreId?: string | null;
};
export namespace CostCentreDto {
    export enum costCentreType {
        '_0' = 0,
        '_1' = 1,
    }
}

