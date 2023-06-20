/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

function firstOccurrence(haystack, needle) {
  if (typeof haystack !== "string" || typeof needle !== "string")
    return "Coloque um valor válido";

  const normalizedHaystack = haystack.toLowerCase();
  const normalizedNeedle = needle.toLowerCase();

  return normalizedHaystack.indexOf(normalizedNeedle);
}

const test1 = "sadbutsad";
const test2 = "sad";

const test3 = "leetcode";
const test4 = "leeto";

const test5 = "aaaaa";
const test6 = "bba";

console.log("teste 1", firstOccurrence(test1, test2));
console.log("teste 2", firstOccurrence(test3, test4));
console.log("teste 3", firstOccurrence(test5, test6));
