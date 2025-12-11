import { Customer } from "../models/customer.model";

export const getCustomers = async () => Customer.find()

export const getCustomerById = async (id: string) => Customer.findById(id)

export const createCustomer = async (data: any) => {
  const customer = new Customer(data)
  return customer.save()
}

export const updateCustomer = async(id: string, data: any) => Customer.findByIdAndUpdate(id, data, { new: true })

export const deleteCustomer = async (id: string) => {
  const res = await Customer.findByIdAndDelete(id)
  return !!res
}