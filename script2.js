const arr = [
  5,
  "hi",
  true,
  3.14,
  { name: "John" },
  null,
  undefined,
  function () {},
  [],
  NaN,
];

console.log("forEach loop with typeof: ");
arr.forEach((item) => {
  console.log(typeof item);
});

console.log("for...in loop with typeof: ");
for (let i in arr) {
  console.log(typeof arr[i]);
}

console.log("while loop with typeof: ");

let i = 0;
while (i < arr.length) {
  console.log(typeof arr[i]);
  i++;
}
console.log("");
console.log("do...while loop with typeof: ");
do {
    i--;
  console.log(typeof arr[i]);
} while (i > 0);
