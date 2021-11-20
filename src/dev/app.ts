type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface Admin  {
//   name: string;
//   privileges:string[]
// }

// interface Employee  {
//   name:string;
//   startDate:Date;
// }

// interface ElevatedEmployee extends Admin,Employee {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result2 = add('Hello', 'TypeScript');
result2.split('');

const fetchedUserData = {
  id: 'u1',
  name: 'user1',
  job: {
    title: 'Developer',
    description: 'TypeScript',
  },
};

console.log(fetchedUserData?.job?.title);

const userInput2 = undefined;
const storedData = userInput2 ?? 'DEFAULT';
console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  if ('privileges' in emp) {
    console.log('Privileges:' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date:' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('運転中...');
  }
}

class Track {
  drive() {
    console.log('トラックを運転中...');
  }

  loadCargo(amount: number) {
    console.log('荷物を載せています...' + amount);
  }
}

type Vehicle = Car | Track;

const v1 = new Car();
const v2 = new Track();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('移動速度:' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById(
  'user-input'
) as HTMLInputElement;

userInputElement.value = 'こんにちは';

interface ErrorContainer {
  // {email:'正しいメールアドレスではありません',username:'ユーザー名に記号を含める事は出来ません'}
  [prop: string]: string;
}

// 1もstringとして扱われる
// 何個入ってても良い。しかしstring:stringである必要がある。
const errorBag: ErrorContainer = {
  1: '正しいメールアドレスではありません',
  username: 'ユーザー名に記号を含めることは出来ません',
  // id:2
};
