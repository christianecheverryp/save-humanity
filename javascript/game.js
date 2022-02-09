// ESTRUCTURA DE LA CLASE DE NUESTRO JUEGO, todas las caracteristicas del juego
class Game {
    constructor() {
        // todas las propiedades del juego
        this.bg = new Image();
        this.bg.src = "./images/bg.png"
        this.soldier = new Soldier();  // ? Propiedad para crear el soldado en el juego
        //this.zombie = new Zombie(); // ? Propiedad para crear el zombie en el juego
        this.personArr = [] // ? para añadir mas de una persona al juego
        this.zombieArr = [ new Zombie()];
        this.contadorPersonas = 0;
        this.countTime = 30;
        this.isGameOn = true // saber si el jeugo esta funcionando
        this.winScore = 50;
        this.dog = new Dog();
        
    
    }


    drawBackground = () => {
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height); // ? dibujamos la imagen de fondon y la pasamos el tamaño de todo el fondo
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height) // ? limpia todo el canvas desde la posicion 0,0 hasta canvas.width,height

    }

    score = () => {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText('Rescued: ' + this.contadorPersonas , 100, 100);
        //ctx.fillText('Time: ' + this.countTime , 100, 200);
      }

/*     timeFinishGame = () => {
        this.countTime -= 1 // Disminuye cada segundo
        if(this.countTime <= 0){
            // detenemos el loop
            this.isGameOn = false;
            // ocultamos el canvas
            canvas.style.display = "none";
            //pantalla de gameOver 
            gameOverScreen.style.display = "flex";

        }
    } */
    winGame = () =>{
        if(this.contadorPersonas >= this.winScore){
            this.isGameOn = false;
            // ocultamos el canvas
            canvas.style.display = "none";
            //pantalla de gameOver 
            gamewinScreen.style.display = "flex";
            console.log("youwin")
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

    // todo, aquie me agrega el zombie
    spawningZombie = () => {
        //let lastZombie = this.zombieArr[this.zombieArr - 1]; // ultimo zombie del array
        let newZombie = new Zombie();
        this.zombieArr.push(newZombie);


    }

    

    zombieMovement = (eachZombie) => {
        if(this.soldier.x > eachZombie.x){
            eachZombie.x += eachZombie.zombieSpeed
        }else{
            eachZombie.x -= eachZombie.zombieSpeed
        }
        if( this.soldier.y > eachZombie.y){
            eachZombie.y += eachZombie.zombieSpeed
        }else{
            eachZombie.y -= eachZombie.zombieSpeed
        }
      }




    checkSoldierCollision = () => {
        if(this.personArr.length > 0){
            if (this.soldier.x < this.personArr[0].x + this.personArr[0].width &&
                this.soldier.x + this.soldier.width > this.personArr[0].x &&
                this.soldier.y < this.personArr[0].y + this.personArr[0].height &&
                this.soldier.height + this.soldier.y > this.personArr[0].y){
                console.log("choque soldado persona") 
                this.personArr.pop()
                this.contadorPersonas++;
                console.log(this.personArr)

                if(this.contadorPersonas % 5 === 0){
                    //aqui agrego un nuevo zombie
                    console.log("agregando zombie");
                    this.spawningZombie();
                }
                
            
                // collision detected!
                //console.log("Colisionando!")
                //debemos terminar el juego
                //1. detener el loop
                //this.isGameOn = false;
                //2. ocultar el canvas
                //canvas.style.display = "none" // ? ocultamos el canvas cuando chocamos
                //3. buscar el gameOver screen y darle display flex.
                //gameOverScreen.style.display = "flex";
              }
        }
        
    } 
    
    // todo, aqui cambien zombie por zombieArr
    checkZombieCollision = (eachZombie) => {
        if (this.soldier.x < eachZombie.x + eachZombie.width &&
            this.soldier.x + this.soldier.width > eachZombie.x &&
            this.soldier.y < eachZombie.y + eachZombie.height &&
            this.soldier.height + this.soldier.y > eachZombie.y){
            console.log("choque zombie soldado") 

                
            
                // collision detected!
                //console.log("Colisionando!")
                //debemos terminar el juego
                //1. detener el loop
                this.isGameOn = false;
                //2. ocultar el canvas
                canvas.style.display = "none" // ? ocultamos el canvas cuando chocamos
                //3. buscar el gameOver screen y darle display flex.
                gameOverScreen.style.display = "flex";
              }        
      } 

      checkDogCollision = () => {
        if (this.soldier.x < this.dog.x + this.dog.width &&
            this.soldier.x + this.soldier.width > this.dog.x &&
            this.soldier.y < this.dog.y + this.dog.height &&
            this.soldier.height + this.soldier.y > this.dog.y){
            console.log("choque dog soldado") 

                
            
                // collision detected!
                //console.log("Colisionando!")
                //debemos terminar el juego
                //1. detener el loop
                //this.isGameOn = false;
                //2. ocultar el canvas
                //canvas.style.display = "none" // ? ocultamos el canvas cuando chocamos
                //3. buscar el gameOver screen y darle display flex.
                //gameOverScreen.style.display = "flex";
              }        
      } 






    // todas nuestros metodos (las acciones del juego)
    // generamos el bucle de todo el juego
    gameLoop = () => {
        // pasos que necesitamos
        // 1. Limpiar el canvas
        this.clearCanvas();
        this.winGame();

        // 2. Moverlos los elementos u otras acciones
        //this.zombie.zombieMovement();
 
        
        this.checkSoldierCollision();


    
        
        //this.spawningZombie();

        // 3. Dibujar los elementos
        this.drawBackground();
        this.soldier.drawSoldier();
        this.randomPerson();
        this.personArr[0].drawPerson();
        this.score();
        
        
        if(this.contadorPersonas > 5){
            this.dog.drawdog();
            this.dogMovement();
        }

       
        
        this.dog.dogWallCollision();

        this.checkDogCollision();

          this.zombieArr.forEach((eachZombie) => {
            eachZombie.drawZombie();
            this.checkZombieCollision(eachZombie);
            this.zombieMovement(eachZombie);

        })  
 
        //this.zombie.drawZombie();
        //this.zombieMovement();
        //this.zombie.zombieWallCollision();
        
        //this.zombie.drawZombie();
        //this.zombieMovement();
        //this.zombie.zombieWallCollision();

        // 4. Recursion para la animacion
        //aqui hacemos una condicion para saber si el juego esta funcionando, que haga el requestanimation
        if(this.isGameOn === true){
            requestAnimationFrame(this.gameLoop)
        }
    }

}
