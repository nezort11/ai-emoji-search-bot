import http from "serverless-http";

import { bot } from "./bot";

// Only for development
if (require.main === module) {
  bot.launch();
}

export const handler = http(bot.webhookCallback("/webhook"));
