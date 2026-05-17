{
  "version": "8",
  "dialect": "postgres",
  "id": "00028f7f-d060-4e13-a49f-227bd530075d",
  "prevIds": [
    "00000000-0000-0000-0000-000000000000"
  ],
  "ddl": [
    {
      "values": [
        "admin",
        "director",
        "assistant",
        "regional_manager",
        "sc_leader",
        "sc_worker",
        "ct_worker",
        "store"
      ],
      "name": "user_role",
      "entityType": "enums",
      "schema": "public"
    },
    {
      "values": [
        "pending",
        "assigned",
        "in_progress",
        "completed",
        "confirmed",
        "rejected"
      ],
      "name": "task_status",
      "entityType": "enums",
      "schema": "public"
    },
    {
      "values": [
        "sc",
        "ct",
        "general"
      ],
      "name": "task_type",
      "entityType": "enums",
      "schema": "public"
    },
    {
      "isRlsEnabled": false,
      "name": "app_users",
      "entityType": "tables",
      "schema": "public"
    },
    {
      "isRlsEnabled": false,
      "name": "regions",
      "entityType": "tables",
      "schema": "public"
    },
    {
      "isRlsEnabled": false,
      "name": "stores",
      "entityType": "tables",
      "schema": "public"
    },
    {
      "isRlsEnabled": false,
      "name": "task_comments",
      "entityType": "tables",
      "schema": "public"
    },
    {
      "isRlsEnabled": false,
      "name": "tasks",
      "entityType": "tables",
      "schema": "public"
    },
    {
      "isRlsEnabled": false,
      "name": "worker_store_assignments",
      "entityType": "tables",
      "schema": "public"
    },
    {
      "type": "serial",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "id",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "netlify_id",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "email",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "display_name",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "user_role",
      "typeSchema": "public",
      "notNull": true,
      "dimensions": 0,
      "default": "'store'",
      "generated": null,
      "identity": null,
      "name": "role",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "department",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "worker_code",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "boolean",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "false",
      "generated": null,
      "identity": null,
      "name": "is_leader",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "integer",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "region_id",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "integer",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "store_id",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "boolean",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "true",
      "generated": null,
      "identity": null,
      "name": "is_active",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "created_at",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "updated_at",
      "entityType": "columns",
      "schema": "public",
      "table": "app_users"
    },
    {
      "type": "serial",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "id",
      "entityType": "columns",
      "schema": "public",
      "table": "regions"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "name",
      "entityType": "columns",
      "schema": "public",
      "table": "regions"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "name_zh",
      "entityType": "columns",
      "schema": "public",
      "table": "regions"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "code",
      "entityType": "columns",
      "schema": "public",
      "table": "regions"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "created_at",
      "entityType": "columns",
      "schema": "public",
      "table": "regions"
    },
    {
      "type": "serial",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "id",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "name",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "name_zh",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "code",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "integer",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "region_id",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "address",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "phone",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "email",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "boolean",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "true",
      "generated": null,
      "identity": null,
      "name": "is_active",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "created_at",
      "entityType": "columns",
      "schema": "public",
      "table": "stores"
    },
    {
      "type": "serial",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "id",
      "entityType": "columns",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "type": "integer",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "task_id",
      "entityType": "columns",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "author_netlify_id",
      "entityType": "columns",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "author_name",
      "entityType": "columns",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "author_role",
      "entityType": "columns",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "content",
      "entityType": "columns",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "created_at",
      "entityType": "columns",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "type": "serial",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "id",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "title",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "title_zh",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "description",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "integer",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "store_id",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "task_status",
      "typeSchema": "public",
      "notNull": true,
      "dimensions": 0,
      "default": "'pending'",
      "generated": null,
      "identity": null,
      "name": "status",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "task_type",
      "typeSchema": "public",
      "notNull": true,
      "dimensions": 0,
      "default": "'sc'",
      "generated": null,
      "identity": null,
      "name": "task_type",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "'normal'",
      "generated": null,
      "identity": null,
      "name": "priority",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "created_by",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "assigned_to",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "assigned_by",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "assigned_at",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "completed_at",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "confirmed_at",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "integer",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "store_rating",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "store_feedback",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "worker_note",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "images",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "created_at",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "updated_at",
      "entityType": "columns",
      "schema": "public",
      "table": "tasks"
    },
    {
      "type": "serial",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "id",
      "entityType": "columns",
      "schema": "public",
      "table": "worker_store_assignments"
    },
    {
      "type": "text",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "worker_netlify_id",
      "entityType": "columns",
      "schema": "public",
      "table": "worker_store_assignments"
    },
    {
      "type": "integer",
      "typeSchema": null,
      "notNull": true,
      "dimensions": 0,
      "default": null,
      "generated": null,
      "identity": null,
      "name": "store_id",
      "entityType": "columns",
      "schema": "public",
      "table": "worker_store_assignments"
    },
    {
      "type": "timestamp",
      "typeSchema": null,
      "notNull": false,
      "dimensions": 0,
      "default": "now()",
      "generated": null,
      "identity": null,
      "name": "created_at",
      "entityType": "columns",
      "schema": "public",
      "table": "worker_store_assignments"
    },
    {
      "nameExplicit": false,
      "columns": [
        "region_id"
      ],
      "schemaTo": "public",
      "tableTo": "regions",
      "columnsTo": [
        "id"
      ],
      "onUpdate": "NO ACTION",
      "onDelete": "NO ACTION",
      "name": "app_users_region_id_regions_id_fkey",
      "entityType": "fks",
      "schema": "public",
      "table": "app_users"
    },
    {
      "nameExplicit": false,
      "columns": [
        "store_id"
      ],
      "schemaTo": "public",
      "tableTo": "stores",
      "columnsTo": [
        "id"
      ],
      "onUpdate": "NO ACTION",
      "onDelete": "NO ACTION",
      "name": "app_users_store_id_stores_id_fkey",
      "entityType": "fks",
      "schema": "public",
      "table": "app_users"
    },
    {
      "nameExplicit": false,
      "columns": [
        "region_id"
      ],
      "schemaTo": "public",
      "tableTo": "regions",
      "columnsTo": [
        "id"
      ],
      "onUpdate": "NO ACTION",
      "onDelete": "NO ACTION",
      "name": "stores_region_id_regions_id_fkey",
      "entityType": "fks",
      "schema": "public",
      "table": "stores"
    },
    {
      "nameExplicit": false,
      "columns": [
        "task_id"
      ],
      "schemaTo": "public",
      "tableTo": "tasks",
      "columnsTo": [
        "id"
      ],
      "onUpdate": "NO ACTION",
      "onDelete": "NO ACTION",
      "name": "task_comments_task_id_tasks_id_fkey",
      "entityType": "fks",
      "schema": "public",
      "table": "task_comments"
    },
    {
      "nameExplicit": false,
      "columns": [
        "store_id"
      ],
      "schemaTo": "public",
      "tableTo": "stores",
      "columnsTo": [
        "id"
      ],
      "onUpdate": "NO ACTION",
      "onDelete": "NO ACTION",
      "name": "tasks_store_id_stores_id_fkey",
      "entityType": "fks",
      "schema": "public",
      "table": "tasks"
    },
    {
      "nameExplicit": false,
      "columns": [
        "store_id"
      ],
      "schemaTo": "public",
      "tableTo": "stores",
      "columnsTo": [
        "id"
      ],
      "onUpdate": "NO ACTION",
      "onDelete": "NO ACTION",
      "name": "worker_store_assignments_store_id_stores_id_fkey",
      "entityType": "fks",
      "schema": "public",
      "table": "worker_store_assignments"
    },
    {
      "columns": [
        "id"
      ],
      "nameExplicit": false,
      "name": "app_users_pkey",
      "schema": "public",
      "table": "app_users",
      "entityType": "pks"
    },
    {
      "columns": [
        "id"
      ],
      "nameExplicit": false,
      "name": "regions_pkey",
      "schema": "public",
      "table": "regions",
      "entityType": "pks"
    },
    {
      "columns": [
        "id"
      ],
      "nameExplicit": false,
      "name": "stores_pkey",
      "schema": "public",
      "table": "stores",
      "entityType": "pks"
    },
    {
      "columns": [
        "id"
      ],
      "nameExplicit": false,
      "name": "task_comments_pkey",
      "schema": "public",
      "table": "task_comments",
      "entityType": "pks"
    },
    {
      "columns": [
        "id"
      ],
      "nameExplicit": false,
      "name": "tasks_pkey",
      "schema": "public",
      "table": "tasks",
      "entityType": "pks"
    },
    {
      "columns": [
        "id"
      ],
      "nameExplicit": false,
      "name": "worker_store_assignments_pkey",
      "schema": "public",
      "table": "worker_store_assignments",
      "entityType": "pks"
    },
    {
      "nameExplicit": false,
      "columns": [
        "netlify_id"
      ],
      "nullsNotDistinct": false,
      "name": "app_users_netlify_id_key",
      "schema": "public",
      "table": "app_users",
      "entityType": "uniques"
    },
    {
      "nameExplicit": false,
      "columns": [
        "code"
      ],
      "nullsNotDistinct": false,
      "name": "regions_code_key",
      "schema": "public",
      "table": "regions",
      "entityType": "uniques"
    },
    {
      "nameExplicit": false,
      "columns": [
        "code"
      ],
      "nullsNotDistinct": false,
      "name": "stores_code_key",
      "schema": "public",
      "table": "stores",
      "entityType": "uniques"
    }
  ],
  "renames": []
}