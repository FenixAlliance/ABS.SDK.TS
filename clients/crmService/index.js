"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncService = exports.ContactsService = exports.SocialProfileDto = exports.SimpleContactDto = exports.Operation = exports.ExtendedContactDto = exports.ContactUpdateDto = exports.ContactDto = exports.ContactCreateDto = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
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
var ContactCreateDto_1 = require("./models/ContactCreateDto");
Object.defineProperty(exports, "ContactCreateDto", { enumerable: true, get: function () { return ContactCreateDto_1.ContactCreateDto; } });
var ContactDto_1 = require("./models/ContactDto");
Object.defineProperty(exports, "ContactDto", { enumerable: true, get: function () { return ContactDto_1.ContactDto; } });
var ContactUpdateDto_1 = require("./models/ContactUpdateDto");
Object.defineProperty(exports, "ContactUpdateDto", { enumerable: true, get: function () { return ContactUpdateDto_1.ContactUpdateDto; } });
var ExtendedContactDto_1 = require("./models/ExtendedContactDto");
Object.defineProperty(exports, "ExtendedContactDto", { enumerable: true, get: function () { return ExtendedContactDto_1.ExtendedContactDto; } });
var Operation_1 = require("./models/Operation");
Object.defineProperty(exports, "Operation", { enumerable: true, get: function () { return Operation_1.Operation; } });
var SimpleContactDto_1 = require("./models/SimpleContactDto");
Object.defineProperty(exports, "SimpleContactDto", { enumerable: true, get: function () { return SimpleContactDto_1.SimpleContactDto; } });
var SocialProfileDto_1 = require("./models/SocialProfileDto");
Object.defineProperty(exports, "SocialProfileDto", { enumerable: true, get: function () { return SocialProfileDto_1.SocialProfileDto; } });
var ContactsService_1 = require("./services/ContactsService");
Object.defineProperty(exports, "ContactsService", { enumerable: true, get: function () { return ContactsService_1.ContactsService; } });
var SyncService_1 = require("./services/SyncService");
Object.defineProperty(exports, "SyncService", { enumerable: true, get: function () { return SyncService_1.SyncService; } });
