import { input } from "./input";
// Part 1
const data = input.split(`\n  `).map(Number);

const elves = [];
const elf = [];
let elfNum = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] === 0) {
    elves[elfNum] = [...elf];
    elfNum++;
    elf.length = 0;
  } else {
    elf.push(data[i]);
    elves[elfNum] = [...elf];
  }
}

const arrayOfTotals = elves.map((element) =>
  element.reduce((a, b) => a + b, 0)
);

const mostCalories = arrayOfTotals.reduce((a, b) => {
  return Math.max(a, b);
});
console.log(mostCalories);

// Part 2
const highToLow = arrayOfTotals.sort(function (a, b) {
  return b - a;
});

const topThreeTotal = highToLow[0] + highToLow[1] + highToLow[2];
console.log(topThreeTotal);
