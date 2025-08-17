// lib/env.ts
import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z.string().min(1),
  // Add other environment variables here
});

export const env = envSchema.parse(process.env);
