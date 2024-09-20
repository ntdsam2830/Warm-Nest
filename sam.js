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

// const scoreCount = {};

// for (let i = 0; i < givenArr.length; i++) {
//   const score = givenArr[i].score;
//   if (scoreCount[score]) {
//     scoreCount[score] += 1;
//   } else {
//     scoreCount[score] = 1;
//   }
// }

// console.log(scoreCount);

// const givenArr = [0, 1, 2, 3, 4, 5, 6];
// const doubled = givenArr.map((item) => item ** 2);
// const even = givenArr.filter((item) => item % 2 !== 0);
// const sum = givenArr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

// const givenFruit = ["Banana", "Orange", "Apple", "Grape"];
// const chosenArr = givenFruit.slice(0, 4);
// console.log(chosenArr);

// const studentAs = [
//   { name: "Alice", age: 15 },
//   { name: "Bob", age: 16 },
//   { name: "Lucy", age: 20 },
//   { name: "Harry", age: 19 },
//   { name: "Kate", age: 17 },
//   { name: "John", age: 16 },
//   { name: "Alice", age: 17 },
//   { name: "Sam", age: 19 },
//   { name: "Lily", age: 18 },
// ];

// const myArr = studentAs.splice(1, 2, { name: "Amy", age: 21 });
// console.log(myArr);

// const ageCount = studentAs.reduce((acc, curr) => {
//   acc[curr.age] = (acc[curr.age] || 0) + 1;
//   return acc;
// }, {});

// const ageCount = {};

// for (let i = 0; i < studentAs.length; i++) {
//   const age = studentAs[i].age;
//   if (ageCount[age]) {
//     ageCount[age] += 1;
//   } else {
//     ageCount[age] = 1;
//   }
// }

// console.log(ageCount);

// const uniqueStudents = studentAs.filter(
//   (student, index, self) =>
//     index === self.findIndex((s) => s.name === student.name)
// );
// const uniqueStudents = studentAs.reduce((acc, curr) => {
//   const x = acc.find((student) => student.name === curr.name);
//   if (!x) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(uniqueStudents);

// const studentBs = [
//   { name: "Alice", age: 17 },
//   { name: "Sam", age: 19 },
//   { name: "Lily", age: 18 },
// ];

// const aList = students.filter((student) =>
//   student.name.toLowerCase().includes("a")
// );
// const sortedStudentsAs = students.sort((a, b) => a.age - b.age);
// const totalAge = students.reduce((sum, student) => sum + student.age, 0);
// console.log(totalAge);

const user = {
  name: "Sam",
  age: 21,
};

const obj1 = { name: "Alice", age: 25 };
const obj2 = { job: "Developer", city: "New York" };
const obj3 = { hobby: "Reading", country: "USA" };

// Gộp các object thành 1 object sử dụng spread operator
const mergedObj = { ...obj1, ...obj2, ...obj3 };

console.log(mergedObj);

