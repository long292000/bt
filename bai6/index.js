// import Register from "./register.js";
import Login from "./login.js";
import Main from "./main.js";

class App{
    activeScreen;
    container;

    constructor(container) {
        this.container=container;
        this.setUpFirebaseAuthListener();
    }

    setUpFirebaseAuthListener = () =>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                const main= new Main();
                this.changeScreeen(main);
            }else {
                const login = new Login();
                this.changeScreeen(login);
            }
        });
        
    }

    changeScreeen(screen) {
        if(this.activeScreen !== undefined){
            this.container.innerHTML="";
        }
        this.activeScreen=screen;
        this.activeScreen.initRender(this.container);
    }
}

const container = document.getElementById("app");
// const register = new Register();
const login= new Login();

// login.initRender(container);
const app =new App(container);
app.changeScreeen(login);

export default app;

