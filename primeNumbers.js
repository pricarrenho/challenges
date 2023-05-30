// ------------- Prime numbers up to 100 -------------
// return array of primes number

const numbersFromZeroToThousand = [...Array(101).keys()];

const isPrimerNumber = (value) => {
  if (value <= 1) return false;

  for (let index = 2; index < value; index++) {
    if (!(value % index)) {
      return false;
    }
  }

  return true;
};

const filterByPrime = (value) => {
  return value.filter((item) => isPrimerNumber(item));
};

console.log(filterByPrime(numbersFromZeroToThousand));
