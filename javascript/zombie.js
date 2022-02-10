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

    this.spriteWidth = 52; // tamaño del sheet (ancho) * numero de columnas
    this.spriteHeight = 72; // tamaño del sheet (alto) * numero de filas

    
  }

  // Metodos del zombie(acciones)
   // para que aparezca el soldado
   drawZombie = () => {
    //let randomXZombie = Math.random() * (canvas.width - 64);
    //let randomYZombie = Math.random() * (canvas.height - 60);
    //drawImage(imagen, ubicacionX, ubicacionY, recorteX, recorteY, x1, y1, x2,y2)
    //ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    
    
}

 

zombieWallCollision = () => {
  if ( this.x > canvas.width) {
    // la pelotita se tiene que regresar
    // console.log("choco con la pared") // ??
    // this.x = ballX - 20
    this.zombieDirectionX = - 1;
  } else if (this.y > canvas.height) {
    this.zombieDirectionY = - 1;
    //isGameOver = true;
  } else if (this.x < 0) {
    this.zombieDirectionX = 1;
    // algo adicional
  } else if (this.y < 0) {
    this.zombieDirectionY = 1;
  }

}








}
