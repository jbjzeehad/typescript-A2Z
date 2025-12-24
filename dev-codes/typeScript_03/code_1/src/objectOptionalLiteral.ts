//  object

const user1: {
  frstName: string;
  middleName: string;
  lastName: string;
} = {
  frstName: "Mashle",
  middleName: "In",
  lastName: "Hanma",
};

// optional

const user2: {
  frstName: string;
  middleName?: string;
  lastName: string;
} = {
  frstName: "Mashle",
  lastName: "Hanma",
};

// leteral

const user3: {
  job: "SWE";
  frstName: string;
  middleName?: string;
  lastName: string;
} = {
  job: "SWE",
  frstName: "Mashle",
  lastName: "Hanma",
};

//  access modifier

const user4: {
  readonly job: "SWE";
  frstName: string;
  middleName?: string;
  lastName: string;
} = {
  job: "SWE",
  frstName: "Mashle",
  lastName: "Hanma",
};
