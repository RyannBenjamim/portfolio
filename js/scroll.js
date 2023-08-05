// ----------- EVENTO DE SCROLL ----------- //
const headerTitle = document.querySelector('header nav h1')

document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;

  headerTitle.style.color = posicaoy === 0 ? "#00D2DF" : "transparent";
});