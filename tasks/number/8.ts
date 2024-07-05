// Напишите функцию, которая принимает число n и возвращает двумерный массив,
// представляющий треугольник чисел Флойд до n строк

export function doFloydTriangle(num: number): number[][] {
  const triangle: number[][] = [];
  let counter = 1;
  for (let i = 1; i <= num; i++) {
    const el = [];
    while (el.length < i) {
      el.push(counter);
      counter++;
    }
    triangle.push(el);
  }
  return triangle;
}
