function fizzBuzz(value) {
  if (typeof value !== "number") return "Coloque um número";
  if (!Number.isInteger(value)) return "Coloque um número inteiro";

  let arrayOfValues = [value];

  while (value !== 1) {
    value = value - 1;

    arrayOfValues = [...arrayOfValues, value];
  }

  const isFizzBuzz = arrayOfValues.reverse().map((item) => {
    const fizz = !(item % 3);
    const buzz = !(item % 5);
    const fizzBuzz = fizz && buzz;

    if (fizzBuzz) {
      item = "FizzBuzz";
    } else if (buzz) {
      item = "Buzz";
    } else if (fizz) {
      item = "Fizz";
    }

    return item.toString();
  });

  return isFizzBuzz;
}

const test1 = 3;
const test2 = 5;
const test3 = 15;
const test4 = 17.8;
const test5 = "x";

console.log("teste1", fizzBuzz(test1));
console.log("teste2", fizzBuzz(test2));
console.log("teste3", fizzBuzz(test3));
console.log("teste4", fizzBuzz(test4));
console.log("teste5", fizzBuzz(test5));
