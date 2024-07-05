// Напишите функцию, которая принимает два числа и возвращает наименьшее общее
// кратное этих чисел.

import { showGcd } from "./4";

export function showLcm(a: number, b: number): number{
  return a * b / showGcd(a, b);
}