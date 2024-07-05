// Напишите функцию, которая принимает массив строк и возвращает строку, которая
// встречается чаще всего.

export function countMostOftenWord(strArr: string[]): string {
  const temp: object = {};

  for (const word of strArr) {
    if (!temp[word]) {
      temp[word] = 1;
    } else {
      temp[word] += 1;
    }
  }
  return Object.entries(temp).filter((el) => el[1] === Math.max(...Object.values(temp)))[0][0];
}