// Напишите функцию, которая принимает строку и возвращает количество гласных в этой
// строке

export function countVowels(str: string): number {
  return str.match(/[aeiouy]/gi).length
}