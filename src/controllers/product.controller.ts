import { Product } from "../models/product.model";

export const getProducts = async () => Product.find()

export const getProductById = async (id: string) => Product.findById(id)

export const createProduct = async (data: any) => {
  const product = new Product(data)
  return product.save()
}

export const updateProduct = async (id: string, data: any) => Product.findByIdAndUpdate(id, data, { new: true })

export const deleteProduct = async (id: string) => {
  const res = await Product.findByIdAndDelete(id)
  return !!res
}