import { input } from "../day02/input";

const arrayOfLetters = input.replace(/\s/g, "").split("");
const arrOfNums = [...arrayOfLetters];

// Player XYZ are 123, Opponent ABC are 456
arrOfNums.forEach((letter, index) => {
  if (letter === "X") {
    arrOfNums[index] = "lose";
  } else if (letter === "Y") {
    arrOfNums[index] = "draw";
  } else if (letter === "Z") {
    arrOfNums[index] = "win";
  } else if (letter === "A") {
    arrOfNums[index] = 4;
  } else if (letter === "B") {
    arrOfNums[index] = 5;
  } else if (letter === "C") {
    arrOfNums[index] = 6;
  }
});

console.log("--Array of Nums--");
console.log(arrOfNums);

const arrayOfRounds = [],
  size = 2;
while (arrOfNums.length > 0) arrayOfRounds.push(arrOfNums.splice(0, size));
console.log("--Array of Rounds--");
console.log(arrayOfRounds);

const updatedRounds = [...arrayOfRounds];
// turn the win conditions into numbers
updatedRounds.forEach((round) => {
  if (round[1] === "win") {
    round[0] === 6 ? (round[1] = round[0] - 5) : (round[1] = round[0] - 2);
  } else if (round[1] === "draw") {
    round[1] = round[0] - 3; // YES
  } else if (round[1] === "lose") {
    round[0] === 4 ? (round[1] = round[0] - 1) : (round[1] = round[0] - 4);
  }
});
console.log("--Updated Rounds--");
console.log(updatedRounds);

const shapeScores = [];
// scores from shape selected => R:1 P:2 S:3
updatedRounds.forEach((playerShape) => shapeScores.push(playerShape[1]));
//console.log("--Shape Scores--");
//console.log(shapeScores);

// diff = OpponentNum - PlayerNum => Win: 2 or 5, Draw: 3, Lose: 1 or 4
const roundDiffs = [];
updatedRounds.forEach((round) => {
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
//console.log("--Outcome Scores--");
//console.log(outcomeScores);

// array of scores per round
const roundScores = [];
for (let i = 0; i < shapeScores.length; i++) {
  roundScores.push(shapeScores[i] + outcomeScores[i]);
}
//console.log("--Round Scores--");
//console.log(roundScores);

const totalScore = roundScores.reduce((a, b) => a + b, 0);

console.log(totalScore);
