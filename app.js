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
  //commentElement.style.fontWeight = "bold";
  commentsContainer.appendChild(commentElement);

  // Textfeld leeren
  document.querySelector('#comment').value = '';
});
