import { Car } from "./Car.js";
import { Cats } from "./Cats.js";
import { Person } from "./Person.js";

let name = "Sabin";
const birthDate = new Date(2000, 9, 29);

console.log(name);
console.log(birthDate);

function add(a, b) {
  return a + b;
}

const result = add(1, "robert");

console.log(result);

let cat1 = {
  name: "Monty",
  color: "grey",
  gender: "male",
  getNameColor: function () {
    return this.name + "" + this.color;
  },
};

console.log(cat1);

console.log(cat1.getNameColor());

const person = {
  myfirstName: "Sabin",
  mylastname: "Bhandari",
};

const { myfirstName, mylastname } = person;

console.log(myfirstName, mylastname);

function AreaOfRectangle(a, b) {
  console.log("area is " + a * b);
}

AreaOfRectangle(5, 10);

function Distance(s, t) {
  let dist = s * t;
  console.log("You have travelled " + dist + " km");
}

Distance(7, 7);

let Calculator = {
  name: "Rimuru",
  Distance: Distance,
  AreaOfRectangle: AreaOfRectangle,
};

console.log(Calculator);

Calculator.AreaOfRectangle(10, 10);
console.log(Calculator.Distance(10, 10));

//class

const person1 = new Person("sabin", " watching anime");
person1.greet();

// Cat exercise

const cat = new Cats("billi", "green", "jangli");
cat.getInfo();

cat.updateName("beluga");
cat.getInfo();

//Car exercise

const car = new Car("Jaguar", "1997", "XJ 40");
const another_car = new Car("Nissan", "2000", "GT-R");
car.getInfo();
another_car.getInfo();

console.log(car.start());
console.log(car.stop());

console.log(another_car.start());
console.log(another_car.stop());

//Arrays

let myOwnArray = [
  "slime",
  "vinlad saga",
  "dungeonMeshi",
  "hunterXhunter",
  "frieren",
];

console.log(myOwnArray[0]);

let index = myOwnArray.indexOf("frieren");
console.log(index);

let another_index = myOwnArray.indexOf("naruto");
console.log(another_index);

myOwnArray.push("Mushoku Tensei");

console.log(myOwnArray);

let mynewArray = myOwnArray.slice(0, 3);
console.log(mynewArray);

// another array exercise

const first_person = {
  firstname: "Uzumaki",
  lastname: "Naruto",
  email: "naruto.uzumaki@gmail.com",
};

const second_person = {
  firstname: "Obito",
  lastname: "Uchiha",
  email: "obito.uchiha@gmail.com",
};

let another_array = [];
another_array.push(first_person);
another_array.push(second_person);

console.log(another_array);

console.log(another_array[0].email);

// Student Grades Management

let first_student = {
  name: "good student",
  id: "32",
  grades: [7, 10, 12],
};

console.log(first_student);

function addGrade(student, grade) {
  return student.grades.push(grade);
}

function updateStudentName(student, name) {
  return (student.name = name);
}

addGrade(first_student, 4);
console.log(first_student);

updateStudentName(first_student, "bad student");
console.log(first_student);
//getelementById

const box = document.getElementById("box");
box.addEventListener("click", function () {
  if (box.style.background === "red") {
    box.style.background = "blue";
  } else {
    box.style.background = "red";
  }
});

document.getElementById("newToDoText").addEventListener("keydown", (event) => {
  if (event.key === "Delete") {
    CreateToDo();
  }
});
document.getElementById("add_to-dO").addEventListener("click", function () {
  CreateToDo();
});

function CreateToDo() {
  const newText = document.getElementById("newToDoText").value;
  const newLi = document.createElement("li");
  newLi.textContent = newText;

  document.getElementById("todolist").appendChild(newLi);
}
