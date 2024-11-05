"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLineDto = void 0;
var InvoiceLineDto;
(function (InvoiceLineDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = InvoiceLineDto.taxCalculationMethod || (InvoiceLineDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = InvoiceLineDto.costCalculationMethod || (InvoiceLineDto.costCalculationMethod = {}));
})(InvoiceLineDto = exports.InvoiceLineDto || (exports.InvoiceLineDto = {}));
