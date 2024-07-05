import { doubledArray } from "./1";
import { showUniqueNumbers } from "./10";
import { sortBySign } from "./11";
import { countMostOftenWord } from "./12";
import { sortLengthDesc } from "./2";
import { countAvg } from "./3";
import { sortElLength } from "./4";
import { showEven } from "./5";
import { doSum } from "./6";
import { doPow } from "./8";
import { toSplitComma } from "./9";

const numArray: number[] = [1, 2, 3, 4, 5];
const secNumArray: number[] = [1, 1, 2, 3, 4, 4, 5];
const strArray: string[] = ["abcd", "cba", "bcadefg", "ba", "a", "dbcaefgh", "abcde"];

console.group("\narray group\n");
{
  console.log(`init values\nnumArray: ${numArray}\nstrArray: ${strArray}\nSecNumArray: ${secNumArray}\n`);

  console.log("doubledArray:", doubledArray(numArray));
  console.log("countAvg:", countAvg(numArray));
  console.log("showEven:", showEven(numArray));
  console.log("doSum:", doSum(numArray));
  console.log("doPow:", doPow(numArray));
  console.log("showUniqueNumbers:", showUniqueNumbers(secNumArray));

  console.log("sortLengthDesc:", sortLengthDesc(strArray));
  console.log("sortElLength(greater than 5):", sortElLength(strArray));
  console.log("toSplitComma:", toSplitComma(strArray));
  console.log("sortBySign:", sortBySign(strArray, "b"));
  console.log("countMostOftenWord:", countMostOftenWord(['lemon', 'banana', 'apple', 'banana', 'apple', 'apple']));
}
console.groupEnd();
