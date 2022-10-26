const userFullName = prompt("Inserisci il tuo nome intero ");
const userColor = prompt("Inserisci il tuo colore preferito ");
const userNumber = prompt("Inserisci numero 21 ");


const h2NomeUtente = document.getElementById("nome_utente");

h2NomeUtente.innerHTML = userFullName;

const h2ColoreUtente = document.getElementById("colore_utente");

h2ColoreUtente.innerHTML = userColor;

const h2NumberUtente = document.getElementById("number_utente");

h2NumberUtente.innerHTML = userNumber;

const smallcontainer = document.getElementById("small_container");

small_container.innerHTML = `${userFullName}  ${userColor}  ${userNumber}`

