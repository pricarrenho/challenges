/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(value) {
  const library = ["[]", "{}", "()"];

  const result = value.split("").reduce((prev, current) => {
    if (!prev) return current;

    const size = prev.length;
    const match = prev[size - 1] + current;

    if (library.includes(match)) {
      return prev.slice(0, -1);
    }

    return prev + current;
  });

  return !result;
}

const test1 = "{}";
const test2 = "{}()[]";
const test3 = "{[()]}";
const test4 = "}{";
const test5 = "(]";
const test6 = "a[";
const test7 = "a";

console.log("teste 1", isValid(test1));
console.log("teste 2", isValid(test2));
console.log("teste 3", isValid(test3));
console.log("teste 4", isValid(test4));
console.log("teste 5", isValid(test5));
console.log("teste 6", isValid(test6));
console.log("teste 7", isValid(test7));
