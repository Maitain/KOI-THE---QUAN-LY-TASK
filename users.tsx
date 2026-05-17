import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("user_role", [
  "admin",
  "director",
  "assistant",
  "regional_manager",
  "sc_leader",
  "sc_worker",
  "ct_worker",
  "store",
]);

export const taskStatusEnum = pgEnum("task_status", [
  "pending",
  "assigned",
  "in_progress",
  "completed",
  "confirmed",
  "rejected",
]);

export const taskTypeEnum = pgEnum("task_type", ["sc", "ct", "general"]);

export const regions = pgTable("regions", {
  id: serial().primaryKey(),
  name: text().notNull(),
  nameZh: text("name_zh").notNull(),
  code: text().notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const stores = pgTable("stores", {
  id: serial().primaryKey(),
  name: text().notNull(),
  nameZh: text("name_zh").notNull(),
  code: text().notNull().unique(),
  regionId: integer("region_id").references(() => regions.id),
  address: text(),
  phone: text(),
  email: text(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const appUsers = pgTable("app_users", {
  id: serial().primaryKey(),
  netlifyId: text("netlify_id").notNull().unique(),
  email: text().notNull(),
  displayName: text("display_name").notNull(),
  role: roleEnum().notNull().default("store"),
  department: text(),
  workerCode: text("worker_code"),
  isLeader: boolean("is_leader").default(false),
  regionId: integer("region_id").references(() => regions.id),
  storeId: integer("store_id").references(() => stores.id),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const tasks = pgTable("tasks", {
  id: serial().primaryKey(),
  title: text().notNull(),
  titleZh: text("title_zh"),
  description: text(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  status: taskStatusEnum().notNull().default("pending"),
  taskType: taskTypeEnum("task_type").notNull().default("sc"),
  priority: text().default("normal"),
  createdBy: text("created_by").notNull(),
  assignedTo: text("assigned_to"),
  assignedBy: text("assigned_by"),
  assignedAt: timestamp("assigned_at"),
  completedAt: timestamp("completed_at"),
  confirmedAt: timestamp("confirmed_at"),
  storeRating: integer("store_rating"),
  storeFeedback: text("store_feedback"),
  workerNote: text("worker_note"),
  images: text(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const taskComments = pgTable("task_comments", {
  id: serial().primaryKey(),
  taskId: integer("task_id")
    .notNull()
    .references(() => tasks.id),
  authorNetlifyId: text("author_netlify_id").notNull(),
  authorName: text("author_name").notNull(),
  authorRole: text("author_role"),
  content: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const workerStoreAssignments = pgTable("worker_store_assignments", {
  id: serial().primaryKey(),
  workerNetlifyId: text("worker_netlify_id").notNull(),
  storeId: integer("store_id")
    .notNull()
    .references(() => stores.id),
  createdAt: timestamp("created_at").defaultNow(),
});
