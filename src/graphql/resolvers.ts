import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller";

import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customer.controller";

import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder
} from "../controllers/order.controller";

import { Order } from "../models/order.model";
import { Product } from "../models/product.model";
import { Customer } from "../models/customer.model";

// Finish the resolvers
export const resolvers = {
  Query: {
    products: () => getProducts(),
    customers: () => getCustomers(),
    orders: () => getOrders(),
    getProductById: (_: any, { id }: { id: string }) => getProductById(id),
    getCustomerById: (_: any, { id }: { id: string }) => getCustomerById(id),
  },
  Product: {
    customers: async (parent: any) => {
      const orders = await Order.find({ productId: parent.id })
      const customerIds = orders.map((o) => o.customerId)
      return Customer.find({ _id: { $in: customerIds} })
    }
  },
  Customer: {
    products: async (parent: any) => {
      const orders = await Order.find({ customerId: parent.id })
      const productIds = orders.map((o) => o.productId)
      return Product.find({ _id: { $in: productIds } })
    }
  },
  Order: {
    product: (parent: any) => Product.findById(parent.productId),
    customer: (parent: any) => Customer.findById(parent.customerId),
  },
  Mutation: {
    addProduct: (_: any, { productName, productPrice }: any) => createProduct({ productName, productPrice }),
    editProduct: (_: any, { id, productName, productPrice }: any) => updateProduct(id, { productName, productPrice }),
    removeProduct: (_: any, { id }: { id: string }) => deleteProduct(id),

    addCustomer: (_: any, args: any) => createCustomer(args),
    editCustomer: (_: any, { id, firstName, lastName, email }: any) => updateCustomer(id, { firstName, lastName, email }),
    removeCustomer: (_: any, { id }: { id: string }) => deleteCustomer(id),

    addOrder: (_: any, { productId, customerId }: any) => createOrder(productId, customerId),
    editOrder: (_: any, { id, productId, customerId }: any) => updateOrder(id, { productId, customerId }),
    removeOrder: (_: any, { id }: { id: string }) => deleteOrder(id)
  }
}
