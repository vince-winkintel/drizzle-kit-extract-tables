# Drizzle Kit Extract Tables

This repo provides a shell script to extract table definitions from a drizzle-kit schema file into separate files. This can be useful in cases where you want to version each table definition separately.

## Installation

Use the package manager `npm` to install.

```bash
npm install
```

## Usage

The `sample.db` file is a sample better-sqlite3 database with a schema already defined. If you want to create your own schema, simply update the source code in the `./src/create-db.ts` file, delete the `./better-sqlite3/sample.db` file, and run the `db:create` script.

```bash
rm ./better-sqlite3/sample.db
npm run db:create-db
```

Once the schema has been built, you can recreate the drizzle-kit schema file by running the `db:introspect` script.

```bash
npm run db:introspect
```

Lastly, execute the `db:extract-tables` script to extract the table definitions from the `./drizzle/introspect-out/schema.ts` file into separate files in the `./drizzle/introspect-out/tables` directory.

```bash
npm run db:extract-tables
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)