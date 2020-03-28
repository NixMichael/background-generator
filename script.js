let bg = document.querySelector("body");
let colorA = document.querySelector(".color1");
let colorB = document.querySelector(".color2");
let title = document.querySelector("h1");
let x = 0;
let users = [];

console.log(users);

class userDb {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

function addUser (){
    console.log(x);
    let userName = prompt("Username: ");
    let userPW = prompt("Password: ");

    users[x] = new userDb(userName,userPW);
    x++;
}


function validateUser(userName, userPW){
    for (c=0; c<users.length; c++){
        if (userName === users[c].username && userPW === users[c].password){
            return true;
        }
    }
    return false;
}

function logIn(){

    let userName = prompt("Username: ");
    let userPW = prompt("Password: ");

    if (validateUser(userName, userPW)) {
        title.textContent = "WELCOME";
        bg.style.background = "green";
    } else {
        title.textContent = "NO ENTRY";
        bg.style.background = "red";
    }

}

/*if (userDb.username === userName && userDb.password === userPW){
    console.log("You're in!");
} else {
    console.log("Nope");
}*/


function randomColors(){
    hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let color = "#";
    for(let i=0; i<6; i++){
        color += hexVal[Math.floor(Math.random() * 16)];
    }
    return color;
}

function initialColors(){
    colorA.value = randomColors();
    colorB.value = randomColors();
    bgColor();
}

function bgColor() {
    bg.style.background = `linear-gradient(to right, ${colorA.value}, ${colorB.value})`;
    title.style.color = randomColors();
}

let newFun = (a) => console.log(a * 10);

newFun(10);

colorA.addEventListener("input", bgColor);
colorB.addEventListener("input", bgColor);

document.addEventListener("DOMContentLoaded", initialColors);
document.querySelector(".addUser").addEventListener("click", addUser);
document.querySelector(".logIn").addEventListener("click", logIn);



class Obj1 {
    constructor(name, age, job){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

class Obj2 extends Obj1 {
    constructor(name, age, job){
    super(name, age, job)
    }
sound() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old and I am a ${this.job}.`);
                }
}

const bob = new Obj2('Mike', 24, 'Plumber');

bob.sound();


class NewObject {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

class Testing extends NewObject {
    constructor(name,age,job){
        super(name,age);
        this.job = job;
    }
    extra() {
        console.log(`Hello ${this.name} you are a ${this.age} year old ${this.job}`);
    }
}

let Timothy = new Testing('Tim',22,'Carpenter');

class Burger {
    constructor(patty, salad, sauce){
        this.patty = patty;
        this.salad = salad;
        this.sauce = sauce;
    }
    burgerDesc() {
        console.log(`I have a ${this.patty} burger with ${this.salad} and ${this.sauce}`);
    }
}

beyondBurger = new Burger('Beyond', 'Lettuce', 'salad cream');

beyondBurger.burgerDesc();