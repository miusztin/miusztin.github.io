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

function hidePage(id) {
  console.log('hide', id);
  document.getElementById(id).style.display = 'none';
}
function showPage(id) {
  console.warn('show', id);
  document.getElementById(id).style.display = 'block';
}

function showHomePage() {
  hidePage('languages');
  hidePage('skills');
  hidePage('projects');
  showPage('home');
}

function showSkillsPage() {
  hidePage('home');
  hidePage('projects');
  hidePage('languages');
  showPage('skills');
}

function showProjectsPage() {
  showPage('projects');
  hidePage('home');
  hidePage('languages');
  hidePage('skills');
}

function showLanguagesPage() {
  hidePage('home');
  hidePage('projects');
  hidePage('skills');
  showPage('languages');
}

showHomePage();
