"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineDto = void 0;
var OrderLineDto;
(function (OrderLineDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = OrderLineDto.taxCalculationMethod || (OrderLineDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = OrderLineDto.costCalculationMethod || (OrderLineDto.costCalculationMethod = {}));
})(OrderLineDto = exports.OrderLineDto || (exports.OrderLineDto = {}));
