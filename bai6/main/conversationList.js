import Conversation from "./conversation.js"
import CreateConversationModal from "./ConversationModal.js"
class ConversationList{
    $btnCreateConversation
    createConversationModal;
    $conversationListContainer;

    conversationList;
    activeConversation;
    onChangeActiveConversation;
    
    constructor(onChangeActiveConversation){
        this.$btnCreateConversation= document.createElement("button");
        this.$btnCreateConversation.innerHTML="New conversation";
        this.$btnCreateConversation.addEventListener("click",this.openCreateModal)

        this.$conversationListContainer=document.createElement("div");

        this.createConversationModal= new CreateConversationModal();
        this.setUpConversationListener();

        this.conversationList=[];

        this.onChangeActiveConversation= onChangeActiveConversation;
    }

    setUpConversationListener=()=>{
        db.collection("conversations").onSnapshot((snapshot)=>{
            snapshot.docChanges().forEach((change)=>{
                const conversation = new Conversation(
                    change.doc.id,
                    change.doc.data().name,
                    change.doc.data().users,
                    (conversation)=>{
                        this.onChangeActiveConversation(conversation);
                    }
                );
                this.conversationList.push(conversation);
                conversation.initRender(this.$conversationListContainer);
            });
        });
    };

    openCreateModal=()=>{
        this.createConversationModal.setVisible(true);
    };

    setActiveConversation=(conversation)=>{
        if(this.activeConversation){
            this.activeConversation.setActive(false);
        }
        this.activeConversation=conversation;
        this.activeConversation.setActive(true);
    }

    initRender = (container)=>{
        const div = document.createElement("div");
        div.classList.add("item");
        div.style.width="200px";

        div.appendChild(this.$btnCreateConversation);
        div.appendChild(this.$conversationListContainer);
        this.createConversationModal.initRender(div);
        

        container.appendChild(div);
        
    };
}
export default ConversationList;