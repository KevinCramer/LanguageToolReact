import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { config } from 'dotenv';
config();

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

const speechFile = path.resolve("./speech.mp3");

const inputWords = [
    'uno',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'seis',
    'siete',
    'ocho',
    'nueve',
    'diez',
]


async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "shimmer",
    input: inputWords.join('......... '),
    speed: 1
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();