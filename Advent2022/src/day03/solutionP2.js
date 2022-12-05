import { input } from "../day03/input";

const arr = input.split("\n");

let priorities = {};
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
alphabet.map(
  (letter, index) =>
    (priorities = { ...priorities, ...{ [letter]: index + 1 } })
);

const badges = [];

Object.keys(priorities).map((letter) => {
  for (i = 0; i < arr.length; ) {
    if (
      arr[i].includes(letter) &&
      arr[i + 1].includes(letter) &&
      arr[i + 2].includes(letter)
    ) {
      badges.push(letter);
    }
    i += 3;
  }
});

let sum = 0;
badges.map((badge) => {
  sum += priorities[badge];
});

console.log(sum);
