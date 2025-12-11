import { Order } from "../models/order.model";

export const getOrders = async () => Order.find()

export const createOrder = async (productId: string, customerId: string) => {
  const order = new Order({ productId, customerId })
  return order.save()
}

export const updateOrder = async (id: string, data: any) => Order.findByIdAndUpdate(id, data, { new: true })

export const deleteOrder = async (id: string) => {
  const res = await Order.findByIdAndDelete(id)
  return !!res
}