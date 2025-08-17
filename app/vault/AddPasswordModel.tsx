"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import Button from "@/components/ui/Buttoons";
import Modal from "@/components/ui/Modal";

interface AddPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required")
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title can't exceed 100 characters"),

  username: z
    .string()
    .nonempty("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username can't exceed 50 characters"),

  website: z.string().url("Must be a valid URL").optional().or(z.literal("")),

  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password can't exceed 100 characters")
    .regex(/[a-z]/, "Must include a lowercase letter")
    .regex(/[A-Z]/, "Must include an uppercase letter")
    .regex(/[0-9]/, "Must include a number"),

  category: z.enum(["personal", "work", "social", "banking", "shopping"]),

  notes: z
    .string()
    .max(200, "Notes can't exceed 200 characters")
    .refine(
      (val) => val.trim().split(/\s+/).length <= 40,
      "Notes can't exceed 40 words"
    )
    .optional()
    .or(z.literal("")),
});

export default function AddPasswordModal({
  isOpen,
  onClose,
}: AddPasswordModalProps) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      username: "",
      website: "",
      password: "",
      category: "personal",
      notes: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;

    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-blue-500",
      "bg-green-500",
    ];

    return {
      score: strength,
      label: labels[strength] || "Very Weak",
      color: colors[strength] || "bg-red-500",
    };
  };

  const strength = getPasswordStrength(form.watch("password"));

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("New password entry:", data);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Password">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Title *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g., Gmail, Amazon, LinkedIn"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Username/Email *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="username or email@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Website URL</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="https://example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password *</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className="pr-20"
                      placeholder="Enter password"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-white cursor-pointer"
                      >
                        <i
                          className={`ri-${
                            showPassword ? "eye-off" : "eye"
                          }-line`}
                        />
                      </button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch("password") && (
            <div className="mt-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${strength.color}`}
                    style={{ width: `${(strength.score / 4) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{strength.label}</span>
              </div>
            </div>
          )}

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Category</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="social">Social</option>
                    <option value="banking">Banking</option>
                    <option value="shopping">Shopping</option>
                  </select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Notes</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder="Additional notes (optional)"
                    rows={3}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Button type="submit" className="flex-1">
              <i className="ri-save-line mr-2"></i>
              Save Password
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}
