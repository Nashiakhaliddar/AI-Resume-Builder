// openrouter.ts (create a new file for OpenRouter integration)
import dotenv from 'dotenv';

dotenv.config(); // This will load your .env file

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

if (!OPENROUTER_API_KEY) {
  throw new Error("Missing OpenRouter API key");
}

export async function generateChatResponse(messages: { role: string; content: string }[]) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1-distill-llama-70b:free",
      messages,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch from OpenRouter API");
  }

  const data = await response.json();

  if (!data.choices || !data.choices[0].message.content) {
    throw new Error("No valid response received from OpenRouter API");
  }

  return data.choices[0].message.content;
}
