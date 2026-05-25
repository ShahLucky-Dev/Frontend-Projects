let music = new Audio("music.mp3");
let pop = new Audio("pop.mp3");
let go = new Audio("gameover_1.mp3");

let turn = "X";

const ChangeTurn = () => {
  return turn === "X" ? "0" : "X";
};
