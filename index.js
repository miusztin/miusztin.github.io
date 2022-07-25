function hide(id) {
  document.getElementById(id).style.display = 'none';
}
function show(id) {
  document.getElementById(id).style.display = 'block';
}

let activePage = 'home';
function showPage(nextPage) {
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove('active');
  document.querySelector(`a[data-page=${nextPage}]`).classList.add('active');

  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById('top-menu-bar')
    .addEventListener('click', function (e) {
      if (e.target.matches('a')) {
        var id = e.target.getAttribute('data-page');
        console.warn('click', id, e.target.matches('a'));
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

document.querySelector('a[data-page=home]');
