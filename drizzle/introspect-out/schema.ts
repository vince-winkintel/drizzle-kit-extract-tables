import { sqliteTable, AnySQLiteColumn, integer, text, numeric } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const users = sqliteTable("users", {
	id: integer("id").primaryKey(),
	email: text("email").notNull(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),
	createdAt: numeric("created_at").notNull(),
});

export const products = sqliteTable("products", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	price: integer("price").notNull(),
	description: text("description").notNull(),
});

export const orders = sqliteTable("orders", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(),
	productId: integer("product_id").notNull(),
	quantity: integer("quantity").notNull(),
	orderDate: numeric("order_date").notNull(),
});