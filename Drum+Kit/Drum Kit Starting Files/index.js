var numeroDeBaterias = document.querySelectorAll(".bateria").length;

for (var i = 0; i < numeroDeBaterias; i++) {
  document.querySelectorAll(".bateria")[i].addEventListener("click", function(){
    alert("Me clicaram");
  });
}


// document.querySelector(".set").addEventListener("click", testClick);

// function testClick() {
//   alert("Me clicaram");
// }
