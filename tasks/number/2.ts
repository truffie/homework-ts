// Напишите функцию, которая принимает число и возвращает true, если число является
// простым, и false в противном случае

export function isPrime(num: number): boolean {
  num = Math.abs(num);

  if (num < 3) {
    return true;
  }

  const limit : number = Math.sqrt(num);
  
  for(let i = 2; i <= limit; i++){
    if(num % i === 0){
      return false;
    }
  }

  return true;
}


