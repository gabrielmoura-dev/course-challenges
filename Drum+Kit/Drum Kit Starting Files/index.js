var numeroDeBaterias = document.querySelectorAll(".bateria").length;

for (var i = 0; i < numeroDeBaterias; i++) {
  document.querySelectorAll(".bateria")[i].addEventListener("click", function(){
    
    var letraBateria = this.innerHTML;
    switch (letraBateria) {
      case "w":
        var crashAudio = new Audio('./sounds/crash.mp3');
        crashAudio.play();
        break;
      case "a":
        var kickBassAudio = new Audio('sounds/kick-bass.mp3');
        kickBassAudio.play();
        break;
      case "s":
        var snareAudio = new Audio('sounds/snare.mp3');
        snareAudio.play();
        break;
      case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

      default: console.log(letraBateria);
    }
  });
}




// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();