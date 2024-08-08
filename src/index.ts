import express from "express";
import { startBot } from "./controllers/bot.controller";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Telegram bot is running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  startBot();
});
