//Navigation Bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//Kommentarbox
const form = document.querySelector('form');
const commentsContainer = document.querySelector('#comments');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment').value.trim();

  if (comment === '') {
    alert('Bitte geben Sie einen Kommentar ein.');
    return;
  }

  // Kommentar-Element erstellen und hinzufügen
  const commentElement = document.createElement("p");
  commentElement.textContent = "User64352:" + " " + comment;
  commentElement.style.fontWeight = "bold";
  commentsContainer.appendChild(commentElement);

  // Textfeld leeren
  document.querySelector('#comment').value = '';
})
// Popup-Fenster
var modal = document.getElementById("meinModal");
  var btn = document.getElementById("beschreibung");
  var span = document.getElementsByClassName("modal-schließen")[0];
  
  btn.onclick = function() {
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