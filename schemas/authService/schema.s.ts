/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v2/Auth/Checker/IsAuthenticated": {
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
            "application/json": boolean;
            "application/xml": boolean;
          };
        };
      };
    };
  };
  "/version": {
    get: {
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
      };
    };
  };
  "/health": {
    get: {
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
      };
    };
  };
  "/hello": {
    get: {
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
      };
    };
  };
  "/register": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["RegisterRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/problem+json": components["schemas"]["HttpValidationProblemDetails"];
          };
        };
      };
    };
  };
  "/login": {
    post: {
      parameters: {
        query?: {
          useCookies?: boolean;
          useSessionCookies?: boolean;
        };
      };
      requestBody?: {
        content: {
          "application/json": components["schemas"]["LoginRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["AccessTokenResponse"];
          };
        };
      };
    };
  };
  "/refresh": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["RefreshRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["AccessTokenResponse"];
          };
        };
      };
    };
  };
  "/confirmEmail": {
    get: operations["MapIdentityApi-/confirmEmail"];
  };
  "/resendConfirmationEmail": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["ResendConfirmationEmailRequest"];
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
  "/forgotPassword": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["ForgotPasswordRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/problem+json": components["schemas"]["HttpValidationProblemDetails"];
          };
        };
      };
    };
  };
  "/resetPassword": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["ResetPasswordRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/problem+json": components["schemas"]["HttpValidationProblemDetails"];
          };
        };
      };
    };
  };
  "/manage/2fa": {
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["TwoFactorRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["TwoFactorResponse"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/problem+json": components["schemas"]["HttpValidationProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: never;
        };
      };
    };
  };
  "/manage/info": {
    get: {
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["InfoResponse"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/problem+json": components["schemas"]["HttpValidationProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: never;
        };
      };
    };
    post: {
      requestBody?: {
        content: {
          "application/json": components["schemas"]["InfoRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["InfoResponse"];
          };
        };
        /** @description Bad Request */
        400: {
          content: {
            "application/problem+json": components["schemas"]["HttpValidationProblemDetails"];
          };
        };
        /** @description Not Found */
        404: {
          content: never;
        };
      };
    };
  };
  "/Account/PerformExternalLogin": {
    post: {
      requestBody?: {
        content: {
          "multipart/form-data": {
            provider: string;
            returnUrl: string;
          };
          "application/x-www-form-urlencoded": {
            provider: string;
            returnUrl: string;
          };
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
  "/Account/Logout": {
    post: {
      requestBody?: {
        content: {
          "multipart/form-data": {
            returnUrl: string;
          };
          "application/x-www-form-urlencoded": {
            returnUrl: string;
          };
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
  "/Account/Manage/LinkExternalLogin": {
    post: {
      requestBody?: {
        content: {
          "multipart/form-data": {
            provider: string;
          };
          "application/x-www-form-urlencoded": {
            provider: string;
          };
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
  "/Account/Manage/DownloadPersonalData": {
    post: {
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
      };
    };
  };
  "/api/v2/OAuth/WhoAmI": {
    get: {
      parameters: {
        query?: {
          tenantId?: string;
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
            "application/json": components["schemas"]["ApiAuthorizationResultEnvelope"];
            "application/xml": components["schemas"]["ApiAuthorizationResultEnvelope"];
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
  "/api/v2/OAuth/Token": {
    post: {
      parameters: {
        query?: {
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
      };
      requestBody?: {
        content: {
          "application/json": components["schemas"]["OAuthTokenRequest"];
          "application/xml": components["schemas"]["OAuthTokenRequest"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["JsonWebTokenEnvelope"];
            "application/xml": components["schemas"]["JsonWebTokenEnvelope"];
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
  "/api/v2/OAuth/Permissions": {
    get: {
      parameters: {
        query: {
          tenantId: string;
          userId?: string;
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
            "application/json": components["schemas"]["StringListEnvelope"];
            "application/xml": components["schemas"]["StringListEnvelope"];
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
  "/api/v2/OAuth/SignIn": {
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
            "application/json": components["schemas"]["AccountHolderCreateDtoEnvelope"];
            "application/xml": components["schemas"]["AccountHolderCreateDtoEnvelope"];
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
      };
    };
    post: {
      parameters: {
        query?: {
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
      };
      requestBody?: {
        content: {
          "application/json": components["schemas"]["SigninModel"];
          "application/xml": components["schemas"]["SigninModel"];
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["JsonWebTokenEnvelope"];
            "application/xml": components["schemas"]["JsonWebTokenEnvelope"];
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
      };
    };
  };
  "/api/v2/OAuth/{applicationId}/Keys": {
    get: {
      parameters: {
        query?: {
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
        path: {
          applicationId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["JsonWebKeySetEnvelope"];
            "application/xml": components["schemas"]["JsonWebKeySetEnvelope"];
          };
        };
      };
    };
  };
  "/api/v2/OAuth/{tenantId}/{applicationId}/.Well-Known/OpenId-Configuration": {
    get: {
      parameters: {
        query?: {
          "api-version"?: string;
        };
        header?: {
          "x-api-version"?: string;
        };
        path: {
          tenantId: string;
          applicationId: string;
        };
      };
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["OpenIdConfigurationEnvelope"];
            "application/xml": components["schemas"]["OpenIdConfigurationEnvelope"];
          };
        };
      };
    };
  };
  "/api/v2/IdentityService/Resource/message": {
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
          content: never;
        };
      };
    };
  };
  "/connect/userinfo": {
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
          content: never;
        };
      };
    };
    post: {
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
          content: never;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AccessTokenResponse: {
      tokenType?: string | null;
      accessToken: string | null;
      /** Format: int64 */
      expiresIn: number;
      refreshToken: string | null;
    };
    AccountHolderCreateDto: {
      /** Format: uuid */
      id?: string;
      /** Format: date-time */
      timestamp?: string;
      qualifiedName?: string | null;
      /** Format: date-time */
      birthday?: string;
      firstName?: string | null;
      lastName?: string | null;
      publicName?: string | null;
      idProvider?: string | null;
      /**
       * Format: int32
       * @enum {integer}
       */
      gender?: 0 | 1 | 2;
      email?: string | null;
      about?: string | null;
      status?: string | null;
      jobTitle?: string | null;
      gitHubUrl?: string | null;
      websiteUrl?: string | null;
      twitterUrl?: string | null;
      facebookUrl?: string | null;
      youTubeUrl?: string | null;
      linkedInUrl?: string | null;
      instagramUrl?: string | null;
      timezoneId?: string | null;
      languageId?: string | null;
      currencyId?: string | null;
      countryId?: string | null;
      stateId?: string | null;
      cityId?: string | null;
      password?: string | null;
    };
    AccountHolderCreateDtoEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["AccountHolderCreateDto"];
    };
    ApiAuthorizationResult: {
      userId?: components["schemas"]["UserId"];
      tenantId?: components["schemas"]["TenantId"];
      enrollmentId?: components["schemas"]["EnrollmentId"];
      correlationId?: string | null;
      scopes?: string[] | null;
      error?: string | null;
      applicationId?: string | null;
    };
    ApiAuthorizationResultEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["ApiAuthorizationResult"];
    };
    EnrollmentId: Record<string, never>;
    ErrorEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
    };
    ForgotPasswordRequest: {
      email: string | null;
    };
    HttpValidationProblemDetails: {
      type?: string | null;
      title?: string | null;
      /** Format: int32 */
      status?: number | null;
      detail?: string | null;
      instance?: string | null;
      errors?: {
        [key: string]: string[];
      } | null;
      [key: string]: unknown;
    };
    InfoRequest: {
      newEmail?: string | null;
      newPassword?: string | null;
      oldPassword?: string | null;
    };
    InfoResponse: {
      email: string | null;
      isEmailConfirmed: boolean;
    };
    JsonWebKey: {
      kid?: string | null;
      /** Format: int64 */
      nbf?: number;
      use?: string | null;
      kty?: string | null;
      e?: string | null;
      n?: string | null;
    };
    JsonWebKeySet: {
      keys?: components["schemas"]["JsonWebKey"][] | null;
    };
    JsonWebKeySetEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["JsonWebKeySet"];
    };
    JsonWebToken: {
      header?: components["schemas"]["JsonWebTokenHeader"];
      payload?: components["schemas"]["JsonWebTokenPayload"];
      signature?: string | null;
      tokenType?: string | null;
      /** Format: int64 */
      expiresIn?: number;
      accessToken?: string | null;
    };
    JsonWebTokenEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["JsonWebToken"];
    };
    JsonWebTokenHeader: {
      alg?: string | null;
      jku?: string | null;
      kid?: string | null;
      typ?: string | null;
    };
    JsonWebTokenPayload: {
      aud?: string | null;
      cid?: string | null;
      iss?: string | null;
      aid?: string | null;
      sub?: string | null;
      act?: string | null;
      /** Format: int64 */
      iat?: number;
      /** Format: int64 */
      nbf?: number;
      /** Format: int64 */
      exp?: number;
      scopes?: string[] | null;
    };
    LoginRequest: {
      email: string | null;
      password: string | null;
      twoFactorCode?: string | null;
      twoFactorRecoveryCode?: string | null;
    };
    OAuthTokenRequest: {
      client_id?: string | null;
      client_secret?: string | null;
      grant_type?: string | null;
      requested_scopes?: string | null;
      requested_enrollment?: string | null;
    };
    OpenIdConfiguration: {
      issuer?: string | null;
      authorizationEndpoint?: string | null;
      tokenEndpoint?: string | null;
      endSessionEndpoint?: string | null;
      jwksUri?: string | null;
      responseModesSupported?: string[] | null;
      responseTypesSupported?: string[] | null;
      scopesSupported?: string[] | null;
      subjectTypesSupported?: string[] | null;
      idTokenSigningAlgValuesSupported?: string[] | null;
      tokenEndpointAuthMethodsSupported?: string[] | null;
      claimsSupported?: string[] | null;
    };
    OpenIdConfigurationEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: components["schemas"]["OpenIdConfiguration"];
    };
    RefreshRequest: {
      refreshToken: string | null;
    };
    RegisterRequest: {
      email: string | null;
      password: string | null;
    };
    ResendConfirmationEmailRequest: {
      email: string | null;
    };
    ResetPasswordRequest: {
      email: string | null;
      resetCode: string | null;
      newPassword: string | null;
    };
    SigninModel: {
      email?: string | null;
      password?: string | null;
    };
    StringListEnvelope: {
      isSuccess?: boolean;
      errorMessage?: string | null;
      correlationId?: string | null;
      /** Format: date-time */
      timestamp?: string;
      activityId?: string | null;
      result?: string[] | null;
    };
    TenantId: Record<string, never>;
    TwoFactorRequest: {
      enable?: boolean | null;
      twoFactorCode?: string | null;
      resetSharedKey?: boolean;
      resetRecoveryCodes?: boolean;
      forgetMachine?: boolean;
    };
    TwoFactorResponse: {
      sharedKey: string | null;
      /** Format: int32 */
      recoveryCodesLeft: number;
      recoveryCodes?: string[] | null;
      isTwoFactorEnabled: boolean;
      isMachineRemembered: boolean;
    };
    UserId: Record<string, never>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  "MapIdentityApi-/confirmEmail": {
    parameters: {
      query?: {
        userId?: string;
        code?: string;
        changedEmail?: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: never;
      };
    };
  };
}
