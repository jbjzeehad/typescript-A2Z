type user = {
  name: string;
  email: string;
};

interface admin extends user {
  adminlvl: number;
}

const customer: user = {
  name: "Rahim",
  email: "rahim@MediaList.com",
};

const superAdmin: admin = {
  name: "Karim",
  email: "karim@mail.com",
  adminlvl: 3,
};

console.log(customer);
console.log(superAdmin);
