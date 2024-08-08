import dotenv from "dotenv";

dotenv.config();

export const config = {
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "",
  ai21ApiKey: process.env.AI21_API_KEY || "",
  botName: process.env.BOT_NAME || "",
};
