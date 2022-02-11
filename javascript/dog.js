class Dog {
    constructor() {
      // Propiedades del dog
      this.x = 800;
      this.y = 0;
      this.width = 100;
      this.height = 100;
      this.img = new Image();
      this.img.src = "./images/animals.png";
      this.dogSpeed = 0.5; // velocidad del dog al moverse
  
      this.dogDirectionX = 1; // 1 es mover a la derecha y -1 mover a la izquierda.
      this.dogDirectionY = 1;
  
      this.spriteWidth = 52; // tamaño de la animacion
      this.spriteHeight = 72; // tamañno de la animacion
  
      
    }
    // Dibujar el perro
     drawdog = () => {
      ctx.drawImage(this.img, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
      
  }
   
  // para que no se salga de la pared el perro
  dogWallCollision = () => {
    if ( this.x > canvas.width) {
      this.dogDirectionX = - 1;
    } else if (this.y > canvas.height) {
      this.dogDirectionY = - 1;
    } else if (this.x < 0) {
      this.dogDirectionX = 1;
    } else if (this.y < 0) {
      this.dogDirectionY = 1;
    }
  
  }
  
  
  
  
  
  
  
  }
  