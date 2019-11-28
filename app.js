const os = require('os');
const fs = require('fs');


const genders = ["M", "F"], 
        maleNames = ["Adam", "Andrzej", "Bartek", "Marcin", "Zbyszek"], 
        femaleNames = ["Anna", "Basia", "Kasia", "Ola", "Zosia"], 
        lastNames = ["Kowalski", "Schmidt", "Nowak", "Johnson", "Williams"];

function randChoice(arr) {
    los = Math.floor((Math.random())*(arr.length-1)+0.5);
    return(arr[los]);
}

const people = [];

for (let i=0; i<20; i++) {
    let person = {};
    let gender = randChoice(genders);
    person.gender = gender;
    if (gender==="M") {
        person.name = randChoice(maleNames);
    } else {
        person.name = randChoice(femaleNames);
    }
    person.lastName = randChoice(lastNames);
    person.age = Math.floor((Math.random()) * (78-18)+18);
    person.email = person.name + '.' + person.lastName + '@gmail.com';
    people.push(person);
}
let data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

