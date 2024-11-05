"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = exports.ContactsService = exports.TenantsService = exports.CartsService = exports.UserService = void 0;
var holderService_1 = require("../clients/holderService");
Object.defineProperty(exports, "UserService", { enumerable: true, get: function () { return holderService_1.UserService; } });
var cartService_1 = require("../clients/cartService");
Object.defineProperty(exports, "CartsService", { enumerable: true, get: function () { return cartService_1.CartsService; } });
var tenantService_1 = require("../clients/tenantService");
Object.defineProperty(exports, "TenantsService", { enumerable: true, get: function () { return tenantService_1.TenantsService; } });
var crmService_1 = require("../clients/crmService");
Object.defineProperty(exports, "ContactsService", { enumerable: true, get: function () { return crmService_1.ContactsService; } });
var ordersService_1 = require("../clients/ordersService");
Object.defineProperty(exports, "OrdersService", { enumerable: true, get: function () { return ordersService_1.OrdersService; } });