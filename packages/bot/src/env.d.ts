export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN_DEV: string;
      BOT_TOKEN_PROD: string;
    }
  }
}
