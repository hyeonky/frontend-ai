// 메서드 문자
const str = 'hello world';

// length
console.log(str.length); // 11(띄어쓰기 까지 반환됨)

console.log(str.includes('Hello'));
console.log(str.includes('ss'));
console.log(str.includes('hello'));

const str2 = '12345';
console.log(str2.padStart(10, '0'));
console.log(str2.padEnd(10, '0'));
console.log(str2.padEnd(3, '0'));

const str3 = 'hello winter winter';
console.log(str3.replace('winter', 'summer')); // hello summer winter
console.log(str3.replace(/winter/g, 'summer')); // hello summer summer
console.log(str3);

const str4 = 'hello world';
// console;

const str5 = 'Spring, Summer, Fall, Winter';
console.log(str5.split(','));
console.log(str5.toLocaleLowerCase());

Number.isNaN(1); // false
Number.isNaN(NaN); //true

console.log(Math.abs(-10)); // 10
console.log(Math.abs('-10')); // 10

// 랜덤 메서드
console.log(Math.random());

// 특정 범위의 랜던 정수 반환 함수
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1, 10));
console.log(getRandomInt(1, 100));

// 날짜 메서드
const now = new Date();
console.log(now);
console.log(now.getUTCFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

// const now2 = new Date(2024, 6, 5, 12, 30, 30);
// consoloe.log(now2);

// 배열 메서드
const arr = [1, 2, 3];
console.log(arr.length);
console.log(arr[0]);
console.log(arr.at[0]);

console.log(arr[2]);
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

//const arr=[1, 2, 3]
console.log;
arr.filter((item) => {
  return item > 1;
});

const users = [
  { name: '홍길동', age: 36 },
  { name: '고길동', age: 12 },
  { name: '둘리', age: 6 },
];

// 배열이름.filter((item) => {return 조건})
users.filter((item) => {
  return item.age;
});

// 고길동 찾기
// 배열이름.find((item) => {})
const 고길동 = users.find((item) => {
  return item.name === '고길동';
});

console.log(고길동.name);

// 배열이름.forEach((item) => {실행문})
const list = ['list1', 'list2', 'list3'];
list.forEach((item) => {
  console.log(item);
}); // 함수가 3번 반복 실행됨.

const animals = ['Cat', 'Dog', 'Fish'];
// console.log(array.includes(element, start)); - includes구문
console.log(animals.includes('cat')); //false
console.log(animals.includes('토끼')); //false

// 소문자로 변환 후 비교
// .toLowerCase()

// array.join(separator) - join 구문
console.log(animals.join(' 그리고 '));

const users2 = [
  { name: '홍길동', age: 36 },
  { name: '고길동', age: 12 },
  { name: '둘리', age: 6 },
];

// array.map(function(currentValue, index, arr), thisValue) - map구문
users2.map(function (item) {
  console.log(item);
});

const newUsers = users2.map((item) => ({ ...item, email: null }));
console.log(newUsers);

console.log(arr.pop());

// 배열의 길이를 반환
console.log(arr.push(4, 5, 6));
console.log(arr);

const users4 = [
  { name: '홍길동', age: 36 },
  { name: '고길동', age: 12 },
  { name: '둘리', age: 6 },
];

// 총 나이 합계(reduce)
const totalAge = users4.reduce(function (total, currentValue) {
  return total + currentValue.age;
}, 0);
console.log(totalAge);

// 평균 나이 구하기
// const avgAge = 총나이합계 / 유저수
const avgAge = totalAge / users4.length;
console.log(avgAge);

const arr2 = [1, 2, 3, 4, 5];
console.log(avgAge);
