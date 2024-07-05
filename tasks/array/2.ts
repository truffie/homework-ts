// Напишите функцию, которая принимает массив строк и возвращает новый массив, где все
// строки отсортированы по длине.

export function sortLengthDesc(strArr: string[]): string[] {
  return strArr.sort((a, b) => b.length - a.length);
}
