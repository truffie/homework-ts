// Напишите функцию, которая принимает строку и возвращает новую строку, где все
// пробелы заменены на дефисы.

export function showReplaceSign(str: string): string {
  return str.replaceAll(/[\s]/gi, '-');
}
