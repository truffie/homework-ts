// Напишите функцию, которая принимает массив строк и возвращает массив тех строк,
// которые начинаются с переданной буквы

export function sortBySign(strArr: string[], sign: string): string[] {
  return strArr.reduce((sortedArr, word) => {
    if (word.toLowerCase().startsWith(sign.toLowerCase())) {
      sortedArr.push(word);
    }
    return sortedArr;
  }, []);
}
