// Напишите функцию, которая принимает массив чисел и возвращает среднее значение всех
// элементов

export function countAvg(numArr: number[]): number {
  return numArr.reduce((sum, el) => sum + el, 0) / numArr.length;
}
