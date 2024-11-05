"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDto = void 0;
var OrderDto;
(function (OrderDto) {
    let costCalculationMethod;
    (function (costCalculationMethod) {
        costCalculationMethod[costCalculationMethod["_0"] = 0] = "_0";
        costCalculationMethod[costCalculationMethod["_1"] = 1] = "_1";
    })(costCalculationMethod = OrderDto.costCalculationMethod || (OrderDto.costCalculationMethod = {}));
    let freightTerms;
    (function (freightTerms) {
        freightTerms[freightTerms["_0"] = 0] = "_0";
        freightTerms[freightTerms["_1"] = 1] = "_1";
    })(freightTerms = OrderDto.freightTerms || (OrderDto.freightTerms = {}));
    let orderStatus;
    (function (orderStatus) {
        orderStatus[orderStatus["_1"] = 1] = "_1";
        orderStatus[orderStatus["_2"] = 2] = "_2";
        orderStatus[orderStatus["_3"] = 3] = "_3";
        orderStatus[orderStatus["_4"] = 4] = "_4";
        orderStatus[orderStatus["_5"] = 5] = "_5";
        orderStatus[orderStatus["_6"] = 6] = "_6";
        orderStatus[orderStatus["_7"] = 7] = "_7";
        orderStatus[orderStatus["_8"] = 8] = "_8";
        orderStatus[orderStatus["_9"] = 9] = "_9";
        orderStatus[orderStatus["_10"] = 10] = "_10";
    })(orderStatus = OrderDto.orderStatus || (OrderDto.orderStatus = {}));
})(OrderDto = exports.OrderDto || (exports.OrderDto = {}));
