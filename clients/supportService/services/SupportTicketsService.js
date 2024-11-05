"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportTicketsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class SupportTicketsService {
    /**
     * @param tenantId
     * @param xApiVersion
     * @returns SupportTicketDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTickets(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SupportServiceSupportTickets(requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportTickets',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
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
     * @param tenantId
     * @param xApiVersion
     * @returns Int32Envelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTicketsCount(tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/Count',
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketId
     * @param xApiVersion
     * @returns SupportTicketDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTickets1(supportTicketId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}',
            path: {
                'supportTicketId': supportTicketId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static putApiV2SupportServiceSupportTickets(supportTicketId, requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}',
            path: {
                'supportTicketId': supportTicketId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
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
     * @param supportTicketId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SupportServiceSupportTickets(supportTicketId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}',
            path: {
                'supportTicketId': supportTicketId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketId
     * @param requestBody
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope Created
     * @throws ApiError
     */
    static postApiV2SupportServiceSupportTicketsConversations(supportTicketId, requestBody, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations',
            path: {
                'supportTicketId': supportTicketId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
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
     * @param supportTicketId
     * @param xApiVersion
     * @returns SupportTicketConversationDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTicketsConversations(supportTicketId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations',
            path: {
                'supportTicketId': supportTicketId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketId
     * @param supportTicketConversationId
     * @param xApiVersion
     * @returns SupportTicketConversationDtoEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTicketsConversations1(supportTicketId, supportTicketConversationId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}',
            path: {
                'supportTicketId': supportTicketId,
                'supportTicketConversationId': supportTicketConversationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketId
     * @param supportTicketConversationId
     * @param tenantId
     * @param xApiVersion
     * @returns EmptyEnvelope OK
     * @throws ApiError
     */
    static deleteApiV2SupportServiceSupportTicketsConversations(supportTicketId, supportTicketConversationId, tenantId, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}',
            path: {
                'supportTicketId': supportTicketId,
                'supportTicketConversationId': supportTicketConversationId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'tenantId': tenantId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * @param supportTicketConversationId
     * @param supportTicketId
     * @param pageNumber
     * @param pageSize
     * @param xApiVersion
     * @returns PrivateMessageDtoListEnvelope OK
     * @throws ApiError
     */
    static getApiV2SupportServiceSupportTicketsConversationsMessages(supportTicketConversationId, supportTicketId, pageNumber, pageSize, xApiVersion) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/v2/SupportService/SupportTickets/{supportTicketId}/Conversations/{supportTicketConversationId}/Messages',
            path: {
                'supportTicketConversationId': supportTicketConversationId,
                'supportTicketId': supportTicketId,
            },
            headers: {
                'x-api-version': xApiVersion,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
exports.SupportTicketsService = SupportTicketsService;
