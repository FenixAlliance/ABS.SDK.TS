"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeLogApprovalsService = exports.ProjectTimeLogsService = exports.ProjectTimeLogUpdateDto = exports.ProjectTimeLogDto = exports.ProjectTimeLogCreateDto = exports.ProjectHoursApprovalStatusUpdateDto = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
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
var ProjectHoursApprovalStatusUpdateDto_1 = require("./models/ProjectHoursApprovalStatusUpdateDto");
Object.defineProperty(exports, "ProjectHoursApprovalStatusUpdateDto", { enumerable: true, get: function () { return ProjectHoursApprovalStatusUpdateDto_1.ProjectHoursApprovalStatusUpdateDto; } });
var ProjectTimeLogCreateDto_1 = require("./models/ProjectTimeLogCreateDto");
Object.defineProperty(exports, "ProjectTimeLogCreateDto", { enumerable: true, get: function () { return ProjectTimeLogCreateDto_1.ProjectTimeLogCreateDto; } });
var ProjectTimeLogDto_1 = require("./models/ProjectTimeLogDto");
Object.defineProperty(exports, "ProjectTimeLogDto", { enumerable: true, get: function () { return ProjectTimeLogDto_1.ProjectTimeLogDto; } });
var ProjectTimeLogUpdateDto_1 = require("./models/ProjectTimeLogUpdateDto");
Object.defineProperty(exports, "ProjectTimeLogUpdateDto", { enumerable: true, get: function () { return ProjectTimeLogUpdateDto_1.ProjectTimeLogUpdateDto; } });
var ProjectTimeLogsService_1 = require("./services/ProjectTimeLogsService");
Object.defineProperty(exports, "ProjectTimeLogsService", { enumerable: true, get: function () { return ProjectTimeLogsService_1.ProjectTimeLogsService; } });
var TimeLogApprovalsService_1 = require("./services/TimeLogApprovalsService");
Object.defineProperty(exports, "TimeLogApprovalsService", { enumerable: true, get: function () { return TimeLogApprovalsService_1.TimeLogApprovalsService; } });
