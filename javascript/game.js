// ESTRUCTURA DE LA CLASE DE NUESTRO JUEGO, todas las caracteristicas del juego
class Game {
    constructor() {
        // todas las propiedades del juego
        this.bg = new Image();
        this.bg.src = "./images/bg.png"
        this.soldier = new Soldier();  // ? Propiedad para crear el soldado en el juego
        this.personArr = [] // ? para añadir mas de una persona al juego
        this.zombieArr = [ new Zombie()];
        this.contadorPersonas = 0;
        this.countTime = 30;
        this.isGameOn = true // saber si el jeugo esta funcionando
        this.winScore = 20;
        this.dog = new Dog();

        this.myMusicGameOver = new Audio("./music/gameOver.wav")
        this.myMusicGameOver.audio.volume= 0.1;
        this.myMusicVictoria = new Audio("./music/yeah.mp3")
        this.myMusicPrincipal = new Audio("./music/AMBIENTIC.mp3");
        this.myMusicPrincipal.audio.volume = 0.1;
        this.myMusicToquePersonaje = new Audio("./music/toque.wav");
    }


    drawBackground = () => {
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height); // dibujamos la imagen de fondon y la pasamos el tamaño de todo el fondo
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height) //  limpia todo el canvas desde la posicion 0,0 hasta canvas.width,height

    }
    // ventanita de puntuacion
    score = () => {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Rescued: ' + this.contadorPersonas , 100, 100);
      }

    winGame = () =>{
        if(this.contadorPersonas >= this.winScore){
            this.isGameOn = false;
            // ocultamos el canvas
            canvas.style.display = "none";
            //pantalla de winGame 
            gamewinScreen.style.display = "flex";
            console.log("youwin")
            this.myMusicVictoria.play();
        }
    }
    

 
    dogMovement = () => {
        if(this.soldier.x > this.dog.x){
            this.dog.x += this.dog.dogSpeed
        }else{
            this.dog.x -= this.dog.dogSpeed
        }
        if( this.soldier.y > this.dog.y){
            this.dog.y += this.dog.dogSpeed
        }else{
            this.dog.y -= this.dog.dogSpeed
        }
    }


    randomPerson = () => {       
        let randomX = Math.random() * (canvas.width - 64);
        let randomY = Math.random() * (canvas.height - 60);

        let newPerson = new Person(randomX, randomY);
        if(this.personArr.length == 0){         
            this.personArr.push(newPerson);
        }
    }

    

    // Los alliems que se van creando van aumentando la velocidad.
    spawningZombie = () => {      
        let newZombie = new Zombie();
        newZombie.zombieSpeed += 0.3 // aumenta la velocidad cada que se crea un nuevo zombie
        this.zombieArr.push(newZombie);
    }

    zombieMovement = (eachZombie) => {
        if(this.soldier.x > eachZombie.x){
            eachZombie.x += eachZombie.zombieSpeed
            eachZombie.playerState = "frente"
        }else{
            eachZombie.x -= eachZombie.zombieSpeed
            //eachZombie.playerState = "izquierda"
        }
        if( this.soldier.y > eachZombie.y){
            eachZombie.y += eachZombie.zombieSpeed
            //eachZombie.playerState = "derecha"
        }else{
            eachZombie.y -= eachZombie.zombieSpeed
            eachZombie.playerState = "frente"
        }
      }


    checkSoldierCollision = () => {
        if(this.personArr.length > 0){
            if (this.soldier.x < this.personArr[0].x + (this.personArr[0].width)&&
                this.soldier.x + (this.soldier.width - 50) > this.personArr[0].x &&
                this.soldier.y < this.personArr[0].y + (this.personArr[0].height - 40 ) &&
                (this.soldier.height) + this.soldier.y > this.personArr[0].y){
                this.personArr.pop()
                this.contadorPersonas++;
                this.myMusicToquePersonaje.play();
                console.log(this.personArr)

                if(this.contadorPersonas % 5 === 0){
                    //aqui agrego un nuevo zombie cada 5 personas capturadas
                    console.log("agregando zombie");
                    this.spawningZombie();

                }
              }
        }
        
    } 
    
    checkZombieCollision = (eachZombie) => {
        if (this.soldier.x < eachZombie.x + (eachZombie.width - 40) && // Toque al personaje por la izq.
            this.soldier.x + (this.soldier.width - 40 ) > (eachZombie.x) && // toque al personaje por la derecha.
            this.soldier.y < eachZombie.y + (eachZombie.height - 20) && // toque al personaje por arriba
            (this.soldier.height - 25 ) + this.soldier.y > eachZombie.y){ // toque al personaje por abajo
            this.myMusicPrincipal.stop();
            this.myMusicGameOver.play();
                //1. detener el loop
                this.isGameOn = false;
                //2. ocultar el canvas
                canvas.style.display = "none" // ? ocultamos el canvas cuando chocamos
                //3. buscar el gameOver screen y darle display flex.
                gameOverScreen.style.display = "flex";
                scoreCounter.textContent = " Total people rescued: " + this.contadorPersonas ;
              }        
      } 

      checkDogCollision = () => {
        if (this.soldier.x < this.dog.x + (this.dog.width - 40) &&
            this.soldier.x + (this.soldier.width - 40)> this.dog.x &&
            this.soldier.y < this.dog.y + (this.dog.height - 20) &&
            (this.soldier.height - 55) + this.soldier.y > this.dog.y){
            console.log("choque dog soldado") 
                //debemos terminar el juego
                //1. detener el loop
                this.isGameOn = false;               
                //2. ocultar el canvas
                canvas.style.display = "none" // ? ocultamos el canvas cuando chocamos
                //3. buscar el gameOver screen y darle display flex.
                gameOverScreen.style.display = "flex";
                this.myMusicPrincipal.stop();
                this.myMusicGameOver.play();
                scoreCounter.textContent = " Total people rescued: " + this.contadorPersonas ;
              }        
      } 
    // todas nuestros metodos (las acciones del juego)
    // generamos el bucle de todo el juego
    gameLoop = () => {
        this.clearCanvas();
        this.winGame();  
        this.myMusicPrincipal.play();
        this.checkSoldierCollision();
        this.drawBackground();
        this.soldier.drawSoldier();
        this.randomPerson();
        this.personArr[0].drawPerson();
        this.score();
        
        // se pinta el perro a mas de 5 personas rescatadas
        if (this.contadorPersonas >= 5 ){
            this.dog.drawdog();
        }

        // si las personas rescatadas son mayores que 5 o multiplo de 3, el perro se meueve
        if(this.contadorPersonas > 5 && this.contadorPersonas % 3 === 0){
            this.dogMovement();
        }
        this.dog.dogWallCollision();
        this.checkDogCollision();
        
        this.zombieArr.forEach((eachZombie) => {
            eachZombie.drawZombie();
            this.checkZombieCollision(eachZombie);
            this.zombieMovement(eachZombie);
        })   

        //aqui hacemos una condicion para saber si el juego esta funcionando, que haga el requestanimation
        if(this.isGameOn === true){
            requestAnimationFrame(this.gameLoop)
            
        }
    }

}
