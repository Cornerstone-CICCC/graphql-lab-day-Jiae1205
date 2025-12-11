import mongoose, { Schema, Document } from "mongoose";

export interface IPorduct extends Document {
  productName: string;
  productPrice: number;
}

const ProductSchema: Schema = new Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
})

export const Product = mongoose.model<IPorduct>("Product", ProductSchema)