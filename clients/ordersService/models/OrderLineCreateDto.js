"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineCreateDto = void 0;
var OrderLineCreateDto;
(function (OrderLineCreateDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = OrderLineCreateDto.taxCalculationMethod || (OrderLineCreateDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = OrderLineCreateDto.costCalculationMethod || (OrderLineCreateDto.costCalculationMethod = {}));
})(OrderLineCreateDto = exports.OrderLineCreateDto || (exports.OrderLineCreateDto = {}));
