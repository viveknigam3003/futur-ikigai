const dev = process.env.NODE_ENV !== "production";

export const SERVER = dev ? "http://localhost:3000" : process.env.NEXT_PUBLIC_VERCEL_URL;
