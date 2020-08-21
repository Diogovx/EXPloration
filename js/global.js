document.querySelector("#icon").addEventListener('click',menuMudar);

function menuMudar() {
  var x = document.getElementById("Tnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
  return false;
}

// Quando o usuário rolar a página, execute navScroll
window.onscroll = function() {navScroll()};

// Pega a Nav
let navst = document.getElementById("Tnav");

//  the offset position of the navbar
let sticky = navst.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navScroll() {
  if (window.pageYOffset > sticky) {
    navst.classList.add("sticky");
  } else {
    navst.classList.remove("sticky");
  }
}

//document.querySelector("#btn_lg").addEventListener('click',modal_login);

let modal = document.getElementById("modal");

let btn = document.getElementById("btn_lg");

let span = document.getElementById("fechar");

btn_lg.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
  }
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
