const arr = [
  { name: "Harper", age: 1, pets: ["cat", "dog"] },
  { name: "Jack", age: 20, pets: ["cat", "dog"] },
  { name: "Madison", age: 22, pets: ["cat", "dog"] },
  { name: "Willow", age: 18, pets: ["cat", "dog"] },
  { name: "Ruby", age: 9, pets: ["cat", "dog"] },
  { name: "Max", age: 44, pets: ["cat", "dog"] },
  { name: "Ivan", age: 19, pets: ["cat", "dog"] },
];

let newArr = arr.filter((item) => {
  return item.age > 20;
});

console.log(newArr);
