// 구조 분해 할당 (개별 포장)
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식

const arr = [1, 2, 3];
// console.log(arr[0], arr[1], arr[2]); // 1 2 3
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;

console.log(a, b, c);

// 재할당
let x = 0;
let y = 0;
const arr1 = [1, 2];
[x, y] = arr1; //재할당 하는 법 : 앞에 const를 쓰지 않고 다시 할당 한다. ex) const [x, y] = arr1; ->이거는 var에서만 가능한 재선언임. 이렇게 쓰면 오류남!

console.log(x, y);

// 나머지 할당
const arr2 = [1, 2, 3, 4, 5];
const [d, ...rest] = arr2;

console.log(d, rest);

// 객체 구조 분해
const mini = {
  w: 100,
  // h: 200,
  bg: "red",
};
const {w: width, h = 100, bg} = mini;
console.log(width, h, bg);

// 선택적 체이닝
const user = null;
console.log(user?.name);

const user1 = {
  name: "Mike",
  age: 30,
};

const user2 = {
  name: "mija",
};

// console.log(user2?.age);
function printAge (user) {
  console.log(user.age || "나이정보가 없습니다.");
};

printAge(user1);
printAge(user2);

// 조건문
// if문 예시
  // if (조건) {
  //   // 조건이 참일 때 실행
  // }
  // else if (조건2) {
  //   // 조건2가 참일 때 실행
  // }
  // else {
  //   // 조건이 거짓일 때 실행
  // }


function isPositive(num) {
  console.log(num);

  if (num > 0) {
    console.log("양수입니다.");
  }
  else if (num < 0) {
    console.log("음수입니다.");
  }
  else {
    console.log("0 입니다.");
  }
}

isPositive(5);
isPositive(-2);

// // switch문
// switch (조건) {
//   case 값1:
//     // 값1일 때 실행
//     break;
//   case 값2:
//     return "값2 실행";
//   default:
//     // 값1, 값2가 아닐 때 실행
//     break;
// }

function header (type) {
  switch (type) {
    case "type1":
      return "타입1 header 출력";
    case "type2":
      return "타입2 header 출력";
    default:
      return "타입3 header 출력";
  }
}

console.log(header("type1")); //type1 header 출력
console.log(header("type2")); //type2 header 출력

// if문으로 변경
function header2 (type) {
  if (type === "type1") return "타입1 header 출력";
  if (type === "type2") return "타입1 header 출력";
  return "타입3 header 출력"
}

console.log(header2("type1"), header2("type2"), header2("type3"));

// 반목문
 // for문
// for (초기값; 조건; 증감) {실행문}

// 콘솔창에 0부터 9까지 출력 
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 9부터 0까지 출력
for (let i = 9; i > -1; i--) {
  console.log(i);
}

// 2씩 줄어들게 하고 싶음 (i -= 2)넣어주기 / 홀수만 출력
for (let i = 9; i > -1; i -= 2) {
  console.log(i);
}

// 4보다 작으면 break 반복문 종료
for (let i = 9; i > -1; i--) {
  if (i < 4) {
    break;
  }
  console.log(i);
}

// continue문
// 9부터 1까지 출력 + 홀수만 출력
for (let i = 9; i > 0; i--) {
  // 지역변수 
  if (i % 2 == 0) {
    continue;
  }
  console.log(`i : ${i}`);
}

// for of문 (배열)
const animals = ["dog", "cat", "fish"];

for (let animal of animals) {
  console.log(`내가 좋아하는 동물은? : ${animal}`);
};

// for in문(객체)
const user3 = {
  name: "겨울",
  age:2, 
  city: "seoul",
};

for (let key in user3) {
  console.log(key);
  console.log(user3[key]);
}

// while문
// while (조건) {실행문}

// 전역 변수 - 같은 변수 쓰면 재할당됨
let i =1;
let sum = 0;

while (i <= 10) {
  sum += i; //sum = sum + 1;
  i++;
}

console.log(`sum : ${sum}, i : ${i}`);

// do while문 
let j = 0;
do {
  console.log(j);
  j++;
} 
while (j < 10);