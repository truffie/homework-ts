// Напишите функцию, которая принимает массив строк и возвращает массив только тех
// строк, которые содержат больше пяти символов

export function sortElLength(strArr: string[]): string[] {
  return strArr.reduce((arr, el) => {
    if (el.length > 5) {
      arr.push(el);
    }
    return arr;
  }, []);
}
