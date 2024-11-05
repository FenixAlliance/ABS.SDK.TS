/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EPaycoIntegrationOptions } from './EPaycoIntegrationOptions';
import type { FacebookIntegrationOptions } from './FacebookIntegrationOptions';
import type { FenixAllianceIntegrationsOptions } from './FenixAllianceIntegrationsOptions';
import type { FreeGeoIPIntegrationOptions } from './FreeGeoIPIntegrationOptions';
import type { GoogleIntegrationOptions } from './GoogleIntegrationOptions';
import type { MicrosoftIntegrationsOptions } from './MicrosoftIntegrationsOptions';
import type { OpenExchangeRatesIntegrationsOptions } from './OpenExchangeRatesIntegrationsOptions';
import type { SendgridIntegrationsOptions } from './SendgridIntegrationsOptions';
export type IntegrationsOptions = {
    enable?: boolean;
    ePayco?: EPaycoIntegrationOptions;
    google?: GoogleIntegrationOptions;
    facebook?: FacebookIntegrationOptions;
    sendgrid?: SendgridIntegrationsOptions;
    freeGeoIP?: FreeGeoIPIntegrationOptions;
    microsoft?: MicrosoftIntegrationsOptions;
    fenixAlliance?: FenixAllianceIntegrationsOptions;
    openExchangeRates?: OpenExchangeRatesIntegrationsOptions;
};

