document.getElementById("input_button").addEventListener("click", function () {
  Duck_Sensei_Says();
  CreateMessageList();
});

function Duck_Sensei_Says() {
  const newText = document.getElementById("inputter").value;
  alert("you message has been sent to Duck Sensei: ");
}

window.addEventListener("load", function () {
  let name = this.prompt("write your name here, you shity human");
  this.alert("Hi " + name);
});

function CreateMessageList() {
  const newText = document.getElementById("inputter").value;
  const newLi = document.createElement("li");
  newLi.textContent = newText;
  document.getElementById("message_list").appendChild(newLi);
}

document.getElementById("user").addEventListener("click", function () {
  location.href = "user.html";
});

console.log("hi");
let user_name = document.getElementById("username").value;