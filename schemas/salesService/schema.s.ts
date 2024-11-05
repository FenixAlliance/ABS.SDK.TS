/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v2/SalesService/Margins/{marginId}/Details": {
    get: {
      parameters: {
        query?: {
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
        path: {
          marginId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: never;
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
