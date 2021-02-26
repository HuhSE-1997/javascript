


// spread
// element를 하나로 합칠 수 있고 원할수 있기떄문에 하나의 array를 가질수 있다.
const sexy = {
    name: "park",
    age : 24,
  };
  
  const hello ={
    sexy:true,
    hello:"hello"
  }
  
  console.log({...sexy, ...hello})

  
  const a = [1,2,3,4]
  const b = ["a", "b", "c","d"]
  
  console.log([...a,...b])

  //*************************************** */

  const first = ["mon", "tue", "wend","thur","fri"]
const weekend = ["sat","sun"]

const fullweekend = [...first, ...weekend];

console.log(fullweekend)


const lastName = prompt("Last name");

const user = {
  username : "nico",
  age:24,
  // lasName에 입력하면 맞지 않기떄문에 true 그래서 lastName array 에 추가
  ...(lastName !== "" && {lastName})
};

console.log(user);  


// rest parameter

// ...kimchi 라는 변수안에 값을 다 쑤셔 넣는다 
const infiniteArgs = (...kimchi) => console.log(kimchi)

infiniteArgs(1,2,3,"2","3",["222","fdas"])

//example
const bestFriendMaker = (firstOne,...potato) => {
    // park 이라는 결과가 나옴
    console.log(`my friends is ${firstOne}`)
    // 첫번쨰 값은 나오지 않고 나머지 2,3,4번쨰 값이 나온다
    console.log(potato)
  }
  
  bestFriendMaker("park", "lee","cho", "gi")


  // ****************clean up object ***************************
  const user = {
    name : "kim",
    age :23,
    password : 1234
  }
  // killpassword 안에 password 말고 나머지 변수들이 들어간다.
  const killPassword = ({password,...rest}) => rest
  // cleanPassword 안에는 name, age 들이 있다.
  const cleanPassword = killPassword(user)
  
  console.log(cleanPassword)

// ****************add object ***************************  
 const setCountry = ({country = "KR", ...rest}) => ({country,...rest})
 console.log (setCountry(user))

// *********************change proporty*******************************

const user = {
    Name : "kim",
    age :23,
    password : 1234
  }

//   Name 이라는 변수를 name 으로 바꾸어주고 나머지(age,password)를 저장, return 을 name 이랑 (age, password)
const rename = ({Name:name, ...rest}) =>({name,...rest})
console.log(rename(user))

