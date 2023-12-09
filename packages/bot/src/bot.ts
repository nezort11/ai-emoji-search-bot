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
  const emojiesResponse = await axios.post<string>(
    "https://emojisearch.fun/api/completion",
    {
      prompt: emojiText,
    }
  );
  const emojies = emojiesResponse.data;

  await context.reply(emojies);
});
