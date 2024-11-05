"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceCreateDto = void 0;
var InvoiceCreateDto;
(function (InvoiceCreateDto) {
    let invoiceType;
    (function (invoiceType) {
        invoiceType[invoiceType["_0"] = 0] = "_0";
        invoiceType[invoiceType["_1"] = 1] = "_1";
    })(invoiceType = InvoiceCreateDto.invoiceType || (InvoiceCreateDto.invoiceType = {}));
    let documentType;
    (function (documentType) {
        documentType[documentType["_0"] = 0] = "_0";
        documentType[documentType["_1"] = 1] = "_1";
        documentType[documentType["_2"] = 2] = "_2";
    })(documentType = InvoiceCreateDto.documentType || (InvoiceCreateDto.documentType = {}));
    let invoiceStatus;
    (function (invoiceStatus) {
        invoiceStatus[invoiceStatus["_0"] = 0] = "_0";
        invoiceStatus[invoiceStatus["_1"] = 1] = "_1";
        invoiceStatus[invoiceStatus["_2"] = 2] = "_2";
        invoiceStatus[invoiceStatus["_3"] = 3] = "_3";
        invoiceStatus[invoiceStatus["_4"] = 4] = "_4";
    })(invoiceStatus = InvoiceCreateDto.invoiceStatus || (InvoiceCreateDto.invoiceStatus = {}));
})(InvoiceCreateDto = exports.InvoiceCreateDto || (exports.InvoiceCreateDto = {}));
