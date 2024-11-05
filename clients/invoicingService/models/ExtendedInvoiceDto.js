"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedInvoiceDto = void 0;
var ExtendedInvoiceDto;
(function (ExtendedInvoiceDto) {
    let invoiceType;
    (function (invoiceType) {
        invoiceType[invoiceType["_0"] = 0] = "_0";
        invoiceType[invoiceType["_1"] = 1] = "_1";
    })(invoiceType = ExtendedInvoiceDto.invoiceType || (ExtendedInvoiceDto.invoiceType = {}));
    let documentType;
    (function (documentType) {
        documentType[documentType["_0"] = 0] = "_0";
        documentType[documentType["_1"] = 1] = "_1";
        documentType[documentType["_2"] = 2] = "_2";
    })(documentType = ExtendedInvoiceDto.documentType || (ExtendedInvoiceDto.documentType = {}));
    let invoiceStatus;
    (function (invoiceStatus) {
        invoiceStatus[invoiceStatus["_0"] = 0] = "_0";
        invoiceStatus[invoiceStatus["_1"] = 1] = "_1";
        invoiceStatus[invoiceStatus["_2"] = 2] = "_2";
        invoiceStatus[invoiceStatus["_3"] = 3] = "_3";
        invoiceStatus[invoiceStatus["_4"] = 4] = "_4";
    })(invoiceStatus = ExtendedInvoiceDto.invoiceStatus || (ExtendedInvoiceDto.invoiceStatus = {}));
})(ExtendedInvoiceDto = exports.ExtendedInvoiceDto || (exports.ExtendedInvoiceDto = {}));
