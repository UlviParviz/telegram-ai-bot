import { config } from "../config/config";

export const formatBotResponse = (response: string): string => {
  return `🤖 ${config.botName} Bot: \n\n${response}`;
};
