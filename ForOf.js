const friends = ["park", "lee", "cho","Huh","kim","ki","jeong"]

for( const friend of friends){
    if(friend === "kim"){
      break
    }else{
      console.log(friend)
    }
} 


//for of 문
//for of 의 장점은 자기가 멈추고 싶은 곳에서 멈출수가 있다 그리고 코드도 깔끔하게 처리할수 있다.
//

for (const i of "hello how are you"){
    console.log(i)
}