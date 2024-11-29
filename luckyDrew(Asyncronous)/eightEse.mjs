/** @format */
// Create agetResults function that uses async and await.
// Inside of the function,call the luckyDraw function for each of the players:
// Tina, Jorge, Julien
// Log out the resolved value for each promise and handle any promise rejections.

import { error } from "console";

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

async function getResult() {
  try {
    let result = await luckyDraw("Tina");
    console.log(result);
    result = await luckyDraw("Jorge");
    console.log(result);
    result = await luckyDraw("Julien");
    console.log(result);
  } catch (Error) {
    console.error(error.message);
  }
}
getResult();
