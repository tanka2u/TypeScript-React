//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number;
age = 12;

let userName: string | string[];

userName = "Tanka";

let isInstructor: boolean;

isInstructor = true;

//More complex type

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Tanka",
  age: 32,
};

//person = {
// isEmployee: true
//};

let people: Person[];

//type inference

let course: string | number = "React - The Complete Guide";

course = 12341;

function add(a: number, b: number) {
  return a + b;
}

//Function & types

function print(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
