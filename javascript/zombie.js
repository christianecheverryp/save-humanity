class Zombie {
  constructor() {
    // Propiedades del zombie
    this.x = Math.random() * (canvas.width - 64);;
    this.y = Math.random() * (canvas.height - 60);
    this.width = 80;
    this.height = 80;
    this.img = new Image();
    this.img.src = "./images/zombie.png";
    this.zombieSpeed = 0.3; // velocidad del zombie al moverse

    this.zombieDirectionX = 1; // 1 es mover a la derecha y -1 mover a la izquierda.
    this.zombieDirectionY = 1;

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
   drawZombie = () => {
    //ctx.drawImage(this.img, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    let position = Math.floor(this.gameFrame / this.straggerFrames) % this.spriteAnimations[this.playerState].loc.length;
    this.frameX = this.spriteWidth * position;
    this.frameY = this.spriteAnimations[this.playerState].loc[position].y;
    ctx.drawImage(this.img, this.frameX, this.frameY ,this.spriteWidth ,this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight)

    
    this.gameFrame++;

}
zombieWallCollision = () => {
  if ( this.x > canvas.width) {
    this.zombieDirectionX = - 1;
  } else if (this.y > canvas.height) {
    this.zombieDirectionY = - 1;
  } else if (this.x < 0) {
    this.zombieDirectionX = 1;
  } else if (this.y < 0) {
    this.zombieDirectionY = 1;
  }

}
}
