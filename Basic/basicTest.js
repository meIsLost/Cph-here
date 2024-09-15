import { Car } from "./Car.js";
import { Cats } from "./Cats.js";
import { Person } from "./Person.js";
import Books from "./Books.js";

//ClassWorks
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

//FUNCTIONS & OBJECTS
// Create a javascript function that takes firstname and lastname as 2 parameters and
// uses console.log() to output the person's name.

const person = {
  myfirstName: "Sabin",
  mylastname: "Bhandari",
};

const { myfirstName, mylastname } = person;

console.log(myfirstName, mylastname);


// Create a function that calculates the area of a rectangle. The function should return
// the result. Test that it works

function AreaOfRectangle(a, b) {
  console.log("area is " + a * b);
}

AreaOfRectangle(5, 10);


// Create a function that takes speed and time as 2 parameters and calculates and
// returns the distance.

function Distance(s, t) {
  let dist = s * t;
  console.log("You have travelled " + dist + " km");
}

Distance(7, 7);


// Create an object called calculator with the name of the owner (eg. Your name) and
// modify your code so the 3 previous functions are attached to the object.

let Calculator = {
  name: "Rimuru",
  Distance: Distance,
  AreaOfRectangle: AreaOfRectangle,
};

console.log(Calculator);

Calculator.AreaOfRectangle(10, 10);
console.log(Calculator.Distance(10, 10));

//Classes

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

//  Array exercise 2

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

//Loops And Arrays

const numbers = [4, 7, 5, 6, 2, 9];
let sum = 0;
for (let x of numbers) {
  sum = sum + x;
}
console.log("the result is" + sum);

const array = ["Peter", 7, "Marianne", true, "Helle", 8];

for (let element_array of array) {
  console.log(element_array + " is a " + typeof element_array);
}

// Loops and Objects
const book = [
  {
    title: "book 1",
    author: "good author",
  },
  {
    title: "book 2",
    author: "bad author",
  },
];

const good_books = [
  new Books("book3", "very good author"),
  new Books("book4", "best author"),
];

for (let book of good_books) {
  var newLi = document.createElement("LI");
  var text = document.createTextNode(`${book.title} by ${book.author}`);
  newLi.appendChild(text);
  document.getElementById("Booklist").appendChild(newLi);
}

//IF ELSE
//Create a function, findLargest, that takes 4 numbers as 4 parameters and returns
//the largest of the 4 numbers.

const largest = (num1, num2, num4, num5) => {
  let largest_num = num1;

  if (num2 > largest_num) {
    largest_num = num2;
  }
  if (num4 > largest_num) {
    largest_num = num4;
  }
  if (num5 > largest_num) {
    largest_num = num5;
  }

  return largest_num;
};

console.log(largest(-200, 6, 18, 15));


//Create a function that takes 3 numbers as 3 parameters. The first parameter is the
//number to check. The 2nd and 3rd parameter is a range (from and to). If the first
//parameter is within the range of the range it should return true and false if not.

const fromTo = (num1, num2, num4) => {
  if (num1 > num2 && num1 < num4) {
    return true;
  } else {
    return false;
  }
};

console.log(fromTo(80, 78, 99));

//EXERCISE: HIGHER OR LOWER


let random_num = Math.floor((Math.random() * 10) + 1);
console.log(random_num);

let count = 0;

document.getElementById("numberSender").addEventListener("click",function () {
  count = count + 1;
  RandomSelector();
});

function RandomSelector(){
let incoming_num =  document.getElementById("nawmbertaker").value
  if(incoming_num > random_num){
    alert("Number is not correct, guess again. Hint : Number is lesser than the guess.")
  }else if (incoming_num <random_num){
    alert("Number is not correct, guess again. Hint : Number is greater than the guess.")
  }
  else{
    alert("Number was correct, you are a lucky human. You guessed it on "+ count + " time/s." )
  }
}


//DOM Events

//ClassWork - Color Changing Box 

const box = document.getElementById("box");
box.addEventListener("click", function () {
  if (box.style.background === "red") {
    box.style.background = "blue";
  } else {
    box.style.background = "red";
  }
});

// Exercise – Show / Hide

let msgSelector = document.getElementById("hoverMe")
let hiddenMsgSelector = document.getElementById("hiddenMesses")
msgSelector.addEventListener("mouseover", (event) =>{
  hiddenMsgSelector.classList.remove("hidden")
  hiddenMsgSelector.classList.add("visible")
});

msgSelector.addEventListener("mouseout", (event) =>{
  hiddenMsgSelector.classList.remove("visible")
  hiddenMsgSelector.classList.add("hidden")
});


//ClassWork - ToDo List

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


//Extra Exercise with dropdown thingies
document.getElementById('itemSelect').addEventListener('change', function() {
  var selectedItem = this.value;
  var itemList = document.getElementById('itemList');

  if (selectedItem) {
    var items = Array.from(itemList.children);
    var existingItem = items.find(item => item.getAttribute('data-value') === selectedItem);
      
      if (existingItem) {
          itemList.removeChild(existingItem);
      } else {
          var newItem = document.createElement('li');
          newItem.textContent = selectedItem;
          newItem.setAttribute('data-value', selectedItem);
          itemList.appendChild(newItem);
      }
      this.value = '';
  }
});