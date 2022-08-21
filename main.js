// data types: 
/* Strings, Numbers, Boolean, Null, undefined

    const name ='John';
    const age = 30;
*/

/* concatenation 
    console.log('My name is ' + name + ' and I am ' + age);
*/

/*  Template String 
    const hello = `My name is ${name} and I am ${age}`;
    console.log (hello);
*/

/* string properties and methods 
    const s = 'Hello World!';
    console.log(s.length);
    console.log(s.toLocaleUpperCase())
    console.log(s.substring(0,5).toUpperCase);
    console.log(s.split('')); */

//Converting a list into an array: BELOW 

/*
    const s = 'technology, computers, it, code';
    console.log(s.split(', '))
*/

// Arrays - variables that hold multiple values 

//Array constructors - not common
  /*
    const numbers = new Array(1,2,3,4,5);
    console.log(numbers);
  */
  /*
  const fruits = ['apples', 'oranges', 'pears', 10, true];
  */
    
   // fruits[3]='grapes';
// how to add to the end (push method)
   // fruits.push('mangos');

//how to add to beginning (unshift) 
/*    
    fruits.unshift('strawberries');
    console.log(fruits);
  */
//get rid of last item pop 
  //  fruits.pop();

//to see if it is array 
    /*
    console.log(Array.isArray(fruits));
    console.log(fruits);
    */
// to get the index of the array (where its located in the array)
/*
    console.log(fruits.indexOf('oranges'));
    console.log(fruits);
*/
//OBJECT LITERALS (key value pairs)
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st', 
        city: 'Boston', 
        state: 'MA'
    }
}
console.log(person.address.city);
*/
//destructuring 
   /* 
         const {firstName, lastName, address: {city}} = person;
        console.log(city);
    // add properties 

        person.email = 'john@gmail.com';
        console.log(person);
*/
/*
//Arrays of objects 
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: false
    },
]
console.log(todos);
*/
//grab meeting with boss 
//  console.log(todos[1].text);


//JSON (data format) - sending data to server in JSON format 

/*
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/
// LOOPS 

 //for 
   /*
        for(let i = 0; i < 10; i++){
        console.log(`For loop number: ${i}`);
         }
    */
// while 
    /*
        let i = 0;
        while(i < 10){
            console.log(`While loop number: ${i}`);
            i++;
        }
    */
// loop through arrays 
  //this is not the BEST way to do it. 
     /*
        for(let i = 0; i < todos.length; i++){
        console.log(todos[i].text);
         }
     */
/*
  // This method is preferred. (for of)
         for(let todo of todos){
            console.log(todo.text);
            console.log(todo.id);
         }
    // High-order array methods, good for any iteration with arrays 
    //forEach : loops through them 
         todos.forEach(function(todo) {
            console.log(todo.text);
         })
    //map : allow us to create a new array from an array 
    
         const todoText = todos.map(function(todo) {
             return todo.text;
          })
         console.log(todoText);
    // filter: allows us to create a new array based on a condition 

        const todoCompleted = todos.filter(function(todo) {
            return todo.isCompleted === true;
        // high order array methods 
         }).map(function(todo){
             return todo.text;
             })
        console.log(todoCompleted);
     */

     // CONDITIONALS 

   
     // else/if statements
     /*
     const x = 20;
     
     //suggested to always use === to always match the data types. 
     if(x===10){
        console.log('x is 10');
     } else if (x > 10){
        console.log('x is greater than 10')
     }
      else {
        console.log('x is less than 10');
     }
     */
     //example 2 : 
     /*
     const a = 4;
     const y = 11;
      
     if(a>5 || y > 10){
        console.log('a is more than 5 or y is more than 10');
     } 
     //turnary operator (shorthand if statement- used to assign variables based on a condition)
     const z = 10;
     //          condition if true if  false 
     const color = x > 10 ? 'red' : 'blue'
     console.log(color);
    */
     //SWITCHES - way to evaluate a condition 
    /*
     const x = 9;
     const color = 'green';
     switch(color){
        case 'red':
            console.log('color is red');
            break;
        case 'blue' : 
            console.log('color is blue');
            break;
        default: 
        console.log('color is NOT red or blue');
        break;
     }
    
     // FUNCTIONS 

     function addNums(num1 =1, num2 = 1){
        return num1+num2;
     }
     console.log(addNums());

     // addNums(); ---> results in NaN (not a number) if the values arent declared in the function statement

    
     // arrow functions 
    /*
     const addNums = (num1 = 1, num2 = 1) => {
        return num1 + num2; 
     }
     console.log(addNums(5,5));
     */
     // SHORT HAND FOR THE ABOVE STATEMENT 
     /*
     const addNums = (num1 = 1, num2 = 1) => num1 + num2;

     console.log(addNums(5,5));
     
     // OOP (object oriented programming)
     // constructor function
     function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        // STRING: this.dob = dob;
        // DATE CONSTRUCTOR below 
        this.dob = new Date(dob);
        //methods 
        /*
        this.getBirthYear = function(){
            return this.dob.getFullYear();
        }
        this.getFullName = function(){
            return `${this.firstName} ${this.lastName}`;
        }
        */

     
     // PROTOTYPES for getBirthYear and getFullName
     /*
     Person.prototype.getBirthYear = function(){
        return this.dob.getFullYear();
     }
     Person.prototype.getFullName = function (){
        return `${this.firstName} ${this.lastName}`;
     }
     
     // instantiate an object 

        const person1 = new Person('John', 'Doe','4-3-1980');
        // date above is a 'string' turn to date object by making date constructor 
        const person2 = new Person('Mary', 'Smith','8-3-1960');

*/
       // This will show date as an actual date: Wed Aug 03 1960 ----->
       //  --->  console.log(person2.dob);
       //console log for the methods above 
        /* console.log(person1.getBirthYear());
           console.log(person1.getFullName());
         */
        // console log for prototypes 
        /*
        console.log(person2.getFullName());
        console.log(person1);
        */

// Class 
/*
class Person {
    constructor (firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const person1 = new Person('John', 'Doe','4-3-1980');
        // date above is a 'string' turn to date object by making date constructor 
        const person2 = new Person('Mary', 'Smith','8-3-1960');
console.log(person2.getFullName());
        console.log(person1);
*/

// DOM (document object model)
/*

// SINGLE ELEMENT SELECTORS 
    //can be written like this 
console.log(document.getElementById('my-form'));
    // or like this 
const form = document.getElementById('my-form');
console.log(form);
   // query selector 
   console.log(document.querySelector('.container'));
// MULTIPLE ELEMENT SELECTORS
console.log(document.querySelectorAll('.item'));

// older method that you would have to convert to an array to get array methods on it. Not recommended 

//  console.log(document.getElementsByClassName('item'));
//  console.log(document.getElementsByTagName('li'));

// how to loop through 

const items = document.querySelectorAll('.item'); 

items.forEach((item) => console.log(item));
*/


// DOM MANIPULATION
/*
const ul = document.querySelector('.items'); 

ul.remove ();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background='red';
*/
// EVENTS 
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    //prevent default behavior so it submit btn does not rapidly flash 
    console.log('click')
    console.log(e.target.className);
    document.querySelector('#my-form').
    e.preventDefault();
    // mouseover event to change when you are over the item with your mouse. mouseout reacts when you leave the item 
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
//form validation, doesnt submit unless the name AND email are filled out. 
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields 
        nameInput.value = '';
        emailInput.value= '';
    }
}