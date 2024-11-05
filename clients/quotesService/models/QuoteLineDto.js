"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteLineDto = void 0;
var QuoteLineDto;
(function (QuoteLineDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = QuoteLineDto.taxCalculationMethod || (QuoteLineDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = QuoteLineDto.costCalculationMethod || (QuoteLineDto.costCalculationMethod = {}));
})(QuoteLineDto = exports.QuoteLineDto || (exports.QuoteLineDto = {}));
