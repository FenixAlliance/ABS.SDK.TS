/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v2/PaymentsService/Payments/{paymentId}/Details": {
    /** @deprecated */
    get: {
      parameters: {
        path: {
          paymentId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["PaymentDtoListEnvelope"];
            "application/xml": components["schemas"]["PaymentDtoListEnvelope"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
      };
    };
  };
  "/api/v2/PaymentsService/Payments/{paymentId}": {
    get: {
      parameters: {
        path: {
          paymentId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["PaymentDtoListEnvelope"];
            "application/xml": components["schemas"]["PaymentDtoListEnvelope"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
      };
    };
    put: {
      parameters: {
        query: {
          tenantId: string;
        };
        path: {
          paymentId: string;
        };
      };
      requestBody?: {
        content: {
          "application/json": components["schemas"]["PaymentUpdateDto"];
          "application/xml": components["schemas"]["PaymentUpdateDto"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["EmptyEnvelope"];
            "application/xml": components["schemas"]["EmptyEnvelope"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
      };
    };
    delete: {
      parameters: {
        query: {
          tenantId: string;
        };
        path: {
          paymentId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["EmptyEnvelope"];
            "application/xml": components["schemas"]["EmptyEnvelope"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
      };
    };
  };
  "/api/v2/PaymentsService/Payments": {
    get: {
      parameters: {
        query: {
          tenantId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["PaymentDtoListEnvelope"];
            "application/xml": components["schemas"]["PaymentDtoListEnvelope"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
      };
    };
    post: {
      parameters: {
        query: {
          tenantId: string;
        };
      };
      requestBody?: {
        content: {
          "application/json": components["schemas"]["PaymentCreateDto"];
          "application/xml": components["schemas"]["PaymentCreateDto"];
        };
      };
      responses: {
        /** @description Created */
        201: {
          content: {
            "application/json": components["schemas"]["EmptyEnvelope"];
            "application/xml": components["schemas"]["EmptyEnvelope"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Unauthorized */
        401: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
        /** @description Forbidden */
        403: {
          content: {
            "application/json": components["schemas"]["ErrorEnvelope"];
            "application/xml": components["schemas"]["ErrorEnvelope"];
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    EmptyEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
    };
    ErrorEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
    };
    PaymentCreateDto: {
      /** Format: uuid */
      id?: string;
      /** Format: date-time */
      timestamp?: string;
      invoiceId?: string | null;
      tenantId?: string | null;
      emisorWalletId?: string | null;
      receiverWalletId?: string | null;
      currencyId?: string | null;
      /** Format: double */
      forexRate?: number;
      /** Format: double */
      totalCost?: number;
      /** Format: double */
      totalTaxes?: number;
      closed?: boolean;
      data?: string | null;
      dataLabel?: string | null;
      data1?: string | null;
      data1Label?: string | null;
      response?: string | null;
      authorization?: string | null;
      referenceCode?: string | null;
      correlationCode?: string | null;
      /** Format: date-time */
      lastUpdated?: string;
      /**
       * Format: int32
       * @enum {integer}
       */
      onBehalfOf?: 0 | 1 | 2 | 3;
      /**
       * Format: int32
       * @enum {integer}
       */
      paymentType?: 0 | 1 | 2;
      /**
       * Format: int32
       * @enum {integer}
       */
      paymentStatus?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
      /** Format: double */
      baseCost?: number;
      signature?: string | null;
      signatureMismatch?: boolean;
      isExternal?: boolean;
      markedForRevision?: boolean;
      forexRatesSnapshot?: string | null;
      officialId?: string | null;
      /** Format: date-time */
      officialIdExpeditionDate?: string;
      fiscalIdentificationTypeId?: string | null;
      billingAddress?: string | null;
      phone?: string | null;
      cellphone?: string | null;
      department?: string | null;
      city?: string | null;
      countryId?: string | null;
      locationId?: string | null;
      entitlementId?: string | null;
      /** Format: double */
      antiFraudScore?: number;
      callRecordURL?: string | null;
      called?: boolean;
      verified?: boolean;
      payerPictureTimestamp?: string | null;
      payerPicture?: string | null;
      identificationPictureTimestamp?: string | null;
      identificationPicture?: string | null;
      identificationBackPicture?: string | null;
      identificationBackPictureTimestamp?: string | null;
      ipLookupId?: string | null;
      orderId?: string | null;
      accountingEntryId?: string | null;
      paymentGatewayId?: string | null;
      bankAccountId?: string | null;
      enrolmentId?: string | null;
      bankId?: string | null;
      paymentTokenId?: string | null;
      emisorWalletAccountId?: string | null;
      receiverWalletAccountId?: string | null;
    };
    PaymentDto: {
      id?: string | null;
      /** Format: date-time */
      timestamp?: string | null;
      /** Format: date-time */
      timeStamp?: string;
      test?: boolean;
      invoiceId?: string | null;
      tenantId?: string | null;
      emisorWalletId?: string | null;
      receiverWalletId?: string | null;
      currencyId?: string | null;
      /** Format: double */
      forexRate?: number;
      /** Format: double */
      totalCost?: number;
      /** Format: double */
      totalTaxes?: number;
      closed?: boolean;
      data?: string | null;
      dataLabel?: string | null;
      data1?: string | null;
      data1Label?: string | null;
      response?: string | null;
      authorization?: string | null;
      referenceCode?: string | null;
      correlationCode?: string | null;
      /** Format: date-time */
      lastUpdated?: string;
      /**
       * Format: int32
       * @enum {integer}
       */
      onBehalfOf?: 0 | 1 | 2 | 3;
      /**
       * Format: int32
       * @enum {integer}
       */
      paymentType?: 0 | 1 | 2;
      /**
       * Format: int32
       * @enum {integer}
       */
      paymentStatus?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
      /** Format: double */
      baseCost?: number;
      signature?: string | null;
      signatureMismatch?: boolean;
      isExternal?: boolean;
      markedForRevision?: boolean;
      forexRatesSnapshot?: string | null;
      officialId?: string | null;
      /** Format: date-time */
      officialIdExpeditionDate?: string;
      fiscalIdentificationTypeId?: string | null;
      billingAddress?: string | null;
      phone?: string | null;
      cellphone?: string | null;
      department?: string | null;
      city?: string | null;
      countryId?: string | null;
      locationId?: string | null;
      entitlementId?: string | null;
      /** Format: double */
      antiFraudScore?: number;
      callRecordURL?: string | null;
      called?: boolean;
      verified?: boolean;
      payerPictureTimestamp?: string | null;
      payerPicture?: string | null;
      identificationPictureTimestamp?: string | null;
      identificationPicture?: string | null;
      identificationBackPicture?: string | null;
      identificationBackPictureTimestamp?: string | null;
      ipLookupId?: string | null;
      orderId?: string | null;
      accountingEntryId?: string | null;
      paymentGatewayId?: string | null;
      bankAccountId?: string | null;
      enrolmentId?: string | null;
      bankId?: string | null;
      paymentTokenId?: string | null;
    };
    PaymentDtoListEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["PaymentDto"][] | null;
    };
    PaymentUpdateDto: {
      invoiceId?: string | null;
      tenantId?: string | null;
      emisorWalletId?: string | null;
      receiverWalletId?: string | null;
      currencyId?: string | null;
      /** Format: double */
      forexRate?: number;
      /** Format: double */
      totalCost?: number;
      /** Format: double */
      totalTaxes?: number;
      closed?: boolean;
      data?: string | null;
      dataLabel?: string | null;
      data1?: string | null;
      data1Label?: string | null;
      response?: string | null;
      authorization?: string | null;
      referenceCode?: string | null;
      correlationCode?: string | null;
      /** Format: date-time */
      lastUpdated?: string;
      /**
       * Format: int32
       * @enum {integer}
       */
      onBehalfOf?: 0 | 1 | 2 | 3;
      /**
       * Format: int32
       * @enum {integer}
       */
      paymentType?: 0 | 1 | 2;
      /**
       * Format: int32
       * @enum {integer}
       */
      paymentStatus?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
      /** Format: double */
      baseCost?: number;
      signature?: string | null;
      signatureMismatch?: boolean;
      isExternal?: boolean;
      markedForRevision?: boolean;
      forexRatesSnapshot?: string | null;
      officialId?: string | null;
      /** Format: date-time */
      officialIdExpeditionDate?: string;
      fiscalIdentificationTypeId?: string | null;
      billingAddress?: string | null;
      phone?: string | null;
      cellphone?: string | null;
      department?: string | null;
      city?: string | null;
      countryId?: string | null;
      locationId?: string | null;
      entitlementId?: string | null;
      /** Format: double */
      antiFraudScore?: number;
      callRecordURL?: string | null;
      called?: boolean;
      verified?: boolean;
      payerPictureTimestamp?: string | null;
      payerPicture?: string | null;
      identificationPictureTimestamp?: string | null;
      identificationPicture?: string | null;
      identificationBackPicture?: string | null;
      identificationBackPictureTimestamp?: string | null;
      ipLookupId?: string | null;
      orderId?: string | null;
      accountingEntryId?: string | null;
      paymentGatewayId?: string | null;
      bankAccountId?: string | null;
      enrolmentId?: string | null;
      bankId?: string | null;
      paymentTokenId?: string | null;
      emisorWalletAccountId?: string | null;
      receiverWalletAccountId?: string | null;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;