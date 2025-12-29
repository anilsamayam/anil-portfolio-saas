
import OpenAI from 'openai'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req: Request) {
  const { question } = await req.json()

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'You are an AI assistant answering questions about Anil Samayam based on his resume and experience.' },
      { role: 'user', content: question }
    ]
  })

  return Response.json({ answer: response.choices[0].message.content })
}
