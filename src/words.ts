import wordsObject from "./words.json";

const words: Array<string> = Object.values(wordsObject).flat();
console.log(words);

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
