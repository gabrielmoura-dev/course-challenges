var numeroDeBaterias = document.querySelectorAll(".bateria").length;

for (var i = 0; i < numeroDeBaterias; i++) {
  document.querySelectorAll(".bateria")[i].addEventListener("click", function(){
    
    this.style.color = "white";




  });
}




// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();