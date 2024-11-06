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






