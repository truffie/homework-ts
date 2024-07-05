// Напишите функцию, которая принимает массив чисел и возвращает новый массив с
// удвоенными значениями элементов исходного массива

export function doubledArray(numArr: number[]): number[] {
  return numArr.map((el) => el * 2);
}

