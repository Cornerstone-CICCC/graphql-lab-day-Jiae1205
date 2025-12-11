"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrders = void 0;
const order_model_1 = require("../models/order.model");
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () { return order_model_1.Order.find(); });
exports.getOrders = getOrders;
const createOrder = (productId, customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new order_model_1.Order({ productId, customerId });
    return order.save();
});
exports.createOrder = createOrder;
const updateOrder = (id, data) => __awaiter(void 0, void 0, void 0, function* () { return order_model_1.Order.findByIdAndUpdate(id, data, { new: true }); });
exports.updateOrder = updateOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield order_model_1.Order.findByIdAndDelete(id);
    return !!res;
});
exports.deleteOrder = deleteOrder;
