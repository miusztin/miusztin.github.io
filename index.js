console.error('app started');

var myName = 'Tomita';
var age = 3;

console.info(myName);
console.info(`My name is ${myName}, and I'm ${age} years old!`);
age = 2;
console.info(`My name is ${myName}, and I'm ${age} years old!`);
age = 4;
console.info(`My name is ${myName}, and I'm ${age} years old!`);

// var jobTitle = '<span>Medic</span> generalist';

var mottoElement = document.getElementById('motto');
console.log(mottoElement);

mottoElement.innerHTML += ' & ' + jobTitle;

console.log(jobTitle);

console.log(typeof document.getElementById);
