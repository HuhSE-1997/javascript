

// blueprint(설계도), class 만 있으면 죽은 class
class User{
    constructor(name,lastName, email, password){
        this.username = name
        this.lastName = lastName
        this.email=email
        this.password=password
    }
    // class 안에  function도 당연히 넣을수 있다
    sayHello(){
      console.log(`Hello ${this.username}`)
    }
    getProfile(){
        console.log(`${this.username},${this.email},${this.password}`)
    }
  }
  
  // varialbe 을 만들어줘야지 살아있는 class를 사용 할 수 있음
  // 마음대로 자기가 원하는 만큼 선언 할 수 있다. 
  const sexyUser = new User("Huh", "Huh@com","1234");
  const uglyuser = new User();

  
  console.log(sexyUser.username)
  sexyUser.sayHello()
  sexyUser.getProfile()
  setTimeout(sexyUser.sayHello,4000)




  //************************************************************************************** */
//   this 는 class User 을 나타내고 있음
// super() 원래 클래스를 가져오는 아이


  class User{
    constructor(options){
      this.username = options.name;
      this.lastname = options.lastname;
      this.email = options.email;
      this.Password1 = options.Password1;
    };
    sayhello(){
      console.log(`Hello ${this.username}`)
    }
    getProfile(){
      console.log(`Hi ${this.username}, my last name is ${this.lastname}, and my email ${this.email}, ${this.Password1}`)
    }
    UpdatPassword(newPassword,currentPassword){
      if(currentPassword === this.Password1){
        this.Password1 = newPassword
      }else{
        console.log("no change")
      }
    }
  }

  // extend의 역할은 User 을 확장시켜주는 역할
  class Admin extends User{
      deleteWebsite(){
          console.log("see you")
      }
  }
  
  const SexyUser = new User("Huh")
  const GetProfile = new User("JIMIN", "HUH","HUh@naver.com","1234")
  const DeleteAdmin = new Admin("JIMIN", "HUH","HUh@naver.com","1234",true)

  DeleteAdmin.deleteWebsite()
  SexyUser.sayhello()
  GetProfile.getProfile()
  GetProfile.UpdatPassword("hhhh","1234")
  console.log(DeleteAdmin.email)
  console.log(GetProfile.Password1)