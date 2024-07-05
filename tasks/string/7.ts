// Напишите функцию, которая принимает строку и возвращает количество слов в этой
// строке.

export function countWords(str: string): number {
  return str.split(" ").length;
}
