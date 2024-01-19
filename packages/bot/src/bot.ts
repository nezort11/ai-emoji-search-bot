import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import axios from "axios";
import { BOT_TOKEN } from "./constants";

export const bot = new Telegraf(BOT_TOKEN);

bot.start(async (context) => {
  await context.reply(
    "Hi there. Please send me a text to 🔍 search an emoji 🙂"
  );
});

bot.on(message("text"), async (context) => {
  await context.sendChatAction("typing");

  const emojiText = context.message.text;
  const emojiesResponse = await axios.get<string[]>(
    "https://emojisearch.fun/api/completion",
    {
      params: {
        query: emojiText,
      },
    }
  );
  const emojies = emojiesResponse.data.join("");

  await context.reply(emojies);
});

bot.catch(async (error, context) => {
  console.error(error);
  await context.reply(
    `⚠️ Error! Please try again 🔁 or later (✉️ error has been reported).`
  );
});
