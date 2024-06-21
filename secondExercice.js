const imageElement = document.getElementById("imageElement");
const inputElement = document.getElementById("inputElement");
const removeClickListener = document.getElementById("removeClickListener");

imageElement.addEventListener("dblclick", function() {
  alert("Vous avez cliquer deux fois sur l’image.");
});

removeClickListener.addEventListener("click", function() {
  imageElement.removeEventListener("dblclick", function() {});
});

inputElement.addEventListener("blur", function() {
  if (inputElement.value.length < 9) {
    inputElement.style.border = "2px solid red";
  } else {
    inputElement.style.border = "";
  }
});
