// Напишите функцию, которая принимает строку и возвращает количество гласных в этой
// строке

export function vowelsCounter(str: string): number {
  return str.match(/[aeiouy]/gi).length
}