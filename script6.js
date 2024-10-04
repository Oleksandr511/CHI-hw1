const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log("keys: ", Object.keys(obj));
console.log("values: ", Object.values(obj));
console.log("hasOwn: ", Object.hasOwnProperty("name"));
console.log("hasOwn: ", Object.hasOwnProperty("firstName"));
