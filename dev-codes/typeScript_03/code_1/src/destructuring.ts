//object destructuring

const user = {
  id: 345,
  name: {
    firstName: "Jubayer",
    middleName: "Bin",
    lastName: "Jaman",
  },
  contactNo: "01798329264",
  address: "Uganda",
};

const {
  contactNo,
  name: { middleName },
} = user;

//array destructuring

const myFriends = ["Rahim", "Karim", "Lorim", "Borim", "Norim", "Shorim"];

const [, , bestFriend, ...rest] = myFriends;
