const socket = io();
let name;
let messageArea = document.querySelector(".message_area");
let textarea = document.querySelector("#textarea");
do {
  name = prompt("Please enter your name :");
} while (!name);

document.querySelector("#username").innerText = name[0];

textarea.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (e.target.value.trim()) sendMessage(e.target.value);
    else e.target.value = "";
  }
});

function sendMessage(message) {
  let msg = {
    user: name,
    message: message.trim(),
  };
  //append message
  appendMessage(msg, "outgoing");
  scrollToBottom();

  //resetting the text area
  textarea.value = "";
  //send to server
  socket.emit("message", msg);
}
function appendMessage(msg, type) {
  let mainDiv = document.createElement("div");
  let className = type;
  mainDiv.classList.add(className, "message");

  let markUp = `
    <h4 style='word-wrap:break-word;'>${msg.user}</h4>
    <p>${msg.message}</p>
    `;
  mainDiv.innerHTML = markUp;
  messageArea.appendChild(mainDiv);
}

//receive message
socket.on("message", (msg) => {
  appendMessage(msg, "incoming");
  scrollToBottom();
});

function scrollToBottom() {
  messageArea.scrollTop = messageArea.scrollHeight;
}
