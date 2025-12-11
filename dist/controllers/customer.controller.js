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
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomerById = exports.getCustomers = void 0;
const customer_model_1 = require("../models/customer.model");
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () { return customer_model_1.Customer.find(); });
exports.getCustomers = getCustomers;
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () { return customer_model_1.Customer.findById(id); });
exports.getCustomerById = getCustomerById;
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = new customer_model_1.Customer(data);
    return customer.save();
});
exports.createCustomer = createCustomer;
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () { return customer_model_1.Customer.findByIdAndUpdate(id, data, { new: true }); });
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield customer_model_1.Customer.findByIdAndDelete(id);
    return !!res;
});
exports.deleteCustomer = deleteCustomer;
