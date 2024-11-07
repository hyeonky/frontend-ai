// 함수
  // 1. 함수 선언하기

    // 함수 선언식
    hello1(); // 함수 호출
    // 일반함수로 만들었을 때: 함수 호이스팅 사용가능
    // 함수 호이스팅: 선언문을 만들기 전체 함수를 호출해도 정삭적으로 작동/ 가독성 높아짐!
    function hello1 () {
      console.log("hello1");
    }


    // 함수 표현식
    const hello2 = function () {
      console.log("hello2");
    }
    
    hello2();
    // 함수 표현식은 함수 호출을 선언식 위에 쓸 수 없음! 
    // why? 함수 호이스팅 않되기 때문에 에러 발생!!

    // return:
    // 함수를 호출한 곳으로 값을 반환 및 종료
    function h1 () {
      return "hello"; // "hello"라는 글씨를 반환해줘
      // return 밑 줄에는 코드를 써도 실행이 되지 않기 때문에 쓰지 않음!
    }
    console.log(h1());

    function h2 () {
      return; 
    }
    console.log(h2()); //undefined

    function h3 () {
      return 1;
      return 2; // 실행되지 않음
      // return은 2개 사용 불가 및 안 써도 실행 안됨 주의~~
    }
    console.log(h3());

    // 매개변수
    // 기본값을  "변수 = 0"을 넣어 NaN가 출력되지 않도록 함
    function sum(x = 0, y = 0) {
      return x + y;
    }

    console.log(sum(1, 2));
    console.log(sum(5)); // 5 + undefined = NaN(Not a Number)

    // 함수의 구조 분해
    // 객체 분해
    const user = { //객체 생성
      name: "윈터",
      age: 24,
    };

    // 함수 선언
    function getName({ name, age, email = "이메일 정보가 없습니다." }) {
      // const props = user;
      // const props = {
      //   name: "윈터",
      //   age: 24,
      // };

      // 구조 분해
      // 개별 포장 코드
      // const { name, age } = props;

      console.log(name);
      
      // 윈터는 24살입니다 출력
      console.log(`${name}는 ${age}살 입니다.`);

      console.log(email);
    }

    // 함수 호출
    // 객체 정보 전부 받음
    getName(user);

    // 배열 분해
    const animals = ["dog", , "fish"];
    function getSecond ([, b = "없음"]) {
      // const arr = ["dog", "cat", "fish"];

      // const [, b] = arr;

      console.log(b);
    }
    getSecond(animals);

    // 나머지 매개변수
    function print (num) {
      console.log(num);
    }
    print(1, 2, 3, 4, 5);

    // // 화살표 함수
    // function hello() {}
    // hello();

    // // 함수 표현식 만들기 -> 익명함수 만든 후 객체 변수에 적용
    // const hello3 = function () {}
    // hello3();

    const hello4 = () => {
      console.log("hello4");
    }
    hello4();
    
    // 화살표 함수의 축약
    const a = () => {}
    // 매개변수가 바로 사용하면 괄호 생략 가능 (매개변수 1개일 때!!)
    const b = x => {}
    const c = (x, y) => {}
    const d = (x, y) => x + y;
    const e = (x, y) => {
      console.log("hello");
      return x + y;
    };
    const f = () => ({name: "윈터" });
    const g = () => [1, 2, 3];
    const h = () => {}
    const i = () => {}
    const j = () => {}