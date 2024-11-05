"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedQuoteDto = void 0;
var ExtendedQuoteDto;
(function (ExtendedQuoteDto) {
    let quoteStatus;
    (function (quoteStatus) {
        quoteStatus[quoteStatus["_0"] = 0] = "_0";
        quoteStatus[quoteStatus["_1"] = 1] = "_1";
        quoteStatus[quoteStatus["_2"] = 2] = "_2";
        quoteStatus[quoteStatus["_3"] = 3] = "_3";
        quoteStatus[quoteStatus["_4"] = 4] = "_4";
    })(quoteStatus = ExtendedQuoteDto.quoteStatus || (ExtendedQuoteDto.quoteStatus = {}));
    let freightTerms;
    (function (freightTerms) {
        freightTerms[freightTerms["_0"] = 0] = "_0";
        freightTerms[freightTerms["_1"] = 1] = "_1";
    })(freightTerms = ExtendedQuoteDto.freightTerms || (ExtendedQuoteDto.freightTerms = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = ExtendedQuoteDto.costCalculationMethod || (ExtendedQuoteDto.costCalculationMethod = {}));
})(ExtendedQuoteDto = exports.ExtendedQuoteDto || (exports.ExtendedQuoteDto = {}));
