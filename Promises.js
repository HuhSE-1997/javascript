// 비동기 프로그램
// 위에서 아래로 순차적으로 실행하는게 아니라 한꺼번 동시에 실행하는것을 비동기


const AmiSexy = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, "gimochi") // resolve, 3초뒤에 , gimochi  입력
})

AmiSexy.then(result => console.log(result)).catch(error => console.log(error))
// then 이랑 catch 는 서로 비슷한 기능 이지만 catch는 error, then 이 실행되면 catch 는 실행 x catch가 실행 되면 then x




//*************************************Chain Promise********************************************** */

const AmiSexy = new Promise((resolve, reject) => {
    resolve(2);
  });
  
  const timeTwo = (number) => number * 2; 
  //result:4 in timeTwo
  AmiSexy.then(timeTwo).then(timeTwo).then(timeTwo).then(timeTwo)
  //result:32
    .then((lastNumber) => console.log(lastNumber));

//*************************************Chain Promise********************************************** */

    const AmiSexy = new Promise((resolve, reject) => {
        resolve(2);
      });
      
      const timeTwo = (number) => number * 2;
      
      AmiSexy.then(timeTwo)
        .then(timeTwo)
        .then(timeTwo)
        .then(timeTwo)
        .then(() => {
          throw Error("Something is wrong");
        }) // Error 가 발생하면 catch 로 가서 somthing is wrong 이라고 출력
        .then((lastNumber) => console.log(lastNumber))
        .catch((error) => console.log(error));
      
//   ************************************Promise.all()**************************************************
const p1 = new Promise(resolve =>{
    setTimeout(resolve, 5000, "gimochi")
  })
  
  const p2 = new Promise(resolve =>{
    setTimeout(resolve, 3000, "gimochi2")
  })
  
  const p3 = new Promise(resolve =>{
    setTimeout(resolve, 1000, "gimochi3")
  })
  
  // p1,p2,p3, these thiings put together in array
  const motherPromise = Promise.all([p1,p2,p3]);
  
  motherPromise.then(values => console.log(values))
//   result: ["gimochi","gimochi2","gimochi3"]

//   ************************************Promise.all() if they have reject**************************************************

const p1 = new Promise(resolve =>{
    setTimeout(resolve, 5000, "gimochi")
  })
  
  const p2 = new Promise((resolve, reject) =>{
    setTimeout(reject, 3000, "i hate everything ")
  })
  
  const p3 = new Promise(resolve =>{
    setTimeout(resolve, 1000, "gimochi3")
  })
  
  
  const motherPromise = Promise.all([p1,p2,p3]);
  
  motherPromise.then(values => console.log(values)).catch(err => console.log(err))

//   result: i hate everything


//   ************************************Promise.race()**************************************************
// Promise.race()는 promise 3개중 가장 빠른 resolve 나 reject 출력 해준다.

const p1 = new Promise(resolve =>{
    setTimeout(resolve, 5000, "gimochi")
  })
  
  const p2 = new Promise((resolve, reject) =>{
    setTimeout(reject, 3000, "i hate everything ")
  })
  
  const p3 = new Promise(resolve =>{
    setTimeout(resolve, 1000, "gimochi3")
  })
  
  
Promise.race([p1,p2,p3]).then(values => console.log(values)).catch(err => console.log(err));

// result= gimochi3

//   ************************************.finally**************************************************
// resolve or reject 둘중 하나 되면 finally 나중에 같이 나옴

const p1 = new Promise((resolve,reject) => {
    setTimeout(reject, 5000, "gimochi");
  })
    .then((value) => console.log(value))
    .catch((err)=> console.log(`${err} go`))
    .finally(() => console.log("good"));
  