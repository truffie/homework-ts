// Напишите функцию, которая принимает число и возвращает массив всех чисел от 1 до
// этого числа.

export function showListNumber(a: number): number[] {
  if (a < 1) {
    return [];
  } else {
    const result = showListNumber(a - 1);
    result.push(a);
    return result;
  }
}
