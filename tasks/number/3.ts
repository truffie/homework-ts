// Напишите функцию, которая принимает число и возвращает сумму его цифр
export function toSumDigits(num: number): number {
  return eval(num.toString().split("").join("+"));
}
