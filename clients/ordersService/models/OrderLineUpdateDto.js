"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineUpdateDto = void 0;
var OrderLineUpdateDto;
(function (OrderLineUpdateDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = OrderLineUpdateDto.taxCalculationMethod || (OrderLineUpdateDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = OrderLineUpdateDto.costCalculationMethod || (OrderLineUpdateDto.costCalculationMethod = {}));
})(OrderLineUpdateDto = exports.OrderLineUpdateDto || (exports.OrderLineUpdateDto = {}));
