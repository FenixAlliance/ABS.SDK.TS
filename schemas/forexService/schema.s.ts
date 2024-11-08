/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v2/ForexService/Exchange/Latest": {
    get: {
      parameters: {
        query: {
          amount: number;
          sourceCurrencyId: string;
          targetCurrencyId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["MoneyEnvelope"];
            "application/xml": components["schemas"]["MoneyEnvelope"];
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
  "/api/v2/ForexService/Exchange/History": {
    get: {
      parameters: {
        query: {
          amount: number;
          sourceCurrencyId: string;
          targetCurrencyId: string;
          date: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["MoneyEnvelope"];
            "application/xml": components["schemas"]["MoneyEnvelope"];
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
  "/api/v3/ForexService/Exchange/Latest": {
    get: {
      parameters: {
        query: {
          amount: number;
          sourceCurrencyId: string;
          targetCurrencyId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["ExchangeRateEnvelope"];
            "application/xml": components["schemas"]["ExchangeRateEnvelope"];
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
  "/api/v3/ForexService/Exchange/History": {
    get: {
      parameters: {
        query: {
          amount: number;
          sourceCurrencyId: string;
          targetCurrencyId: string;
          date: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["ExchangeRateEnvelope"];
            "application/xml": components["schemas"]["ExchangeRateEnvelope"];
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
  "/api/v2/ForexService/Rates/Latest": {
    get: {
      parameters: {
        query?: {
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["ForexRatesDtoEnvelope"];
            "application/xml": components["schemas"]["ForexRatesDtoEnvelope"];
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
  "/api/v2/ForexService/Rates/Latest/{currencyId}": {
    get: {
      parameters: {
        query?: {
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
        path: {
          currencyId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["ExchangeRateEnvelope"];
            "application/xml": components["schemas"]["ExchangeRateEnvelope"];
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
  "/api/v2/ForexService/Rates/History": {
    get: {
      parameters: {
        query?: {
          date?: string;
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["ForexRatesDtoEnvelope"];
            "application/xml": components["schemas"]["ForexRatesDtoEnvelope"];
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
  "/api/v2/ForexService/Rates/History/{currencyId}": {
    get: {
      parameters: {
        query?: {
          date?: string;
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
        path: {
          currencyId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["ExchangeRateEnvelope"];
            "application/xml": components["schemas"]["ExchangeRateEnvelope"];
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
    Currency: {
      code?: string | null;
      country?: string | null;
    };
    ErrorEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
    };
    ExchangeRate: {
      source?: components["schemas"]["Money"];
      target?: components["schemas"]["Money"];
      rate?: components["schemas"]["Money"];
    };
    ExchangeRateEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["ExchangeRate"];
    };
    ForexRatesDto: {
      success?: boolean;
      date?: string | null;
      base?: string | null;
      /** Format: int64 */
      timestamp?: number;
      /** Format: date-time */
      requestTimestamp?: string;
      rates?: {
        [key: string]: number;
      } | null;
    };
    ForexRatesDtoEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["ForexRatesDto"];
    };
    Money: {
      /** Format: double */
      amount?: number;
      currency?: components["schemas"]["Currency"];
    };
    MoneyEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["Money"];
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
