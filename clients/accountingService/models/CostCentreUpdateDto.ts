/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CostCentreUpdateDto = {
    name?: string | null;
    disabled?: boolean;
    description?: string | null;
    costCentreType?: CostCentreUpdateDto.costCentreType;
    tenantId?: string | null;
    costCentresGroupId?: string | null;
    parentCostCentreId?: string | null;
};
export namespace CostCentreUpdateDto {
    export enum costCentreType {
        '_0' = 0,
        '_1' = 1,
    }
}

