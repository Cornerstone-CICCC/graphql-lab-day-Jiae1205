import mongoose, { Schema, Document } from "mongoose";

export interface ICustomer extends Document {
  firstName: String;
  lastName: String;
  email: String;
}

const CustomerSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true }
})

export const Customer = mongoose.model<ICustomer>("Customer", CustomerSchema)