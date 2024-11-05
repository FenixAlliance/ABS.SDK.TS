"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteLineCreateDto = void 0;
var QuoteLineCreateDto;
(function (QuoteLineCreateDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = QuoteLineCreateDto.taxCalculationMethod || (QuoteLineCreateDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = QuoteLineCreateDto.costCalculationMethod || (QuoteLineCreateDto.costCalculationMethod = {}));
})(QuoteLineCreateDto = exports.QuoteLineCreateDto || (exports.QuoteLineCreateDto = {}));
