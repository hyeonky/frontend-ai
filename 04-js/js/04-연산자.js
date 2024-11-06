// 1. 산술 연산자
console.log(10 / 2);

// 나머지 연산자
// 보통 0값을 구하려고 사용
console.log(9 % 3);

function isEven(num) {
  console.log(num % 2 === 0);
};
isEven(4);
isEven(5);


// 2.할당 연산자
let a = 1;
// a = a + 1;
a += 1;
console.log(a);


// 3. 증감 연산자
let b = 1;
// b ++;
console.log(b++); // 1.(선출력)
console.log(b); // 2.(후연산)
console.log(++b); // 3.(선연산 후출력)

// 4. 부정 연산자

console.log(!true); //false
console.log(!false); //true
console.log(!0); //true
console.log(!1); //false
console.log(!!0); //false 부정 2번함.


// 5. 비교 연산자
const c = 1;
const d = "1";
const e = 2;

console.log(c == d); //true (동등: ==)를 사용하면 둘다 숫자나 문자로 변환되어 true로 뜸.
console.log(c === d); //false (일치연산자) 형변환이 일어나지 않음
console.log(c !== d); //true
console.log(c > e); //false
console.log(c <= e); //true


// 6. 논리 연산자

// AND 연산자 (&&)
// 둘 다 참일 때만 참
const f = true;
const g = true;

if(f && g) {
  console.log("이민 가능함");
};

// &&는 연산자를 기준으로 가장 먼저 만나는 거짓 값을 반환
// 조건이 전부 참이면 가장 마지막에 있는 값을 반환
console.log(true && true); //true
console.log(true && false); //false
console.log(1 && 0 && ""); //0
console.log(1 && 2 && 3); //3

// OR 연산자 (||)
// 가장 먼저 만나는 참 값을 반환
// 둘 중 하나만 참이면 참
console.log(true || false); //true
console.log(" " || "이메일 없음"); //이메일 없음
console.log(false || 0 || null); //null

// nullish 병합 연산자 (??)
// null 또는 undefined일 때만 오른쪽 값 반환
const h = 0;
console.log(h ?? 5); //0
console.log(null ?? 5); //5
console.log(undefined ?? null); //null


// 7. 삼항 연산자
// 조건 ? 참 : 거짓
// console.log(true ? "참" : "거짓"); //참
console.log(false ? "참" : "거짓"); //거짓

const i = 10;
if(i > 5) {
  // 조건이 참일 때 실행
  console.log ("이민 가능");
}
else{
  // 조건이 거짓일 때 실행
  console.log ("이민 불가능");
};

console.log(i > 5 ? "이민 가능" : "이민 불가능");

// ex. 고양이가 맞는지 확인하는 함수
function isCat(a) {
  console.log(a === "고양이" ? "고양이" : "고양이 아님");
};

isCat("고양이"); // 고양이
isCat("강아지"); // 고양이 아님

// 8. 전개 연산자
// 객체 복사
const obj = { a: 1, b: 2};
const obj2 = { ...obj, c: 3};
console.log(obj2); // { a: 1, b: 2, c: 3 }

// 배열 복사
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

// 함수 인자 전달
function sum(a, b) {
  console.log(a + b);
};

const numbers = [2, 3];
// sum(numbers[0], numbers[1]); //5
sum(...numbers);










