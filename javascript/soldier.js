class Soldier {
    constructor (){
        // Propiedades del soldado
        this.x = canvas.height / 2; // donde va a aparecer el muñeco
        this.y = 500; // donde va a aparecer el muñeco
        this.width = 80; // el tamaño de cada animacion (ancho)
        this.height =80; // tamaño de cada animacion (alto)
        this.img = new Image();
        this.img.src = "./images/fatbase_2.png"
        this.soldierSpeed = 20; // velocidad del soldado al moverse

        this.indiceX = 0; // donde empieza la animacion
        this.indiceY = 0; // dodne empieza la animacion


        this.spriteWidth = 48.47; // alto del muñeco
        this.spriteHeight = 72; // ancho del muñeco

        this.playerState = "frente";


        this.gameFrame = 0;
        this.straggerFrames = 45;
        this.spriteAnimations = [];
        this.animationStates = [
            {
                name: "frente",
                frames: 3,
            },
            {
                name: "izquierda",
                frames: 3,
            },
            {
                name: "derecha",
                frames: 3,
            },
            {
                name: "trasero",
                frames: 3,
            }
        ];
        this.animationStates.forEach((state, index) => {
            let frames = {
                loc: [],
            }
            for(let j = 0; j < state.frames; j++){
                let positionX = j * this.spriteWidth;
                let positionY = index * this.spriteHeight;
                frames.loc.push({x: positionX, y: positionY});
            }
            this.spriteAnimations[state.name] = frames;
        });
        console.log(this.spriteAnimations)

        
    }

    drawSoldier = () => {
        let position = Math.floor(this.gameFrame / this.straggerFrames) % this.spriteAnimations[this.playerState].loc.length;
        this.frameX = this.spriteWidth * position;
        this.frameY = this.spriteAnimations[this.playerState].loc[position].y;
        ctx.drawImage(this.img, this.frameX, this.frameY ,this.spriteWidth ,this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight)

        
        this.gameFrame++;
/*      funcion de animacion basica con un if
        this.indiceX = this.indiceX + 1;
        if(this.indiceX > 2){
            this.indiceX = 0; 
            ctx.drawImage(this.img, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        */      
} 
     soldierMovementUp = () => {
        this.y = this.y - this.soldierSpeed;
        this.playerState = "trasero"
        if(this.y < 0){
            this.y = 0;
        }
        
    }
    soldierMovementDown = () => {
        this.y = this.y + this.soldierSpeed;
        this.playerState = "frente"
        if(this.y + this.height >= canvas.height){
            this.y = canvas.height - this.height
        }
    }
    soldierMovementRight = () => {
        this.x = this.x + this.soldierSpeed;
        this.playerState = "derecha"
        if(this.x + this.width >= canvas.width){
            this.x = canvas.width - this.width
        }
    }

    soldierMovementLeft = () => {
        this.x = this.x - this.soldierSpeed;
        this.playerState = "izquierda"
        if(this.x < 0){
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
            alert("Tecla incorrecta")
        }
    } 

}