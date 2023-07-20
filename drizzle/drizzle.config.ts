import type { Config } from 'drizzle-kit';

export default {
    breakpoints: true,
    dbCredentials: {
        url: './better-sqlite3/sample.db'
    },
    driver: 'better-sqlite',
    introspect: {
        casing: 'camel'
    },
    out: './drizzle/introspect-out',
    schema: './drizzle/introspect-out/schema.ts',
    strict: true,
    verbose: true
} satisfies Config;
