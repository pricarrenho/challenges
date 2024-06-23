/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// var addBinary = function (a, b) {
//   const newA = a.split("");
//   const newB = b.split("");

//   const higher = newA.length > newB.length ? newA : newB;

//   if (a === "0" && b === "0") return "0";

//   let result = "";
//   let rest = "0";

//   for (let index = 1; index < higher.length + 1; index++) {
//     const nA = Number(newA[newA.length - index] || 0);
//     const nB = Number(newB[newB.length - index] || 0);
//     const nRest = Number(rest);

//     if (nA + nB + nRest === 1) {
//       result = `1${result}`;
//       rest = "0";
//     } else if (nA + nB + nRest === 2) {
//       result = `0${result}`;
//       rest = "1";
//     } else if (nA + nB + nRest === 3) {
//       result = `1${result}`;
//       rest = "1";
//     } else {
//       result = `0${result}`;
//       rest = "0";
//     }
//   }

//   if (rest === "1") {
//     result = `1${result}`;
//   }

//   return result;
// };

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));
console.log(addBinary("100", "110010"));
