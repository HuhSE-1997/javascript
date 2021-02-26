// Array


// anyting variables make array.  Array.of
const Array1 = Array.of("hello", 1, true, 2);
console.log(Array1)



// array like object or iterable object change to array

console.log(Array.from('foo'))
console.log(Array.from([1,2,3], x => x+x));


//Array.find

const friends = [
    "park@naver.com",
    "lee@google.com",
    "huh@gmail.com",
    "cho@gorean.com"
  ];
// this function find out index of @gorean.com
// result:3
  const check = () => friends.findIndex(friend => friend.includes("@gorean.com"))
  // 3 put target
  let target = check()
  
  const username = friends[target].split("@")[0];
  //result:cho
  console.log(username)
  
  const email = "@korean.com"
  //cho@korean.com
  console.log(`${username}${email}`)



  // fill
  // fill(index,start,end)

  firends.fill("*".repeat(5),1,3)

  console.log(friends)

  //includes

  console.log(firends.includes("@google.com"));
  //result:True