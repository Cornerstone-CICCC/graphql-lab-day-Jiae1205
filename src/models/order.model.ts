import mongoose, { Schema, Document, mongo } from "mongoose";

export interface IOrder extends Document {
  productId: mongoose.Types.ObjectId;
  customerId: mongoose.Types.ObjectId;
}

const OrderSchema: Schema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true }
})

export const Order = mongoose.model<IOrder>("Order", OrderSchema)