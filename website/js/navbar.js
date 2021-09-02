function toggler_visivel() {
    return window.getComputedStyle(document.getElementById('toggler'), null).display == "block" ? true : false;
};
  
function navbar_aberta() {
  return document.getElementById('toggler').classList.contains('collapsed') ? false : true;
};

function esconder(navlink = true) {
  if ((toggler_visivel() && navbar_aberta())) {
    const bsCollapse = new bootstrap.Collapse(document.getElementById("navbarNav"));
  }
};

window.onclick = e => {
  if ((toggler_visivel() && navbar_aberta() && !e.target.className.includes('nav'))) {
    const bsCollapse = new bootstrap.Collapse(document.getElementById("navbarNav"));
  }
};