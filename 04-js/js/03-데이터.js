// 데이터

// 1. string (문자열)

const string1 = "hello";
const string2 = "javascript";
const string3 = `world ${string1} ${string2}`;
const string4 = "world" + string1 + string2;

console.log(string3);

// 2. number 숫자
const number1 = 123;
console.log(number1+1);
console.log(typeof number1);

// 3. boolean (참/거짓)

const boolean1 = true;
const boolean2 = false;

if (boolean2) {
  console.log("참");
}

// 4. array (배열)
const array1 = [1, 2, "dog"];
console.log(array1);
console.log(array1[0], array1[2]);
console.log(array1.length);
console.log(array1[array1.length - 1]);

// 5. object (객체)
const user = {
  name: "가을",
  age: 2,
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(`${user.name}이는 ${user.age}살입니다.`);

const userA = {
  name: "겨울",
  age: 2,
};
const userB = {
  name: "현경",
  age: 24,
  parent: userA,
}

console.log(userB);
// 점 표기법
console.log(userB.parent.name);
// 대괄호 표기법
console.log(userB["parent"]["name"]);


console.log(userA.name, userA.age);
console.log(`${userA.name}이는 ${userA.age}살입니다.`);

const users = [userA, userB];
console.log(users[0].name);
console.log(users[0]["name"]);

function add(a,b) {
  console.log("더하기");
  return
}
add();

// 함수 표현
const add2 = function (a, b) {
  console.log(a + b);
};
// 함수 실행
add2(1, 2);

// 화살표 함수
const add3 = (a, b) => {
  console.log(a + b);
};
add3(1, 2);