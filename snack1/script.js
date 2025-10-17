console.log("its works");

/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

/* 
TOOLS:
-crare un array di oggetti (biciclette)
-ogni bicicletta deve avere un nome e un peso proprio
-stampare l'arrey per verificare che sia corretto
-trovare la bici con il peso minore
-stampare il risultato nell html con il DOM
*/

//crare un array di oggetti 
const biciclette = [
  //ogni bicicletta deve avere un nome e un peso
  { nome: "bici rossa", peso: 10 },
  { nome: "bici bianca", peso: 8 },
  { nome: "bici rosa", peso: 12 },
  { nome: "bici nera", peso: 7 },
  { nome: "bici lilla", peso: 20 },
  { nome: "bici blu", peso: 14 },
];

// stampare l'array per verificare sia corretto
console.log(biciclette);

// trovare la bici con il peso minore
let biciLeggera = biciclette[0];
for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < biciLeggera.peso) {
    biciLeggera = biciclette[i];
  }
}
//stampare in console il risultato della bici piu leggera
console.log(biciLeggera);

// stampare il risultato in html
const risultato = document.getElementById("risultato");
risultato.innerText = `la piu leggera è la ${biciLeggera.nome} e pesa ${biciLeggera.peso} kg`;
