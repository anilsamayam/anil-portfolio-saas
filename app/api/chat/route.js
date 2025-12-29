
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  const { question } = await request.json();

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are an AI assistant answering questions about Anil Samayam." },
      { role: "user", content: question }
    ]
  });

  return new Response(JSON.stringify({
    answer: response.choices[0].message.content
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
