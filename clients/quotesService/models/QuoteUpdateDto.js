"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteUpdateDto = void 0;
var QuoteUpdateDto;
(function (QuoteUpdateDto) {
    let quoteStatus;
    (function (quoteStatus) {
        quoteStatus[quoteStatus["_0"] = 0] = "_0";
        quoteStatus[quoteStatus["_1"] = 1] = "_1";
        quoteStatus[quoteStatus["_2"] = 2] = "_2";
        quoteStatus[quoteStatus["_3"] = 3] = "_3";
        quoteStatus[quoteStatus["_4"] = 4] = "_4";
    })(quoteStatus = QuoteUpdateDto.quoteStatus || (QuoteUpdateDto.quoteStatus = {}));
    let freightTerms;
    (function (freightTerms) {
        freightTerms[freightTerms["_0"] = 0] = "_0";
        freightTerms[freightTerms["_1"] = 1] = "_1";
    })(freightTerms = QuoteUpdateDto.freightTerms || (QuoteUpdateDto.freightTerms = {}));
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = QuoteUpdateDto.costCalculationMethod || (QuoteUpdateDto.costCalculationMethod = {}));
})(QuoteUpdateDto = exports.QuoteUpdateDto || (exports.QuoteUpdateDto = {}));
