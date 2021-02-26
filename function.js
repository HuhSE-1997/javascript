// arrow function
// arrow function의 장점
// function 표햔에 비해 구문이 짧다
// this,argument,super, 또는  new.target을 바인딩 하지 않습니다.
// arrow function 에는 this가 바인딩 되지않는다 
// arrow function 에 this 를 하면 window 라고 나온다.
const mail = ["kim@naver.com", "park@google.com","cho@gmail.com","lee@nomad.com"];
const foundEmail = email.find(item => item.includes("@gmail.com"))
console.log(foundEmail)


const emails = [
    "park@naver.com",
    "kim@google.com",
    "lee@gmail.com",
    "huh@nomad.com"
  ];


  const cleaned = emails.map((email, index ) =>({
      username : email.split("@")[0],
      index: index
  }))
  console.log(cleaned);


  // Default value
  const Defaults = "gaesae"
  //aName에 아무것도 값을 안넣으면 Defaults가 대신들어간다.
  const sayHi = (aName = Defaults) => "Hello" + aName;


  console.log(sayHi())