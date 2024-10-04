let arr = ["g", 9, 12, true, undefined, NaN, 0, "a", false, 3.14];

arr.fill(42);

arr.splice(4, 1, "answer");
console.log(arr);
let result = arr.find((item) => {
  return  item === "answer";
});
console.log(result);
