// MANEJO DE LAS PANTALLAS

// GLOBAL VARIABLES
let splashScreen = document.querySelector("#splash-screen"); // ? 1. selecciono la ventana de inicio
let gameOverScreen = document.querySelector("#gameover-screen")
let gamewinScreen = document.querySelector("#win-screen");
let canvas = document.querySelector("#my-canvas"); // ? 1. selecciono el canvas
let ctx = canvas.getContext("2d"); // ? 1. inicio la herramienta de pinta
let newGame; // esta variable va ser accesible desde cualquier lugar del codigo
//let audio = document.getElementById("audio")
let playPauseBtn = document.querySelector("#playPause-btn")

let instructionsBtn = document.querySelector("#instructions-btn")
let modal_container = document.getElementById("modal_container")
let closeInstructionsBtn = document.querySelector("#close-btn")

let scoreCounter = document.querySelector("#scoreCounter");





// STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  // ? 2. con esta funcion desaparece el splash screen y aparece el canvas
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  
 




//cuando apreto el boton start, quiero que se cree un nuevo elemento que guarde todo lo de la clase game
newGame = new Game();
console.log(newGame)
newGame.gameLoop(); // aqui invocamos al newGame para que inicie el juego

};

const restartGame = () => {
  // ? 2. con esta funcion desaparece el splash screen y aparece el canvas
  splashScreen.style.display = "none";
  canvas.style.display = "flex";
  gameOverScreen.style.display = "none"
  gamewinScreen.style.display = "none"


  //cuando apreto el boton start, quiero que se cree un nuevo elemento que guarde todo lo de la clase game
  newGame = new Game();
  console.log(newGame)
  newGame.gameLoop(); // aqui invocamos al newGame para que inicie el juego
};


// ADD EVENT LISTENERS
// ? 2. primero asignamos el boton y luego cuando clickemos ejecute la funcion startGame
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startGame);

let restartButton = document.querySelector("#restart-btn");
restartButton.addEventListener("click", () => {
  restartGame();
  console.log("pulsado")
});

let restartButtonLose = document.querySelector("#restart-btn-lose");
restartButtonLose.addEventListener("click", () => {
  restartGame();
  console.log("pulsado desde perder")
});


// ? evento que sea teclear sobre el canvas
document.addEventListener("keydown", (event) => {
  if(event.key === "ArrowUp"){
    newGame.soldier.soldierMovementUp();
  }else if(event.key === "ArrowDown" ){
    newGame.soldier.soldierMovementDown();
  }else if(event.key === "ArrowRight"){
    newGame.soldier.soldierMovementRight();
  }else if(event.key === "ArrowLeft"  ){
    newGame.soldier.soldierMovementLeft();
  }else{
    console.log("tecla incorrecta") // todo PONER UNA AVISO DE TECLA INCORRECTA
  }
  
  //console.log("Presionada " + key);
})


playPauseBtn.addEventListener("click", () =>{
  console.log("pulsado")
  playPause();
})

instructionsBtn.addEventListener("click", () => {
  modal_container.classList.add("show");
})

closeInstructionsBtn.addEventListener("click", () => {
  modal_container.classList.remove("show");
})

/* window.addEventListener("load" ,() => {
  console.log("pagina cargada")
  if(myMusic){
    myMusic.play();
  }
  
}) */

