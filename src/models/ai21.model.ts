import axios from "axios";
import { config } from "../config/config";

const AI21_API_URL = "https://api.ai21.com/studio/v1/j2-mid/complete";

export const getAI21Response = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      AI21_API_URL,
      {
        prompt: prompt,
        maxTokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${config.ai21ApiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.completions[0].data.text;
  } catch (error) {
    console.error("Error calling AI21 API:", error);
    return "An error occurred while communicating with AI21.";
  }
};
