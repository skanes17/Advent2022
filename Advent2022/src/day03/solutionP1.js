import { input } from "../day03/input";

const arr = input.split("\n");
const rucksacks = [];
arr.map((rucksack) => {
  rucksacks.push([
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ]);
});

let priorities = {};
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
alphabet.map(
  (letter, index) =>
    (priorities = { ...priorities, ...{ [letter]: index + 1 } })
);

const overlaps = [];
rucksacks.forEach((compartment, index) => {
  for (let i = 0; i < compartment[0].length; i++) {
    for (let t = 0; t < compartment[0].length; t++) {
      if (compartment[0].slice(i, i + 1) === compartment[1].slice(t, t + 1)) {
        overlaps[index] = compartment[0].slice(i, i + 1);
      }
    }
  }
});

let sum = 0;
overlaps.map((overlapItem) => {
  sum += priorities[overlapItem];
});

console.log(sum);
