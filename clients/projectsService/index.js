"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTypesService = exports.TaskCategoriesService = exports.ProjectsService = exports.ProjectTimeLogDto = exports.OpenAPI = exports.CancelError = exports.CancelablePromise = exports.ApiError = void 0;
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
var ProjectTimeLogDto_1 = require("./models/ProjectTimeLogDto");
Object.defineProperty(exports, "ProjectTimeLogDto", { enumerable: true, get: function () { return ProjectTimeLogDto_1.ProjectTimeLogDto; } });
var ProjectsService_1 = require("./services/ProjectsService");
Object.defineProperty(exports, "ProjectsService", { enumerable: true, get: function () { return ProjectsService_1.ProjectsService; } });
var TaskCategoriesService_1 = require("./services/TaskCategoriesService");
Object.defineProperty(exports, "TaskCategoriesService", { enumerable: true, get: function () { return TaskCategoriesService_1.TaskCategoriesService; } });
var TaskTypesService_1 = require("./services/TaskTypesService");
Object.defineProperty(exports, "TaskTypesService", { enumerable: true, get: function () { return TaskTypesService_1.TaskTypesService; } });
