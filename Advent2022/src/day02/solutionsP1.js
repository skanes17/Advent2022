import { input } from "../day02/input";

const arrayOfLetters = input.replace(/\s/g, "").split("");
const arrOfNums = [...arrayOfLetters];

// Player XYZ are 123, Opponent ABC are 456
arrOfNums.forEach((letter, index) => {
  if (letter === "X") {
    arrOfNums[index] = 1;
  } else if (letter === "Y") {
    arrOfNums[index] = 2;
  } else if (letter === "Z") {
    arrOfNums[index] = 3;
  } else if (letter === "A") {
    arrOfNums[index] = 4;
  } else if (letter === "B") {
    arrOfNums[index] = 5;
  } else if (letter === "C") {
    arrOfNums[index] = 6;
  }
});

const arrayOfRounds = [],
  size = 2;

while (arrOfNums.length > 0) arrayOfRounds.push(arrOfNums.splice(0, size));

const shapeScores = [];
// scores from shape selected => R:1 P:2 S:3
arrayOfRounds.forEach((playerShape) => shapeScores.push(playerShape[1]));

// diff = OpponentNum - PlayerNum => Win: 2 or 5, Draw: 3, Lose: 1 or 4
const roundDiffs = [];
arrayOfRounds.forEach((round) => {
  let diff = round[0] - round[1];
  roundDiffs.push(diff);
});

const outcomeScores = [];
roundDiffs.forEach((diff) => {
  // draw condition
  if (diff % 3 === 0) {
    outcomeScores.push(3);
    // lose condition
  } else if (diff % 3 === 1) {
    outcomeScores.push(0);
    // win condition
  } else if (diff % 3 === 2) {
    outcomeScores.push(6);
  }
});

// array of scores per round
const roundScores = [];
for (let i = 0; i < shapeScores.length; i++) {
  roundScores.push(shapeScores[i] + outcomeScores[i]);
}

const totalScore = roundScores.reduce((a, b) => a + b, 0);
console.log(totalScore);
