class Dog {
    constructor() {
      // Propiedades del dog
      this.x = 800;
      this.y = 0;
      this.width = 100;
      this.height = 100;
      this.img = new Image();
      this.img.src = "../images/animals.png";
      this.dogSpeed = 0.1; // velocidad del dog al moverse
  
      this.dogDirectionX = 1; // 1 es mover a la derecha y -1 mover a la izquierda.
      this.dogDirectionY = 1;
  
      this.spriteWidth = 52; // tamaño del sheet (ancho) * numero de columnas
      this.spriteHeight = 72; // tamaño del sheet (alto) * numero de filas
  
      
    }
  
    // Metodos del dog(acciones)
     // para que aparezca el soldado
     drawdog = () => {
      //drawImage(imagen, ubicacionX, ubicacionY, recorteX, recorteY, x1, y1, x2,y2)
      //ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      ctx.drawImage(this.img, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
      
  }
   
  
  dogWallCollision = () => {
    if ( this.x > canvas.width) {
      // la pelotita se tiene que regresar
      // console.log("choco con la pared") // ??
      // this.x = ballX - 20
      this.dogDirectionX = - 1;
    } else if (this.y > canvas.height) {
      this.dogDirectionY = - 1;
      //isGameOver = true;
    } else if (this.x < 0) {
      this.dogDirectionX = 1;
      // algo adicional
    } else if (this.y < 0) {
      this.dogDirectionY = 1;
    }
  
  }
  
  
  
  
  
  
  
  }
  