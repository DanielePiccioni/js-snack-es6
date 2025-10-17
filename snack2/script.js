console.log("its works");

/* 
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

/* 
TOOLS:
-creaare un array di oggetti per le squadre di calcio
-ogni oggetto deve avere nome, punti fatti e falli subiti
-prompt con il nome da compliare il resto set a 0
-stampare l'array per verificare se è corretto
- generare numeri random per punti fatti e subiti
-creare un array che contenga solo nome e falli subiti
-stampare il risultate in console
*/


//array con oggetti delle squadre 
const squadre = [
  { nome: "inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "juve", puntiFatti: 0, falliSubiti: 0 },
  { nome: "roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "atalanta", puntiFatti: 0, falliSubiti: 0 },
  { nome: "verona", puntiFatti: 0, falliSubiti: 0 },
];
//controllo se l'array funziona
console.log(squadre);


// generazione numeri randomici per punti e falli
for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntiFatti = Math.floor(Math.random() * 100) + 1;
  squadre[i].falliSubiti = Math.floor(Math.random() * 100) + 1;
}

//creare un array per solo nomi e falli 
const minimizzato = [];

for (let i = 0; i < squadre.length; i++) {
  minimizzato.push({
    nome: squadre[i].nome,
    falliSubiti: squadre[i].falliSubiti
  });
}

// stampare il risultato in console
console.log(minimizzato);
