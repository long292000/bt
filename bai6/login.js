import app from "./index.js";
import Register from './register.js';
class Login {
    $txtEmail;
    $txtPassword;
    $formLogin;
    $btnSubmit;

    constructor(){
        this.$txtEmail=document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter email";

        this.$txtPassword = document.createElement("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Password";

        this.$formLogin=document.createElement("form");
        this.$formLogin.addEventListener("submit", this.login);

        this.$btnSubmit=document.createElement("button");
        this.$btnSubmit.type="submit";
        this.$btnSubmit.innerHTML="Login";

    }
    login =(event)=>{
        event.preventDefault();
        const email= this.$txtEmail.value;
        const password= this.$txtPassword.value;

        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then((userCredential)=>{
            console.log(userCredential)
        });
    };

    gotoRegister=()=>{
        const register = new Register();
        app.changeScreeen(register);
    };

    initRender = (container)=>{
        const flexContainer=document.createElement("div");
        flexContainer.classList.add("d-flex","flex-column","centering");
        const title= document.createElement("h2");
        title.innerHTML="Login";
        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$btnSubmit);
        
        const linkToRegigter=document.createElement("a");
        linkToRegigter.innerHTML="Go to Register";
        linkToRegigter.href="#";
        linkToRegigter.addEventListener("click", this.gotoRegister);

        flexContainer.appendChild(linkToRegigter);
    
        this.$formLogin.appendChild(flexContainer);
        container.appendChild(this.$formLogin);

        

    };
}
// class Input {
//     constructor(type, placeholder)
// }

export default Login;
