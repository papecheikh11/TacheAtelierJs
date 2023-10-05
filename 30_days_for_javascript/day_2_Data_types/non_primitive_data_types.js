let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums); // [10, 2, 3]

let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums == numbers); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};
let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};
console.log(userOne == userTwo); // false

let numbers2 = nums;
console.log(nums == numbers2); // true

let userOne2 = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};
let userTwo2 = userOne;
console.log(userOne == userTwo); // true
