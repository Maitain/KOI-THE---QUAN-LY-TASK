CREATE TYPE "user_role" AS ENUM('admin', 'director', 'assistant', 'regional_manager', 'sc_leader', 'sc_worker', 'ct_worker', 'store');--> statement-breakpoint
CREATE TYPE "task_status" AS ENUM('pending', 'assigned', 'in_progress', 'completed', 'confirmed', 'rejected');--> statement-breakpoint
CREATE TYPE "task_type" AS ENUM('sc', 'ct', 'general');--> statement-breakpoint
CREATE TABLE "app_users" (
	"id" serial PRIMARY KEY,
	"netlify_id" text NOT NULL UNIQUE,
	"email" text NOT NULL,
	"display_name" text NOT NULL,
	"role" "user_role" DEFAULT 'store'::"user_role" NOT NULL,
	"department" text,
	"worker_code" text,
	"is_leader" boolean DEFAULT false,
	"region_id" integer,
	"store_id" integer,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "regions" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"name_zh" text NOT NULL,
	"code" text NOT NULL UNIQUE,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "stores" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"name_zh" text NOT NULL,
	"code" text NOT NULL UNIQUE,
	"region_id" integer,
	"address" text,
	"phone" text,
	"email" text,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "task_comments" (
	"id" serial PRIMARY KEY,
	"task_id" integer NOT NULL,
	"author_netlify_id" text NOT NULL,
	"author_name" text NOT NULL,
	"author_role" text,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" serial PRIMARY KEY,
	"title" text NOT NULL,
	"title_zh" text,
	"description" text,
	"store_id" integer NOT NULL,
	"status" "task_status" DEFAULT 'pending'::"task_status" NOT NULL,
	"task_type" "task_type" DEFAULT 'sc'::"task_type" NOT NULL,
	"priority" text DEFAULT 'normal',
	"created_by" text NOT NULL,
	"assigned_to" text,
	"assigned_by" text,
	"assigned_at" timestamp,
	"completed_at" timestamp,
	"confirmed_at" timestamp,
	"store_rating" integer,
	"store_feedback" text,
	"worker_note" text,
	"images" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "worker_store_assignments" (
	"id" serial PRIMARY KEY,
	"worker_netlify_id" text NOT NULL,
	"store_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "app_users" ADD CONSTRAINT "app_users_region_id_regions_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id");--> statement-breakpoint
ALTER TABLE "app_users" ADD CONSTRAINT "app_users_store_id_stores_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id");--> statement-breakpoint
ALTER TABLE "stores" ADD CONSTRAINT "stores_region_id_regions_id_fkey" FOREIGN KEY ("region_id") REFERENCES "regions"("id");--> statement-breakpoint
ALTER TABLE "task_comments" ADD CONSTRAINT "task_comments_task_id_tasks_id_fkey" FOREIGN KEY ("task_id") REFERENCES "tasks"("id");--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_store_id_stores_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id");--> statement-breakpoint
ALTER TABLE "worker_store_assignments" ADD CONSTRAINT "worker_store_assignments_store_id_stores_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id");