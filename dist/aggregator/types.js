"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmxAdapterOrderReceiver = exports.AggregatorOrderCategory = exports.AggregatorProjectId = void 0;
var AggregatorProjectId;
(function (AggregatorProjectId) {
    AggregatorProjectId[AggregatorProjectId["Invalid"] = 0] = "Invalid";
    AggregatorProjectId[AggregatorProjectId["Gmx"] = 1] = "Gmx";
})(AggregatorProjectId || (exports.AggregatorProjectId = AggregatorProjectId = {}));
var AggregatorOrderCategory;
(function (AggregatorOrderCategory) {
    AggregatorOrderCategory[AggregatorOrderCategory["None"] = 0] = "None";
    AggregatorOrderCategory[AggregatorOrderCategory["Open"] = 1] = "Open";
    AggregatorOrderCategory[AggregatorOrderCategory["Close"] = 2] = "Close";
    AggregatorOrderCategory[AggregatorOrderCategory["Liquidate"] = 3] = "Liquidate";
})(AggregatorOrderCategory || (exports.AggregatorOrderCategory = AggregatorOrderCategory = {}));
//////////////////////////////////////////////////////////////
// GMX Core
var GmxAdapterOrderReceiver;
(function (GmxAdapterOrderReceiver) {
    GmxAdapterOrderReceiver[GmxAdapterOrderReceiver["MarketIncreasing"] = 0] = "MarketIncreasing";
    GmxAdapterOrderReceiver[GmxAdapterOrderReceiver["MarketDecreasing"] = 1] = "MarketDecreasing";
    GmxAdapterOrderReceiver[GmxAdapterOrderReceiver["LimitIncreasing"] = 2] = "LimitIncreasing";
    GmxAdapterOrderReceiver[GmxAdapterOrderReceiver["LimitDecreasing"] = 3] = "LimitDecreasing";
})(GmxAdapterOrderReceiver || (exports.GmxAdapterOrderReceiver = GmxAdapterOrderReceiver = {}));
//# sourceMappingURL=types.js.map