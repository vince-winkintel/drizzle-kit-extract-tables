import { sqliteTable, AnySQLiteColumn, integer, text, numeric } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const products = sqliteTable("products", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	price: integer("price").notNull(),
	description: text("description").notNull(),
});
