/**Front End Js for socket comunication */
const socket = io('http://localhost:3000');

let name = "ANONIMUS"
const form = document.querySelector('.input-form');
const input = document.querySelector('.message-input');
const messageContainer = document.querySelector('.messages-container');

const nameInputForm = document.querySelector('.name-input-form');
const profileName = document.querySelector('.name-input-form .profile-name');
const activeName = document.querySelector(".profile .active-name") 

const activeUsers = document.querySelector('.active-users-container');

appendMessage(`${name}:`,"Te has unido a la Sala","me");

socket.emit('new-user',name);

socket.on('chat-message', data =>{
    console.log(data);
    const {name, message} = data;
    appendMessage(`${name}:` ,message);
});

socket.on('user-connected', name =>{
    appendMessage(`${name}:`, "conected");
})
socket.on('user-disconnect', name =>{
    appendMessage(`${name}:`,` disconnect`);
})


socket.on('users-change', usersList =>{
    console.log(usersList);
    activeUsers.textContent = "";
    usersList.map((name)=>{
        appendUser("🟢",name)
    } )
    /* activeUsers */
} )

socket.on('user-name-change', names =>{
    const {newName,oldName} = names;
    console.log(names);
    appendMessage(`${newName}:`,`${oldName} es ahora ---> ${newName}`);
})

form.addEventListener('submit', e => {
    e.preventDefault();
    const message = input.value;
    appendMessage(`you:`,`${message}`,"me");
    socket.emit('send-chat-message',message);
    input.value = '';
})
function appendUser (emoji,name){
    
    const usercomp = `
        <div class="user">
            <span class="emoji" > ${emoji}</span>
            ${name}    
        </div>
    `;
    activeUsers.innerHTML += usercomp

}

function appendMessage (person,message,me="") {
    const messageContent = `
        <div class="message ${me}">
            <span class="person" > ${person}</span>
            ${message}    
        </div>
    `    

   /*  const newMessageElement = document.createElement('div');
    const personSpan = document.createElement('span');
    
    personSpan.textContent= `${person} : `;
    
    newMessageElement.innerText = message;
    newMessageElement.appendChild(personSpan);
    
    console.log(newMessageElement);*/
    messageContainer.innerHTML =   messageContainer.innerHTML + messageContent; 
}

nameInputForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    const oldName = activeName.textContent;
    const newName = profileName.value

    profileName.value = "";
    activeName.textContent = newName;
    appendMessage(`${newName}:`,`${oldName} eres ahora ---> ${newName}`,"me");
    socket.emit('user-name-change',{oldName,newName})
})