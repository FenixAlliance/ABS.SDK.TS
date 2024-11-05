"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteDto = void 0;
var QuoteDto;
(function (QuoteDto) {
    let quoteStatus;
    (function (quoteStatus) {
        quoteStatus[quoteStatus["_0"] = 0] = "_0";
        quoteStatus[quoteStatus["_1"] = 1] = "_1";
        quoteStatus[quoteStatus["_2"] = 2] = "_2";
        quoteStatus[quoteStatus["_3"] = 3] = "_3";
        quoteStatus[quoteStatus["_4"] = 4] = "_4";
    })(quoteStatus = QuoteDto.quoteStatus || (QuoteDto.quoteStatus = {}));
    let freightTerms;
    (function (freightTerms) {
        freightTerms[freightTerms["_0"] = 0] = "_0";
        freightTerms[freightTerms["_1"] = 1] = "_1";
    })(freightTerms = QuoteDto.freightTerms || (QuoteDto.freightTerms = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = QuoteDto.costCalculationMethod || (QuoteDto.costCalculationMethod = {}));
})(QuoteDto = exports.QuoteDto || (exports.QuoteDto = {}));
