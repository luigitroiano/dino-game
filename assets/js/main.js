const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    
    setTimeout(function () {
      dino.classList.remove("jump");   
    }, 300 ); 
  }
}

let stillAlive = setInterval(function () {
  //posizione asse y dinosauro
  let dinoTopPosition = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  //posizione asse x cactus
  let cactusLeftPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  //console.log(cactusLeftPosition);
  if (dinoTopPosition >= 140 && cactusLeftPosition < 40 && cactusLeftPosition > 0) {
  //collisione
    alert("Game Over");
    location.reload();
  } 
  
},10);



document.addEventListener("keydown", function () {
  jump();
});

document.addEventListener("touchstart", function () {
  jump();
});
