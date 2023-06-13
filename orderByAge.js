// Order by age

const sortByAge = (value) => {
  return value.sort((a, b) => {
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
  });
};

const sortByAgeInDescendingOrder = (value) => {
  return sortByAge(value).reverse();
};

const persons = [
  {
    name: "John Doe",
    age: 25,
    city: "New York",
    isStudent: true,
    favoriteColor: "blue",
  },
  {
    name: "Jane Smith",
    age: 30,
    city: "Los Angeles",
    isStudent: false,
    favoriteColor: "green",
  },
  {
    name: "Michael Johnson",
    age: 40,
    city: "Chicago",
    isStudent: false,
    favoriteColor: "red",
  },
  {
    name: "Emily Brown",
    age: 28,
    city: "San Francisco",
    isStudent: true,
    favoriteColor: "purple",
  },
  {
    name: "David Wilson",
    age: 35,
    city: "Seattle",
    isStudent: false,
    favoriteColor: "yellow",
  },
];

console.log(sortByAge(persons));
console.log(sortByAgeInDescendingOrder(persons));
