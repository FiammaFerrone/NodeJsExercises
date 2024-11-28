/** @format */

// La luckyDrawfunzione restituisce una promessa.
// Crea una catena di promesse in cui la funzione viene chiamata per ciascuno dei giocatori:
// Joe, Caroline e Sabrina
// Disconnettere il valore risolto per ogni promessa e gestire eventuali rifiuti di promessa nella catena.

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe").then((result) => {
  console.log(result);
});
luckyDraw("Caroline").then((result) => {
  console.log(result);
});
luckyDraw("Sabrina")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error, "msg d'errore");
  });
