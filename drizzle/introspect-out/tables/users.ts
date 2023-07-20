import { sqliteTable, AnySQLiteColumn, integer, text, numeric } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const users = sqliteTable("users", {
	id: integer("id").primaryKey(),
	email: text("email").notNull(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	createdAt: numeric("created_at").notNull(),
});
