// ------------- Validate Password -------------
// Bigger than 8 and smaller than 16
// Must have at least one uppercase letter, one lowercase letter, one number and one special character

const regexToFindNumbers = /[0-9]/;
const regexToFindWordInUpperCase = /[A-Z]/;
const regexToFindWordInLowerCase = /[a-z]/;
const regexToFindCharacter = /[!@#$&?]/;

const validatePassword = (value) => {
  if (value.length <= 8 || value.length >= 16) {
    return "Coloque entre 8 e 16 caracteres";
  }

  if (!regexToFindWordInUpperCase.test(value)) {
    return "Coloque pelo menos uma letra maiúscula";
  }

  if (!regexToFindWordInLowerCase.test(value)) {
    return "Coloque pelo menos uma letra minúscula";
  }

  if (!regexToFindNumbers.test(value)) {
    return "Coloque pelo menos um número";
  }

  if (!regexToFindCharacter.test(value)) {
    return "Coloque pelo menos um caráter especial(!@#$&?)";
  }

  return "Senha válida";
};

const test1 = "cinco"; //menos que 8 letras
const test2 = "dezesseis16000000"; //mais que 16 letras
const test3 = "dezesseis"; //não possui letra maiúscula
const test4 = "DEZESSEIS"; //não possui letra minúscula
const test5 = "Dezesseis"; //não possui número
const test6 = "Senhas010"; //não possui carácter especial
const test7 = "Senha!010"; //senha válida

console.log("teste1", validatePassword(test1));
console.log("teste2", validatePassword(test2));
console.log("teste3", validatePassword(test3));
console.log("teste4", validatePassword(test4));
console.log("teste5", validatePassword(test5));
console.log("teste6", validatePassword(test6));
console.log("teste7", validatePassword(test7));
