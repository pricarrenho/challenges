// ------------- Remove duplicated itens on array -------------
// Array of string and number only

const removeDuplicatedItens = (value) => {
  return value.filter((item, index) => value.indexOf(item) === index);
};

const test1 = ["Banana", "Maça", "Uva", "Banana", "Pera"];
const test2 = [1, 2, 1, 3, 4];

console.log("test1", removeDuplicatedItens(test1));
console.log("test2", removeDuplicatedItens(test2));
