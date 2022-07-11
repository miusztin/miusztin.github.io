// console.error('app started');

// var myName = 'Tomita';
// var age = 3;

// console.info(myName);
// console.info(`My name is ${myName}, and I'm ${age} years old!`);
// age = 2;
// console.info(`My name is ${myName}, and I'm ${age} years old!`);
// age = 4;
// console.info(`My name is ${myName}, and I'm ${age} years old!`);

// // var jobTitle = '<span>Medic</span> generalist';

// var mottoElement = document.getElementById('motto');
// console.log(mottoElement);

// mottoElement.innerHTML += ' & ' + jobTitle;

// console.log(jobTitle);

// console.log(typeof document.getElementById);

function showHomePage() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('skills').style.display = 'none';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('languages').style.display = 'none';
}

function showSkillsPage() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('skills').style.display = 'block';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('languages').style.display = 'none';
}

function showProjectsPage() {
  document.getElementById('skills').style.display = 'none';
  document.getElementById('projects').style.display = 'block';
  document.getElementById('home').style.display = 'none';
  document.getElementById('languages').style.display = 'none';
}

function showLanguagesPage() {
  document.getElementById('skills').style.display = 'none';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('home').style.display = 'none';
  document.getElementById('languages').style.display = 'block';
}

showHomePage();
