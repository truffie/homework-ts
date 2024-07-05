// Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

export function doSum(numArr: number[]): number {
  return numArr.reduce((sum, arr) => sum + arr, 0);
}
