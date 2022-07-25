function hide(id) {
  console.log('hide', id);
  document.getElementById(id).style.display = 'none';
}
function show(id) {
  console.warn('show', id);
  document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
  hide('languages');
  hide('skills');
  hide('projects');
  hide('home');
}
let activePage = 'home';
function showPage(id) {
  hideAllPages();
  show(id);
  document.getElementById('menu-' + activePage).classList.remove('active');
  document.getElementById('menu-' + id).classList.add('active');
  activePage = id;
}
showPage(activePage);

// const pages = document.querySelectorAll('.page');
//1-varianta forEach
// function showPage(id) {
//   pages.forEach((page) => {
//     if (page.id === id) {
//       page.classList = 'page visible';
//     } else {
//       page.classList = 'page invisible';
//     }
//   });
// }
// showPage('home');

//2- varianta for of loop
// function showPage(id) {
//   for (let page of pages) {
//     if (page.id === id) {
//       page.classList = 'page visible';
//     } else {
//       page.classList = 'page invisible';
//     }
//   }
// }
// showPage('home');
