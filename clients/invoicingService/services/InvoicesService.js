"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class InvoicesService {
    /**
     * @param tenantId
     * @returns InvoiceDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2InvoicingServiceInvoices(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoices(tenantId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesCount(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesExtended(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesExtendedCount(tenantId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesExtended1(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getInvoiceAsync(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2InvoicingServiceInvoices(tenantId, invoiceId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2InvoicingServiceInvoices(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2InvoicingServiceInvoicesCalculate(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesLines(tenantId, invoiceId, itemId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesLines(tenantId, invoiceId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesLinesCount(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesLines1(tenantId, invoiceId, invoiceLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2InvoicingServiceInvoicesLines(tenantId, invoiceId, invoiceLineId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2InvoicingServiceInvoicesLines(tenantId, invoiceId, invoiceLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2InvoicingServiceInvoicesLinesCalculate(tenantId, invoiceId, invoiceLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesLinesTaxes(tenantId, invoiceId, invoiceLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesLinesTaxes(tenantId, invoiceId, invoiceLineId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesLinesTaxesCount(tenantId, invoiceId, invoiceLineId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2InvoicingServiceInvoicesLinesTaxes(tenantId, invoiceId, invoiceLineId, invoiceLineTaxId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2InvoicingServiceInvoicesLinesTaxes(tenantId, invoiceId, invoiceLineId, invoiceLineTaxId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesAdjustments(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesAdjustments(tenantId, invoiceId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesAdjustmentsCount(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesAdjustments1(tenantId, invoiceId, invoiceAdjustmentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2InvoicingServiceInvoicesAdjustments(tenantId, invoiceId, invoiceAdjustmentId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2InvoicingServiceInvoicesAdjustments(tenantId, invoiceId, invoiceAdjustmentId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesReferences(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesReferences(tenantId, invoiceId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesReferencesCount(tenantId, invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesReferences1(tenantId, invoiceId, invoiceReferenceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static putApiV2InvoicingServiceInvoicesReferences(tenantId, invoiceId, invoiceReferenceId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteApiV2InvoicingServiceInvoicesReferences(tenantId, invoiceId, invoiceReferenceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesPayments(invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getApiV2InvoicingServiceInvoicesPaymentsCount(invoiceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesTotalsAggregate(requestBody, currencyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesTaxesAggregate(requestBody, currencyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesDiscountsAggregate(requestBody, currencyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesTaxBasesAggregate(requestBody, currencyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postApiV2InvoicingServiceInvoicesGlobalSurchargesAggregate(requestBody, currencyId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.InvoicesService = InvoicesService;
