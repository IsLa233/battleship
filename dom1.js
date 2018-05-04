function init(){
  var title = document.getElementById("hi")
  alert(title.innerHTML);
  title.innerHTML = "fuckyou world";
}

window.onload = init;