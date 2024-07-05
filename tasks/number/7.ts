// Напишите функцию, которая принимает число и возвращает массив всех делителей этого
// числа

export function showAllDeviders(num: number): number[] {
  const limit: number = Math.round(Math.sqrt(num));
  const deviders: number[] = [num];
  for (let i = limit; i > 1; i--) {
    if (num % i === 0) {
      deviders.push(i);
      deviders.push(num / i);
    }
  }
  return [...deviders, 1].sort((a, b) => a - b);
}
