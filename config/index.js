const dev = process.env.NODE_ENV !== "production";

export const SERVER = dev ? "http://localhost:3000" : process.env.PUBLIC_URL;
