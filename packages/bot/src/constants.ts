import * as dotenv from "dotenv";
dotenv.config();

export const IS_PRODUCTION = process.env.NODE_ENV !== "development";

export const BOT_TOKEN = IS_PRODUCTION
  ? process.env.BOT_TOKEN_PROD!
  : process.env.BOT_TOKEN_DEV!;
