// Напишите функцию, которая принимает массив чисел и возвращает новый массив, где
// каждый элемент является квадратом исходного элемента

export function doPow(numArr: number[]): number[] {
  return numArr.map((el) => el ** 2);
}