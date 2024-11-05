"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricesService = exports.PriceListsService = exports.DiscountListsService = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
var ApiError_1 = require("./core/ApiError");
Object.defineProperty(exports, "ApiError", { enumerable: true, get: function () { return ApiError_1.ApiError; } });
var CancelablePromise_1 = require("./core/CancelablePromise");
Object.defineProperty(exports, "CancelablePromise", { enumerable: true, get: function () { return CancelablePromise_1.CancelablePromise; } });
Object.defineProperty(exports, "CancelError", { enumerable: true, get: function () { return CancelablePromise_1.CancelError; } });
var OpenAPI_1 = require("./core/OpenAPI");
Object.defineProperty(exports, "OpenAPI", { enumerable: true, get: function () { return OpenAPI_1.OpenAPI; } });
var DiscountListsService_1 = require("./services/DiscountListsService");
Object.defineProperty(exports, "DiscountListsService", { enumerable: true, get: function () { return DiscountListsService_1.DiscountListsService; } });
var PriceListsService_1 = require("./services/PriceListsService");
Object.defineProperty(exports, "PriceListsService", { enumerable: true, get: function () { return PriceListsService_1.PriceListsService; } });
var PricesService_1 = require("./services/PricesService");
Object.defineProperty(exports, "PricesService", { enumerable: true, get: function () { return PricesService_1.PricesService; } });
