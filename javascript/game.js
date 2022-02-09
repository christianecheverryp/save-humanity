// ESTRUCTURA DE LA CLASE DE NUESTRO JUEGO, todas las caracteristicas del juego
class Game {
    constructor() {
        // todas las propiedades del juego
        this.bg = new Image();
        this.bg.src = "../images/bg.png"
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
        if(this.contadorPersonas > 5){
            //aqui agrego un nuevo zombie
            console.log("agregando zombie");
            let newZombie = new Zombie();
            this.zombieArr.push(newZombie);
        }


    }
    zombieMovement = () => {
        if(this.soldier.x > this.zombieArr.x){
            this.zombieArr.x += this.zombieArr.zombieSpeed
        }else{
            this.zombieArr.x -= this.zombieArr.zombieSpeed
        }
        if( this.soldier.y > this.zombieArr.y){
            this.zombieArr.y += this.zombieArr.zombieSpeed
        }else{
            this.zombieArr.y -= this.zombieArr.zombieSpeed
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
    checkZombieCollision = () => {
        if (this.soldier.x < this.zombieArr.x + this.zombieArr.width &&
            this.soldier.x + this.soldier.width > this.zombieArr.x &&
            this.soldier.y < this.zombieArr.y + this.zombieArr.height &&
            this.soldier.height + this.soldier.y > this.zombieArr.y){
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
 
        this.checkZombieCollision();
        this.checkSoldierCollision();


        this.zombieMovement(); // todo, esto es un metodo de game, lo tengo que leer en un for each?
        
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
