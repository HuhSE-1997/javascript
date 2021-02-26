const Defaults = "gaesae"
const sayHi = (aName = Defaults) => `"hello ${aName} it is nice weather"`
// `${}` => templete literals, it is possible to put string, int, function etc.. 
console.log(sayHi())


// example)
const add = (a,b) => a + b;
console.log(`answer is ${add(2,3)}`)


// Html, css fragment
const styled = aElement =>{
    const el = document.createElement(aElement);
    return args => {
      const styles =args[0];
      el.style = styles;
      return el;
    };
  };
  
  const title = styled("h1")`
    border-radius:15px;
    color:blue
  `;
  
  const subtitle = styled("div")`
    color:green;
    `
  
  title.innerText = "we just cloned";
  subtitle.innerText = "fuck you"
  document.body.append(title,subtitle)


  // include => find you want string
  // example
  const findOut = (email1) => email1.includes("@")
  console.log(findOut("park@naver.com"))

  //repeat example

  const CC_Number = "6000"
  const displayName = `${"*".repeat(50)}${CC_Number}`;

  console.log(displayName)

  // startsWith, endsWith
  const names = "hello how are you"
  console.log(names.startsWith("hello")) // Ture
  console.log(names.endsWith("you")) // True