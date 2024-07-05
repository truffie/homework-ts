// Напишите функцию, которая принимает массив чисел и возвращает новый массив,
// содержащий только четные числа

export function showEven(numArr: number[]): number[] {
  return numArr.reduce((arr, num) => {
    if (num % 2 === 0) {
      arr.push(num);
    }
    return arr;
  }, []);
}
