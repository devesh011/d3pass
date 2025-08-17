// lib/models/PasswordEntry.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IPasswordEntry extends Document {
  userId: string;
  title: string;
  username: string;
  website?: string;
  password: string;
  category: string;
  notes?: string;
  icon?: string;
  lastUsed?: Date;
}

const PasswordEntrySchema = new Schema<IPasswordEntry>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    username: { type: String, required: true },
    website: String,
    password: { type: String, required: true },
    category: { type: String, required: true },
    notes: String,
    icon: String,
    lastUsed: Date,
  },
  { timestamps: true }
);

export default mongoose.models.PasswordEntry ||
  mongoose.model<IPasswordEntry>("PasswordEntry", PasswordEntrySchema);
