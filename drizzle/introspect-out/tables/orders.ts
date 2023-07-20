import { sqliteTable, AnySQLiteColumn, integer, text, numeric } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const orders = sqliteTable("orders", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").notNull(),
	productId: integer("product_id").notNull(),
	quantity: integer("quantity").notNull(),
	orderDate: numeric("order_date").notNull(),
});
