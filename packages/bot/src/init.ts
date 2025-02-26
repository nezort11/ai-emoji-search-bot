import { bot } from "./bot";

const main = async () => {
  await Promise.all([
    bot.telegram.setMyName(
      "Emoji Search AI 😁: search emojis for any text, any language"
    ),
    bot.telegram.setMyName(
      "Поиск эмодзи ИИ 😁: поиск эмодзи для любого текста на любом языке",
      "ru"
    ),

    bot.telegram.setMyShortDescription(
      "AI bot to search emojies. Supports any language @nezort111"
    ),
    bot.telegram.setMyShortDescription(
      "Искусственный интеллект-бот для поиска эмодзи. Поддерживает любой язык @nezort111",
      "ru"
    ),

    bot.telegram.setMyDescription(
      "AI bot to search emojies. Supports any language. 💬 feedback/contact @nezort11"
    ),
    bot.telegram.setMyDescription(
      "Искусственный интеллект-бот для поиска эмодзи. Поддерживает любой язык. 💬 Обратная связь/контакт @nezort11",
      "ru"
    ),

    // bot.telegram.setMyCommands(
    //   commands.map((command) => ({
    //     command: command.command,
    //     description: command.description.en,
    //   }))
    //   // { language_code: "en" }
    // ),
    // bot.telegram.setMyCommands(
    //   commands.map((command) => ({
    //     command: command.command,
    //     description: command.description.ru,
    //   })),
    //   { language_code: "ru" }
    // ),
  ]);
};

main();
