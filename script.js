class User{
    constructor(email, password){
        
        
        this.password = password
        console.log("Constructor")
        this.email = email;
       
    }
    get email(){
        
        return `${this._email}jayram`
    }
    set email(value){
        console.log("Set")
        this._email = value;
    }
    // get password(){
        
    //     return `${this._password}jayram`
    // }
    // set password(value){
    //     console.log("Set")
    //     this._password = value;
    // }
}

const hay = new User("jay@gmail.com", "abc")
console.log(hay.email);
console.log("Added Succefull")
