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
  document.getElementById('menu-' + activePage).classList.remove('active');
  // document.getElementById(activePage).style.display = 'none';
  document.getElementById('menu-' + nextPage).classList.add('active');
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById('top-menu-bar')
    .addEventListener('click', function (e) {
      if (e.target.matches('a')) {
        var id = e.target.id.substring(5);
        console.warn('click', id, e.target.matches('a'));
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
