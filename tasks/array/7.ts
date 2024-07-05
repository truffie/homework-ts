// Напишите функцию, которая принимает массив чисел и возвращает произведение всех
// элементов

export function multiplyElements(numArr: number[]): number {
  let result = 1;
  for (let num of numArr) {
    result *= num;
  }
  return result;
}
