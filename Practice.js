// conts let

// const 변하지않는 값, 값을 다시 정의 할수 없다. 
const person = "영희";
// let 값을 바꿀 수 있다.
let people = "철수";

people = "철수 엄마";

console.log(people);
console.log(person);


//Blcok scope {}

const hello = "Hello";

if (true){
    console.log(hello)
}
// 결과 : Hello가 출력

if (ture){
    const hello1 = "hello1"
}
console.log(hello1);

// 결과가 에러가 나온다 let 도 마찬가지로 에러가 나온다. const,let은 block scope 안에 있으면 밖에서 호출 불가능

if(true){
    var hello2 = "hello2";
}
console.log(hello2);

//반면에 var은 안에서 선언해도 결과가 hello2가 나옴

let hello3;
if(true){
    hello3 = "hello3"
}
console.log(hello3)

// hello3 let으로 선언한 다음 hello3에서 다시 선언한후 hello3으로 출력 