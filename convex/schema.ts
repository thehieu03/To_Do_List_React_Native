import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Schema chính cho Convex. Đây là nơi định nghĩa các bảng trong database.
export default defineSchema({
  todos: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
});
