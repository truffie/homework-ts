// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только уникальные значения

export function showUniqueNumbers(numArr: number[]): number[] {
  return numArr.reduce((unique, num) => {
    if (numArr.indexOf(num) === numArr.lastIndexOf(num)) {
      unique.push(num);
    }
    return unique;
  }, []);
}
