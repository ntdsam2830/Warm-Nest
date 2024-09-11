// const givenArr = [
//   { id: "123", score: "4.5" },
//   { id: "124", score: "4.5" },
//   { id: "125", score: "8" },
//   { id: "126", score: "9" },
// ];

// const scoreCount = givenArr.reduce((acc, curr) => {
//   // If the score already exists in the accumulator, increment the count
//   acc[curr.score] = (acc[curr.score] || 0) + 1;
//   return acc;
// }, {});

// console.log(scoreCount);

const givenArr = [
  { id: "123", score: "4.5" },
  { id: "124", score: "4.5" },
  { id: "125", score: "8" },
  { id: "126", score: "9" },
];

const scoreCount = {};

for (let i = 0; i < givenArr.length; i++) {
  const score = givenArr[i].score;
  if (scoreCount[score]) {
    scoreCount[score] += 1;
  } else {
    scoreCount[score] = 1;
  }
}

console.log(scoreCount);
