// Напишите функцию, которая принимает число и возвращает его факториал

export function doFactorial(num: number): number {
  if (num === 1) {
    return num;
  } else {
    return num * doFactorial(num - 1);
  }
}
