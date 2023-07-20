import Database from "better-sqlite3";

const db = new Database("./better-sqlite3/sample.db");

// Create the users table
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  created_at DATETIME NOT NULL
);
`;
db.exec(createUsersTable);

// Create some sample users
const users = [
    { email: 'johndoe@example.com', first_name: 'John', last_name: 'Doe', created_at: new Date() },
    { email: 'janedoe@example.com', first_name: 'Jane', last_name: 'Doe', created_at: new Date() },
    { email: 'marysmith@example.com', first_name: 'Mary', last_name: 'Smith', created_at: new Date() },
];
const userSql = `
INSERT INTO users (email, first_name, last_name, created_at)
VALUES ('${users[0].email}', '${users[0].first_name}', '${users[0].last_name}', '${users[0].created_at}'),
('${users[1].email}', '${users[1].first_name}', '${users[1].last_name}', '${users[1].created_at}'),
('${users[2].email}', '${users[2].first_name}', '${users[2].last_name}', '${users[2].created_at}');
`;
db.exec(userSql);

// Create the products table
const createProductsTable = `
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT NOT NULL
);
`;
db.exec(createProductsTable);

// Create some sample products
const products = [
    { name: 'iPhone 13 Pro', price: 999, description: 'The latest and greatest iPhone' },
    { name: 'iPad Pro', price: 799, description: 'The most powerful iPad ever' },
    { name: 'MacBook Pro', price: 1299, description: 'The most powerful MacBook ever' },
];
const productSql = `
INSERT INTO products (name, price, description)
VALUES ('${products[0].name}', ${products[0].price}, '${products[0].description}'),
('${products[1].name}', ${products[1].price}, '${products[1].description}'),
('${products[2].name}', ${products[2].price}, '${products[2].description}');
`;
db.exec(productSql);

// Create the orders table
const createOrdersTable = `
CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  order_date DATETIME NOT NULL
);
`;
db.exec(createOrdersTable);

// Create some sample orders
const orders = [
    { user_id: 1, product_id: 1, quantity: 1, order_date: new Date() },
    { user_id: 2, product_id: 2, quantity: 2, order_date: new Date() },
    { user_id: 3, product_id: 3, quantity: 3, order_date: new Date() },
];
const orderSql = `
INSERT INTO orders (user_id, product_id, quantity, order_date)
VALUES (${orders[0].user_id}, ${orders[0].product_id}, ${orders[0].quantity}, '${orders[0].order_date}'),
(${orders[1].user_id}, ${orders[1].product_id}, ${orders[1].quantity}, '${orders[1].order_date}'),
(${orders[2].user_id}, ${orders[2].product_id}, ${orders[2].quantity}, '${orders[2].order_date}');
`;
db.exec(orderSql);

// Close the database connection.
db.close();
