// Напишите функцию, которая принимает массив строк и возвращает новую строку,
// состоящую из элементов массива, соединенных через запятую

export function toSplitComma(strArr: string[]): string {
  return strArr.join(",")
}
