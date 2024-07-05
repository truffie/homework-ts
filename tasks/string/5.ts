// Напишите функцию, которая принимает строку и возвращает true, если строка является
// палиндромом, и false в противном случае.
const word: string = "abbbba";

export function isPalindrome(str: string): boolean {
  for (let i = 0; i < Math.floor(str.length / 2 - 1); i++) {
    if (str.length - 1 - str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}
