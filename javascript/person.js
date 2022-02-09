class Person {
    constructor(paramX, paramY) {
      // Propiedades del humano
      this.x = paramX;
      this.y = paramY;
      this.width = 50;
      this.height = 50;
      this.img = new Image();
      this.img.src = "../images/soldier.png";
      this.speedPerson = Math.random() * 5 + 1;
      this.distance;
  
    }
  
    // Metodos del person(acciones)
     // para que aparezca el soldado
     drawPerson = () => {
      ctx.drawImage(this.img, 0, 0, 16, 32, this.x, this.y, this.width, this.height)
  }


 
  }