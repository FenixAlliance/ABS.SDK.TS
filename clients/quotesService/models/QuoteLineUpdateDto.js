"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteLineUpdateDto = void 0;
var QuoteLineUpdateDto;
(function (QuoteLineUpdateDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = QuoteLineUpdateDto.taxCalculationMethod || (QuoteLineUpdateDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = QuoteLineUpdateDto.costCalculationMethod || (QuoteLineUpdateDto.costCalculationMethod = {}));
})(QuoteLineUpdateDto = exports.QuoteLineUpdateDto || (exports.QuoteLineUpdateDto = {}));
