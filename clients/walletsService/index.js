"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletsService = exports.UserDto = exports.PaymentDto = exports.OrderDto = exports.InvoiceDto = exports.ExtendedOrderDto = exports.ContactDto = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
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
var ContactDto_1 = require("./models/ContactDto");
Object.defineProperty(exports, "ContactDto", { enumerable: true, get: function () { return ContactDto_1.ContactDto; } });
var ExtendedOrderDto_1 = require("./models/ExtendedOrderDto");
Object.defineProperty(exports, "ExtendedOrderDto", { enumerable: true, get: function () { return ExtendedOrderDto_1.ExtendedOrderDto; } });
var InvoiceDto_1 = require("./models/InvoiceDto");
Object.defineProperty(exports, "InvoiceDto", { enumerable: true, get: function () { return InvoiceDto_1.InvoiceDto; } });
var OrderDto_1 = require("./models/OrderDto");
Object.defineProperty(exports, "OrderDto", { enumerable: true, get: function () { return OrderDto_1.OrderDto; } });
var PaymentDto_1 = require("./models/PaymentDto");
Object.defineProperty(exports, "PaymentDto", { enumerable: true, get: function () { return PaymentDto_1.PaymentDto; } });
var UserDto_1 = require("./models/UserDto");
Object.defineProperty(exports, "UserDto", { enumerable: true, get: function () { return UserDto_1.UserDto; } });
var WalletsService_1 = require("./services/WalletsService");
Object.defineProperty(exports, "WalletsService", { enumerable: true, get: function () { return WalletsService_1.WalletsService; } });
