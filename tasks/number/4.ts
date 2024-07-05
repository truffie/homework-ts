// Напишите функцию, которая принимает два числа и возвращает наибольшее общее
// делимое этих чисел

export function showGcd(a: number, b: number): number {
  if (a !== 0 && b === 0) {
    return a;
  }
  if (a === 0 && b !== 0) {
    return b;
  }
  if (a >= b) {
    return showGcd(b, a % b);
  } else {
    return showGcd(a, b % a);
  }
}
