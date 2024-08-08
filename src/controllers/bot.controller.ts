import { Telegraf } from "telegraf";

import { config } from "../config/config";
import { getAI21Response } from "../models/ai21.model";
import { formatBotResponse } from "../views/bot.view";

const bot = new Telegraf(config.telegramBotToken);

export const startBot = () => {
  bot.start((ctx) => {
    ctx.reply("Welcome! Send me any message, and I will respond using AI21.");
  });

  bot.on("text", async (ctx) => {
    const userMessage = ctx.message.text;
    const aiResponse = await getAI21Response(userMessage);
    const formattedResponse = formatBotResponse(aiResponse);
    ctx.reply(formattedResponse);
  });

  bot.launch();
  console.log("Telegram bot is running...");
};
