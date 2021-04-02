import ConversationList from "./main/conversationList.js";
import Title from "./main/title.js"
class Main {
    conversationList;
    title;

    activeConversation;
    constructor(){
        this.conversationList = new ConversationList((conversation)=>{
            this.setActiveConversation(conversation);
        });
        this.title=new Title("",0);
    };

    setActiveConversation=(conversation)=>{
        this.activeConversation=conversation;

        this.conversationList.setActiveConversation(conversation);
        this.title.setActiveConversation(conversation);
    }

    initRender = (container) =>{
        const div = document.createElement("div");
        div.classList.add("d-flex", "item");
        div.style.height="100vh"

        const content = document.createElement("div");
        content.classList.add("item","grow-1","d-flex","flex-column");
        this.title.initRender(content);

        const div2 = document.createElement("div");
        div2.classList.add("item","grow-1", "d-flex");
        
        const conversationInfo = document.createElement("div");
        conversationInfo.style.width="200px";

        const div3= document.createElement("div");
        div3.classList.add("grow-1","item","d-flex","flex-column");

        const messageList = document.createElement("div");
        messageList.classList.add("grow-1","item");

        const composer = document.createElement("div");
        composer.classList.add("item")
        composer.innerHTML ="My computer";

        div3.appendChild(messageList);
        div3.appendChild(composer);
        
        div2.appendChild(div3);
        div2.appendChild(conversationInfo);

        content.appendChild(div2);

        this.conversationList.initRender(div);

        div.appendChild(content);
       
        container.appendChild(div);
    };
}
export default Main;