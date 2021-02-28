function* listPeople(){
    yield "Dal";
    yield "park";
    yield "lee";
    yield "shin";
    yield "gae" // yield 는 return
}

const listG = listPeople()

listG.next()
//value 가 차례되로 나오고 나중에는 undefined 가 나온다





const userObj ={
    name:"park",
    age:23,
    password: 1234
}

const userFilter ={
    get:()=>{
        console.log("Sombody is getting somthing")
    },
    set: () => {
        console.log("Sombody wrote something") 
    }
}

const filteredUser =new Proxy(userObj,userFilter)

//**************** || 과 ?? 차이점 */

// Nullish coalescing operator


let p1;
console.log("hello", p1 || "gimochi")
// reesult hello gimochi
let p2 = 0;
console.log("hello", p1||"gimochi")
// result: hello gimochi
let p3 = 0;
console.log("hello", p3 ?? "gimochi")
// result: hello 0
let p4 =""
console.log("hello", p4 ?? "gimochi")
// result: hello ""
let p5 = ""
console.log("hello", p5 || "gimochi")
// result: hello gimochi
// || 빈문자인가 0이면 false 라고 판단



// *************************Optional chaining*******************

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // expected output: undefined


// *************************PadStart*******************
// 값을 변화시키지않는다

let minutes = 3
let hours = 2
let seconds = 3

// padStart(2,"0") 두자릿 수 까지 표현 아니면 앞에 0으로 표시하라는뜻
minutes = String(minutes).padStart(2,"0")
seconds = String(seconds).padStart(2,"0")


console.log(`${hours}h:${minutes}M:${seconds}s`)


// ***********************************trime****************************************
// 공백을 없애준다
let p1 = "                 m              "
p1.trim()


// ************************array flay********************
// 복잡한 리스트를 쉽게 풀어서 나타내어주는 역할 flat 안에는 깊이를 나태남
[1],[2],[3],[[3,[4]]].flat(3)
// result:(2) [3, 4]



// ********************allSettled**********************
const p1 = Promise.allSettled([
    fetch("https://yts.mx/api/v2/list_movies.json"),
    fetch(),
    fetch("https://yts.mx/api/v2/list_movies.json")
  ])
    .then((response) => console.log("nice", response))
    .catch((err) => console.log("error", err));
  