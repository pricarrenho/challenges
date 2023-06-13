/*
Pagination
example: X items, Y per page, offset, total pages

X: 100 posts
Y: 10 per page

Turn back:
total pages
the pages
*/

function pagination(itens, limitItens, currentPage) {
  const totalPages = Math.ceil(itens.length / limitItens);
  const itensPerPage = itens.slice(
    (currentPage - 1) * limitItens,
    currentPage * limitItens
  );

  return {
    totalPages,
    currentPage,
    itensPerPage,
  };
}

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Henry",
  "Isabella",
  "Jack",
  "Katherine",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Penelope",
  "Quinn",
  "Ryan",
  "Sophia",
  "Thomas",
  "Uma",
  "Victor",
  "Willow",
  "Xander",
  "Yara",
  "Zoe",
];

const arrayOfItens = [...Array(100).keys()];

console.log(pagination(arrayOfItens, 6, 4));
