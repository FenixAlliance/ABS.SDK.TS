/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AzureAppInsightIntegrationOptions = {
    enable?: boolean;
    enableDiagnosticsTelemetryModule?: boolean;
    enableAuthenticationTrackingJavaScript?: boolean;
    enableRequestTrackingTelemetryModule?: boolean;
    injectResponseHeaders?: boolean;
    trackExceptions?: boolean;
    /**
     * @deprecated
     */
    enableW3CDistributedTracing?: boolean;
    addAutoCollectedMetricExtractor?: boolean;
    enableHeartbeat?: boolean;
    enableDebugLogger?: boolean;
    endpointAddress?: string | null;
    developerMode?: boolean | null;
    applicationVersion?: string | null;
    connectionString?: string | null;
    instrumentationKey?: string | null;
    enableAdaptiveSampling?: boolean;
    enableEventCounterCollectionModule?: boolean;
    enableDependencyTrackingTelemetryModule?: boolean;
    enableAzureInstanceMetadataTelemetryModule?: boolean;
    enableAppServicesHeartbeatTelemetryModule?: boolean;
    enablePerformanceCounterCollectionModule?: boolean;
    enableQuickPulseMetricStream?: boolean;
    enableLegacyCorrelationHeadersInjection?: boolean;
    enableActiveTelemetryConfigurationSetup?: boolean;
};

