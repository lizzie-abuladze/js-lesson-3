// 1
let array = [1, 2, 3, 4, 5];
for (num = array.length - 1; num >= 0; num--) {
  console.log(array[num]);
}
// 2
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of array2) {
  if (array2[number] == 5) {
    console.log("congrats there is five");
    break;
  }
}
// 3
let array5 = [1, 2, 3, 7, 6, 9];
for (let item = 0; item < array5.length; item++) {
  if (array5[item] === 7) {
    continue;
  }
  console.log(array5[item]);
}
// 4
8 == "8";
// true რადგან რვას როგორც number-ს ორი ტოლობა აკონვერტირებს როგორც string-ს ანუ '8'

// 5
let array1 = [1, 2, 4, 8, 7, 15, 25, 3, 18, 12];
for (let item2 = 0; item2 < array1.length; item2++) {
  if (array1[item2] > 5) {
    console.log(array1[item2]);
  }
}
// 6
let nameArray = [
  "babare",
  "anamaria",
  "dito",
  "lizi",
  "giorgi",
  "luka",
  "sandro",
];
let nameList =
  nameArray.length === 5 && nameArray[1] == "otar"
    ? "Array count: 5 and the second element is Otar"
    : nameArray.length === 7 && nameArray[nameArray.length - 1] == "sandro"
    ? "Array count: 7 and the last element is sandro"
    : "Error";
console.log(nameList);
// 7
let users = [
  { username: "giorgi", age: 30 },
  { username: "levani", age: 25 },
  { username: "anna", age: 28 },
];
for (user of users) {
  if (user.age > 25) {
    console.log(user.username);
  }
}
