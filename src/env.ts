import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    POSTGRES_URL: z.string().min(1),                      // from .env: POSTGRES_URL
    POSTGRES_PRISMA_URL: z.string().min(1),                // from .env: POSTGRES_PRISMA_URL
    POSTGRES_URL_NO_SSL: z.string().min(1),                // from .env: POSTGRES_URL_NO_SSL
    POSTGRES_URL_NON_POOLING: z.string().min(1),           // from .env: POSTGRES_URL_NON_POOLING
    POSTGRES_USER: z.string().min(1),                      // from .env: POSTGRES_USER
    POSTGRES_HOST: z.string().min(1),                      // from .env: POSTGRES_HOST
    POSTGRES_PASSWORD: z.string().min(1),                  // from .env: POSTGRES_PASSWORD
    POSTGRES_DATABASE: z.string().min(1),                  // from .env: POSTGRES_DATABASE
    CLERK_SECRET_KEY: z.string().min(1),                   // from .env: CLERK_SECRET_KEY
    BLOB_READ_WRITE_TOKEN: z.string().min(1),              // from .env: BLOB_READ_WRITE_TOKEN
    OPENROUTER_API_KEY: z.string().min(1),                 // from .env: OPENROUTER_API_KEY
    STRIPE_SECRET_KEY: z.string().min(1),                  // from .env: STRIPE_SECRET_KEY
    STRIPE_WEBHOOK_SECRET: z.string().min(1),              // from .env: STRIPE_WEBHOOK_SECRET
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),  // from .env: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),      // from .env: NEXT_PUBLIC_CLERK_SIGN_IN_URL
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),      // from .env: NEXT_PUBLIC_CLERK_SIGN_UP_URL
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),  // from .env: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY: z.string().min(1), // from .env: NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY: z.string().min(1), // from .env: NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY
    NEXT_PUBLIC_BASE_URL: z.string().min(1).url(),        // from .env: NEXT_PUBLIC_BASE_URL
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,  // runtime value from .env
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,  // runtime value from .env
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,  // runtime value from .env
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,  // runtime value from .env
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY:
      process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY,  // runtime value from .env
    NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY:
      process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY,  // runtime value from .env
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,  // runtime value from .env
  },
});
