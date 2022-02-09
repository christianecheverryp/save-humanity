// MANEJO DE LAS PANTALLAS

// GLOBAL VARIABLES
let splashScreen = document.querySelector("#splash-screen"); // ? 1. selecciono la ventana de inicio
let gameOverScreen = document.querySelector("#gameover-screen")
let gamewinScreen = document.querySelector("#win-screen");
let canvas = document.querySelector("#my-canvas"); // ? 1. selecciono el canvas
let ctx = canvas.getContext("2d"); // ? 1. inicio la herramienta de pinta
let newGame; // esta variable va ser accesible desde cualquier lugar del codigo






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

