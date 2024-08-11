import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = "Welcome to Headstarter assistant. Let me help you.";

export async function POST(req) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const data = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: systemPrompt }, ...data],
    stream: true,
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completion) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream);
}
