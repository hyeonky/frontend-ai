// loading 되면, bg-color를 lightblue로 변경
$("body").css({
  "backgroundColor": "lightblue",
  "font-size": "20px",
});

// 실행할 코드
// btn을 클릭했을 때
// chaining으로 묶을 수 있음
$(".btn1")
  .on("mouseenter", function () {
    // .box를 없애기
    $(".box").stop().slideDown(500);
  })
  .on("mouseleave", function () {
    // .box를 없애기
    $(".box").stop().slideUp(500);
  });

  // 다음 코드
$(".btn2")
  .mouseenter(function () {
    $(".box2").hide();
  })
  .mouseleave(function () {
    $(".box2").show();
  });

  // animate
  // .box3가 1초 동안 왼쪽으로 100px 이동
  $(".btn3")
  // .btn3을 클릭했을 때 
  .click(function () {
    // {실행 코드}, 스피드
    $(".box3").animate({
      left: 300,
      top: -300,
      width: "+=150px"
    },
    1000
  );
  });