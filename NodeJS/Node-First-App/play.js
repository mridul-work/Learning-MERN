let name = 'Mridul';
const age = 24;
console.log(`My name is ${name} and I am ${age} years old.`);

function greet(userName, userAge) {
    return ("Hello, my name is " + name + " and I am " + age +" years old.");
    // return ("Hello, my name is " + userName +" and I am " + userAge + " years old.");
}           

console.log(greet(name, age));

const person = {
    name: 'Mridul',
    age: 24,
    greet: () => {
        console.log('Hello, I am '+ name + ' and I am '+ age + ' years old.');
    }
};

const printname = ({name, age}) => {
    console.log(name+' '+age);
};

printname(person);

const hobbies = ['Reading', 'Traveling', 'Coding'];
const copied = hobbies.slice(); // old way to copy an array
const copied2 = [...hobbies]; // modern way to copy an array
console.log(copied, copied2);

