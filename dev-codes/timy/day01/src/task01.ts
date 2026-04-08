// interface

interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
  category: {
    id: number;
    title: string;
  };
  tags: string[];
}

// using interface

const customerProduct: Product = {
  id: 111,
  name: "VSCode",
  price: 250,
  description: "Very Good",
  category: {
    id: 11101,
    title: "tools",
  },
  tags: ["tools", "code", "dev"],
};

console.log(customerProduct.name);
