import { countVowels } from "./1";
import { doUpper } from "./2";
import { doLower } from "./3";
import { isPalindrome } from "./5";
import { showReplaceSign } from "./6";
import { countWords } from "./7";

const str: string = "abcdefg";
const word: string = "abba";
const sentence: string = "Lorem ipsum dolor sit.";
console.group("\nstring group\n");
{
  console.log("countVowels:", countVowels(str));
  console.log("doUpper:", doUpper(str));
  console.log("doLower:", doLower(str));
  console.log("isPalindrome:", isPalindrome(word));
  console.log("showReplaceSign:", showReplaceSign(sentence));
  console.log("countWords:", countWords(sentence));
}
console.groupEnd();
