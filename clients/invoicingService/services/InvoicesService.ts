/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmptyEnvelope } from '../models/EmptyEnvelope';
import type { ExtendedInvoiceDtoListEnvelope } from '../models/ExtendedInvoiceDtoListEnvelope';
import type { Int32Envelope } from '../models/Int32Envelope';
import type { InvoiceAdjustmentCreateDto } from '../models/InvoiceAdjustmentCreateDto';
import type { InvoiceAdjustmentDtoEnvelope } from '../models/InvoiceAdjustmentDtoEnvelope';
import type { InvoiceAdjustmentDtoListEnvelope } from '../models/InvoiceAdjustmentDtoListEnvelope';
import type { InvoiceAdjustmentUpdateDto } from '../models/InvoiceAdjustmentUpdateDto';
import type { InvoiceCreateDto } from '../models/InvoiceCreateDto';
import type { InvoiceDtoEnvelope } from '../models/InvoiceDtoEnvelope';
import type { InvoiceDtoListEnvelope } from '../models/InvoiceDtoListEnvelope';
import type { InvoiceLineAppliedTaxCreateDto } from '../models/InvoiceLineAppliedTaxCreateDto';
import type { InvoiceLineAppliedTaxDtoListEnvelope } from '../models/InvoiceLineAppliedTaxDtoListEnvelope';
import type { InvoiceLineAppliedTaxUpdateDto } from '../models/InvoiceLineAppliedTaxUpdateDto';
import type { InvoiceLineCreateDto } from '../models/InvoiceLineCreateDto';
import type { InvoiceLineDtoEnvelope } from '../models/InvoiceLineDtoEnvelope';
import type { InvoiceLineDtoListEnvelope } from '../models/InvoiceLineDtoListEnvelope';
import type { InvoiceLineUpdateDto } from '../models/InvoiceLineUpdateDto';
import type { InvoiceReferenceCreateDto } from '../models/InvoiceReferenceCreateDto';
import type { InvoiceReferenceDtoEnvelope } from '../models/InvoiceReferenceDtoEnvelope';
import type { InvoiceReferenceDtoListEnvelope } from '../models/InvoiceReferenceDtoListEnvelope';
import type { InvoiceReferenceUpdateDto } from '../models/InvoiceReferenceUpdateDto';
import type { InvoiceUpdateDto } from '../models/InvoiceUpdateDto';
import type { MoneyEnvelope } from '../models/MoneyEnvelope';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvoicesService {
    /**
     * @param tenantId
     * @returns InvoiceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoices(
        tenantId: string,
    ): CancelablePromise<InvoiceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices',
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoices(
        tenantId: string,
        requestBody?: InvoiceCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices',
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesCount(
        tenantId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/Count',
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @returns ExtendedInvoiceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesExtended(
        tenantId: string,
    ): CancelablePromise<ExtendedInvoiceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/Extended',
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesExtendedCount(
        tenantId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/Extended/Count',
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns InvoiceDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesExtended1(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<InvoiceDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Extended',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns InvoiceDtoEnvelope OK
     * @throws ApiError
     */
    public static getInvoiceAsync(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<InvoiceDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2InvoicingServiceInvoices(
        tenantId: string,
        invoiceId: string,
        requestBody?: InvoiceUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2InvoicingServiceInvoices(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2InvoicingServiceInvoicesCalculate(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Calculate',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param itemId
     * @returns InvoiceLineDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesLines(
        tenantId: string,
        invoiceId: string,
        itemId?: string,
    ): CancelablePromise<InvoiceLineDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
                'itemId': itemId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesLines(
        tenantId: string,
        invoiceId: string,
        requestBody?: InvoiceLineCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesLinesCount(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/Count',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @returns InvoiceLineDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesLines1(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
    ): CancelablePromise<InvoiceLineDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2InvoicingServiceInvoicesLines(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
        requestBody?: InvoiceLineUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2InvoicingServiceInvoicesLines(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2InvoicingServiceInvoicesLinesCalculate(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Calculate',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @returns InvoiceLineAppliedTaxDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesLinesTaxes(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
    ): CancelablePromise<InvoiceLineAppliedTaxDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesLinesTaxes(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
        requestBody?: InvoiceLineAppliedTaxCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesLinesTaxesCount(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/Count',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @param invoiceLineTaxId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2InvoicingServiceInvoicesLinesTaxes(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
        invoiceLineTaxId: string,
        requestBody?: InvoiceLineAppliedTaxUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
                'invoiceLineTaxId': invoiceLineTaxId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceLineId
     * @param invoiceLineTaxId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2InvoicingServiceInvoicesLinesTaxes(
        tenantId: string,
        invoiceId: string,
        invoiceLineId: string,
        invoiceLineTaxId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceLineId': invoiceLineId,
                'invoiceLineTaxId': invoiceLineTaxId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns InvoiceAdjustmentDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesAdjustments(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<InvoiceAdjustmentDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesAdjustments(
        tenantId: string,
        invoiceId: string,
        requestBody?: InvoiceAdjustmentCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesAdjustmentsCount(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/Count',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceAdjustmentId
     * @returns InvoiceAdjustmentDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesAdjustments1(
        tenantId: string,
        invoiceId: string,
        invoiceAdjustmentId: string,
    ): CancelablePromise<InvoiceAdjustmentDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceAdjustmentId': invoiceAdjustmentId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceAdjustmentId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2InvoicingServiceInvoicesAdjustments(
        tenantId: string,
        invoiceId: string,
        invoiceAdjustmentId: string,
        requestBody?: InvoiceAdjustmentUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceAdjustmentId': invoiceAdjustmentId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceAdjustmentId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2InvoicingServiceInvoicesAdjustments(
        tenantId: string,
        invoiceId: string,
        invoiceAdjustmentId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceAdjustmentId': invoiceAdjustmentId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns InvoiceReferenceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesReferences(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<InvoiceReferenceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/References',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesReferences(
        tenantId: string,
        invoiceId: string,
        requestBody?: InvoiceReferenceCreateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/References',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesReferencesCount(
        tenantId: string,
        invoiceId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/References/Count',
            path: {
                'invoiceId': invoiceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceReferenceId
     * @returns InvoiceReferenceDtoEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesReferences1(
        tenantId: string,
        invoiceId: string,
        invoiceReferenceId: string,
    ): CancelablePromise<InvoiceReferenceDtoEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceReferenceId': invoiceReferenceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceReferenceId
     * @param requestBody
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static putApiV2InvoicingServiceInvoicesReferences(
        tenantId: string,
        invoiceId: string,
        invoiceReferenceId: string,
        requestBody?: InvoiceReferenceUpdateDto,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceReferenceId': invoiceReferenceId,
            },
            query: {
                'tenantId': tenantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param tenantId
     * @param invoiceId
     * @param invoiceReferenceId
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    public static deleteApiV2InvoicingServiceInvoicesReferences(
        tenantId: string,
        invoiceId: string,
        invoiceReferenceId: string,
    ): CancelablePromise<EmptyEnvelope> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}',
            path: {
                'invoiceId': invoiceId,
                'invoiceReferenceId': invoiceReferenceId,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * @param invoiceId
     * @returns InvoiceDtoListEnvelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesPayments(
        invoiceId: string,
    ): CancelablePromise<InvoiceDtoListEnvelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Payments',
            path: {
                'invoiceId': invoiceId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param invoiceId
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    public static getApiV2InvoicingServiceInvoicesPaymentsCount(
        invoiceId: string,
    ): CancelablePromise<Int32Envelope> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v2/InvoicingService/Invoices/{invoiceId}/Payments/Count',
            path: {
                'invoiceId': invoiceId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param currencyId
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesTotalsAggregate(
        requestBody: Array<string>,
        currencyId?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/TotalsAggregate',
            query: {
                'currencyId': currencyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param currencyId
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesTaxesAggregate(
        requestBody: Array<string>,
        currencyId?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/TaxesAggregate',
            query: {
                'currencyId': currencyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param currencyId
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesDiscountsAggregate(
        requestBody: Array<string>,
        currencyId?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/DiscountsAggregate',
            query: {
                'currencyId': currencyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param currencyId
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesTaxBasesAggregate(
        requestBody: Array<string>,
        currencyId?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/TaxBasesAggregate',
            query: {
                'currencyId': currencyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param currencyId
     * @returns MoneyEnvelope OK
     * @throws ApiError
     */
    public static postApiV2InvoicingServiceInvoicesGlobalSurchargesAggregate(
        requestBody: Array<string>,
        currencyId?: string,
    ): CancelablePromise<MoneyEnvelope> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v2/InvoicingService/Invoices/GlobalSurchargesAggregate',
            query: {
                'currencyId': currencyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
