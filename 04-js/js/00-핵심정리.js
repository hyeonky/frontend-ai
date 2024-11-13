// js 핵심정리

// # 변수 선언, 할당
// 재선언 사용X !!

const a = 1;
// const는 재할당 X
// a = 2;

// 재할당 가능한 변수 :let
let b = 1;
b = 2;
console.log(b);

// # 데이터 타입
// number (숫자 타입으로 저장)
const num = 1;
console.log(num);

// string (문자열 타입으로 저장)
const str = 'w-3 h-3 bg-gray-100';
console.log(str);

// boolean (참, 거짓 두개 밖에 없음)
const bool = true;
console.log(bool); //true
console.log(!bool); //false

// object (객체는 무조건 {}로 표시)
// 문자는 "" 사용, 나머지는 사용 안 해도 됨
{
  // <Name name ="kim" age="20" />
}
const props = { name: 'Kim', age: 20 };
console.log(props); // 'name: 'Kim', age: 20' 출력

// 이런식으로 (객체이름.값 이름)으로 필요한 부분만 출력 가능
console.log(props.name); // 'Kim' 출력
console.log(props.age); // '20' 출력

// 문제) Kim 씨는 20살 입니다. 출력 해보기
// jsx 문법에서는 {} 써야 함.
console.log(`${props.name}씨는 ${props.age}살입니다.`);

// array
const arr = [
  { name: '겨울', age: 2 }, // index[0]
  { name: '가을', age: 3 }, // index[1]
  { name: '여름', age: 4 }, // index[2]
];
console.log(arr); // 전체배열 출력
console.log(arr[0]); // name: '겨울', age: 2 출력
console.log(arr[2]); // name: '여름', age: 4 출력
console.log(arr[1].name); // '가을' 출력
console.log(arr[2].name); // '여름' 출력
console.log(`${arr[0].age}살`); // '2살' 출력

// # Function
// 함수 선언
const func = function () {
  console.log('함수 호출');
};

func(); // 함수 호출

// 화살표 함수식 (const 함수이름 = () => {};)
// 컴포넌트
const func2 = (props) => {
  console.log(props);
};
func2('w-3'); // 컴포넌트 호출

// # 연산자
// 비교 연산자
// | 일치 연산자 (===)
console.log(1 === 1); // true

// | 불일치 연산자 (!==)
console.log(1 !== 1); // false

// 논리 연산자
// | 그리고 연산자 (&&) -- 둘 다 참이면 true를 반환, 모두가 참이라면 마지막 데이터를 반환
// | c가 참일 경우 d를 출력
const c = true;
const d = '<div>출력</div>';
console.log(c && d); // '<div>출력</div>' 출력

// 또는 연산자 (||) -- 둘 중 하나만 참이여도 true 반환, 연산자를 기준으로 먼저 만나는 참 값을 반환
// e가 참일 경우 e를 출력

// const e = '서울시...';
const e = ''; // 주소 정보 없을 시 -- '주소가 없습니다' 출력
const f = '주소가 없습니다.';
console.log(e || f); // '서울시...' 출력

// 삼항 연산자
// {조건 ? 참 : 거짓}
console.log(true ? 'btn-primary' : 'btn-gray'); // 'btn-primary' 출력
console.log(false ? 'btn-primary' : 'btn-gray'); // 'btn-gray' 출력
