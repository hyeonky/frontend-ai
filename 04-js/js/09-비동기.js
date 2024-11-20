// const a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('a 비동기');
//       resolve();
//     }, 1000);
//   });
// };
// const b = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('b 비동기');
//       resolve(); // 성공 시 호출
//     }, 1000);
//   });
// };
// const c = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('c 비동기');
//       resolve(); // 성공 시 호출
//     }, 1000);
//   });
// };
// const d = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('d 비동기');
//       resolve(); // 성공 시 호출
//     }, 1000);
//   });
// };

// Promise.all([a(), b(), c(), d()]).then(() => {
//   console.log('모두 완료');
// });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// // a()
// //   .then(b)
// //   .then(c)
// //   .then(d)
// //   .then(() => {
// //     console.log('모두 완료');
// //   });

// // a()
// //   .then(() => {
// //     return b();
// //   })
// //   .then(() => {
// //     return c();
// //   })
// //   .then(() => {
// //     return d();
// //   });

// // a().then(() => {
// //   console.log('a함수 완료');
// //   b().then(() => {
// //       console.log('b함수 완료');
// //       c().then(() => {
// //           console.log('c함수 완료');
// //           d().then(() => {
// //               console.log('d함수 완료');
// //           });
// //       });
// //   });
// // });

// const getUser = (userId) => {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((res) => {
//         // 실패시 처리할 조건
//         if (!res.ok) {
//           throw new Error(`${userId}번 유저를 찾을 수 없습니다.`);
//         }
//         // 성공시 처리할 조건
//         return res.json();
//       })
//       .then((data) => console.log(data.title))
//       .catch((error) => console.log(error))
//       .finally(() => {
//         console.log('모두 완료');
//       });
//   });
// };
// getUser(1)
//   .then((data) => {
//     console.log(data.title);
//     return getUser(2);
//   })
//   .then((data) => {
//     console.log(data.title);
//     return getUser(3);
//   });

// // async await
// const printUser = async () => {
//   try {
//     const user1 = await getUser(1);
//     console.log(user1);

//     const user2 = await getUser(2);
//     console.log(user2);

//     const user3 = await getUser(3);
//     console.log(user3);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('모두 완료');
//   }
// };

// printUser();

// // aa, bb 순서대로 출력
// const aa = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('aa');
//       resolve();
//     }, 1000);
//   });
// };
// const bb = () => {
//   console.log('bb');
// };

// // aa().then(() => {
// // return bb();
// // });

// const main = async () => {
//   await aa();
//   bb();
// };

// main();

// console.log(fetch('https://jsonplaceholder.typicode.com/users'));

fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
  console.log(res)
);

fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
  console.log(res.json())
);
