class Soldier {
    constructor (){
        // Propiedades del soldado
        this.x = canvas.height / 2; // donde va a aparecer el muñeco
        this.y = 500; // donde va a aparecer el muñeco
        this.width = 80; // el tamaño de cada animacion (ancho)
        this.height =80; // tamaño de cada animacion (alto)
        this.img = new Image();
        this.img.src = "../images/fatbase_2.png"
        this.soldierSpeed = 20; // velocidad del soldado al moverse

        this.indiceX = 0; // donde empieza la animacion
        this.indiceY = 0; // dodne empieza la animacion


        this.spriteWidth = 52; // tamaño del sheet (ancho) * numero de columnas
        this.spriteHeight = 72; // tamaño del sheet (alto) * numero de filas


        
    }

    // Metodos del soldado (acciones)
    // para que aparezca el soldado

    drawSoldier = () => {
        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        //drawImage(imagen, ubicacionX, ubicacionY, recorteX, recorteY, x1, y1, x2,y2)
        //ctx.drawImage(this.img, 0, 0, 46, 58, this.x, this.y, this.width, this.height)
        //ctx.drawImage(this.img, this.indiceX, this.indiceY, this.width, this.height, this.x, this.y, this.width, this.height);
/*         this.indiceX = this.indiceX + 1;
        if(this.indiceX > 2){
            this.indiceX = 0; */
            ctx.drawImage(this.img, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }




    //Movimiento para todos los lados

     soldierMovementUp = () => {
        this.y = this.y - this.soldierSpeed;
        if(this.y < 0){
            console.log("toca arriba")
            this.y = 0;
        }
        
    }

    soldierMovementDown = () => {
        this.y = this.y + this.soldierSpeed;
        if(this.y + this.height >= canvas.height){
            console.log("toca abajo")
            this.y = canvas.height - this.height
        }
    }

    soldierMovementRight = () => {
        this.x = this.x + this.soldierSpeed;
        if(this.x + this.width >= canvas.width){
            console.log("toca derecha")
            this.x = canvas.width - this.width
        }
    }

    soldierMovementLeft = () => {
        this.x = this.x - this.soldierSpeed;
        if(this.x < 0){
            console.log("toca izquierda")
            this.x = 0;
        }
    } 

     soldierMovement = (event) => {
        if (event.key === "ArrowRight"){
            this.x = this.x + this.soldierSpeed;
        }else if (event.key === "ArrowDown"){
            this.y = this.y + this.soldierSpeed;
        }else if (event.key === "ArrowUp"){
            this.y = this.y - this.soldierSpeed;
        }else if (event.key === "ArrowLeft"){
            this.x = this.x - this.soldierSpeed;
        }else {
            console.log("tecla incorrecta")
        }
    } 

}