document.getElementById("input_button").addEventListener("click", function () {
  Duck_Sensei_Says();
});

function Duck_Sensei_Says() {
  const newText = document.getElementById("inputter").value;
  alert("you message has been sent to Duck Sensei: " + newText);
}
