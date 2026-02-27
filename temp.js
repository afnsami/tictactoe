

//(REGULAR FUNCTION)
function regularFuncion() {
    console.log("It is from a regular function");
}
regularFuncion();



//(OBJECTS)
//Objects are variables that can store both: *Values and Functions
const character = {
  firstName: "Clark",
  lastName: "Kent",
  age: 33,
  eyeColor: "blue",
};

//(OBJECT LITERAL)
//{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};



//(OBJECT METHODS)
//Methods are actions that can be performed on objects
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};




//(OBJECT CONSTRUCTOR)
//Sometimes we need to create many objects of the same type.
//To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");