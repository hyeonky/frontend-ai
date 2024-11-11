// 컴포넌트 만드는 방법
export default function Nav2(props) {
  console.log(props);
  // const props = {
  //  nav:[navigationItem],
  // };

  // map() 문법
  // 배열이름(array).map((item, index) => (반복코드))

  return (
    <ul className="flex gap-5">
      {props.nav.map((item, index) => (
        // item = {title.index}이게 객체 생성 방법
        <li key={index}>
          <a
            href={item.ur}
            className="h-16 flex items-center"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

// export default Nav2;
