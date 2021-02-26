
//Object Destructuring
const setting = {
    color: {
      theme: "dark"
    }
  };
  
  
  const {
    color:{theme= "light"}
  } = setting;
  
  console.log(theme)
  // result:dark
  // setting function declare that theme is dark. it does not change theme variable.


  //Array Destruturing

  const days = ()=>["mon","tue","wen","thr","fri","sat","sun"]

  const [Mon,Tue,Wen] = days()

  console.log (Mon,Tue,Wen)

  //rename

  const setting = {
      color:{
          chosen_color:"dark"
      }
  }
  const {
      color:{chosen_color:chosenColor ="light"}
  } = setting

  console.log(chosenColor)



  // Value Shorthand
  const follow = chechFllow();
  const alert = checkAlert();

  const setting ={
      notification :{
          follow, // reprsent const follow = checkFllow() 
          alert: isAlert // if you want change value name. it is possible to change name of value.
      }
  }

// swaping 
let a = 1;
let b = 2;

[a,b] = [b,a]

console.log(a,b)

//omitting

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

const [,,,thu,fri] = days
console.log(thu,fri)