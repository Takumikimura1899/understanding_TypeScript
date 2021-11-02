const person: { name: string; age: number; hobbies: string[] } = {
  name: 'taku',
  age: 28,
  hobbies: ['sports', 'Cooking'],
};

let favoriteActivities: (string | number)[];
favoriteActivities = ['Sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

type Product = {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
};

const product: Product = {
  id: 'aaa111',
  price: 10,
  tags: ['good', 'bad'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

const {
  id,
  tags: [first],
  details: { title },
} = product;

const {
  tags: [, ff],
} = product;

console.log(id, first, title, ff);
