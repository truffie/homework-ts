import { doFactorial } from "./1";
import { isPrime } from "./2";
import { toSumDigits } from "./3";
import { showGcd } from "./4";
import { showLcm } from "./5";
import { showListNumber } from "./6";
import { showAllDeviders } from "./7";
import { doFloydTriangle } from "./8";

console.group('\nnumber group\n');
{
console.log('doFactorial:', doFactorial(5));
console.log('isPrime:', isPrime(1009));
console.log('toSumDigits (eval):', toSumDigits(1234));
console.log('showGcd:', showGcd(18, 12));
console.log('showLcm:', showLcm(12, 18));
console.log("showListNumber (recursive):", showListNumber(5));
console.log("showAllDeviders:", showAllDeviders(5));
console.log("doFloydTriangle:", doFloydTriangle(4));
}
console.groupEnd();
