/** @format */

import { defineConfig } from 'drizzle-kit';
export default (defineConfig as any)({
  schema: './utils/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
