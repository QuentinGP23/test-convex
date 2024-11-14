import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  messages: defineTable({
    userId: v.id("users"),
    body: v.string(),
  }),
  tasks: defineTable({
    userId: v.id("users"),
    title: v.string(),
    status: v.union(v.literal("TODO"), v.literal("InProgress"), v.literal("Done")),
    createdAt: v.number(),
  }),
});
