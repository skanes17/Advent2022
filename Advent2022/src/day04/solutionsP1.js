import { input } from "./input";

const noDashes = input.replaceAll("-", ",").split(/\r?\n/);

const numberArray = noDashes
  .map((group) => group.split(","))
  .map((group) =>
    group.map((str) => {
      return Number(str);
    })
  );

// Part 1
const groupsWithContainment = numberArray.filter(
  (group) =>
    (group[0] <= group[2] && group[1] >= group[3]) ||
    (group[0] >= group[2] && group[1] <= group[3])
);

const containmentCount = groupsWithContainment.length;

console.log(containmentCount);

// Part Two
const groupsWithOverlap = numberArray.filter(
  (group) =>
    (group[0] <= group[3] && group[1] >= group[2]) ||
    (group[0] >= group[3] && group[1] <= group[2])
);

const overlapCount = groupsWithOverlap.length;
console.log(overlapCount);
