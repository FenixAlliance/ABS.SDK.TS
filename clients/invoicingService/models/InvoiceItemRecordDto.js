"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemRecordDto = void 0;
var InvoiceItemRecordDto;
(function (InvoiceItemRecordDto) {
    let taxCalculationMethod;
    (function (taxCalculationMethod) {
        taxCalculationMethod[taxCalculationMethod["_0"] = 0] = "_0";
        taxCalculationMethod[taxCalculationMethod["_1"] = 1] = "_1";
    })(taxCalculationMethod = InvoiceItemRecordDto.taxCalculationMethod || (InvoiceItemRecordDto.taxCalculationMethod = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = InvoiceItemRecordDto.costCalculationMethod || (InvoiceItemRecordDto.costCalculationMethod = {}));
})(InvoiceItemRecordDto = exports.InvoiceItemRecordDto || (exports.InvoiceItemRecordDto = {}));
