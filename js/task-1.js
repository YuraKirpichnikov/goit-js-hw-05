const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@adex.com",
    balance: 2811,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@ux.com",
    balance: 3821,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@wide.com",
    balance: 3793,
  },
  {
    name: "Elma Head",
    email: "elmahead@xyz.com",
    balance: 2278,
  },
  {
    name: "Carey Barr",
    email: "careybarr@abc.com",
    balance: 3951,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@test.com",
    balance: 1498,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@mail.com",
    balance: 2764,
  },
];

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));