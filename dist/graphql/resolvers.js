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
exports.resolvers = void 0;
const product_controller_1 = require("../controllers/product.controller");
const customer_controller_1 = require("../controllers/customer.controller");
const order_controller_1 = require("../controllers/order.controller");
const order_model_1 = require("../models/order.model");
const product_model_1 = require("../models/product.model");
const customer_model_1 = require("../models/customer.model");
// Finish the resolvers
exports.resolvers = {
    Query: {
        products: () => (0, product_controller_1.getProducts)(),
        customers: () => (0, customer_controller_1.getCustomers)(),
        orders: () => (0, order_controller_1.getOrders)(),
        getProductById: (_, { id }) => (0, product_controller_1.getProductById)(id),
        getCustomerById: (_, { id }) => (0, customer_controller_1.getCustomerById)(id),
    },
    Product: {
        customers: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const orders = yield order_model_1.Order.find({ productId: parent.id });
            const customerIds = orders.map((o) => o.customerId);
            return customer_model_1.Customer.find({ _id: { $in: customerIds } });
        })
    },
    Customer: {
        products: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const orders = yield order_model_1.Order.find({ customerId: parent.id });
            const productIds = orders.map((o) => o.productId);
            return product_model_1.Product.find({ _id: { $in: productIds } });
        })
    },
    Order: {
        product: (parent) => product_model_1.Product.findById(parent.productId),
        customer: (parent) => customer_model_1.Customer.findById(parent.customerId),
    },
    Mutation: {
        addProduct: (_, { productName, productPrice }) => (0, product_controller_1.createProduct)({ productName, productPrice }),
        editProduct: (_, { id, productName, productPrice }) => (0, product_controller_1.updateProduct)(id, { productName, productPrice }),
        removeProduct: (_, { id }) => (0, product_controller_1.deleteProduct)(id),
        addCustomer: (_, args) => (0, customer_controller_1.createCustomer)(args),
        editCustomer: (_, { id, firstName, lastName, email }) => (0, customer_controller_1.updateCustomer)(id, { firstName, lastName, email }),
        removeCustomer: (_, { id }) => (0, customer_controller_1.deleteCustomer)(id),
        addOrder: (_, { productId, customerId }) => (0, order_controller_1.createOrder)(productId, customerId),
        editOrder: (_, { id, productId, customerId }) => (0, order_controller_1.updateOrder)(id, { productId, customerId }),
        removeOrder: (_, { id }) => (0, order_controller_1.deleteOrder)(id)
    }
};
