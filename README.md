# save-humanity
[Link Deploy]
https://christianecheverryp.github.io/save-humanity/


## Description
Save Humanity es un juego donde el jugador se moverá libremente por la pantalla pero tendrá que esquivar los alliens que iran saliendo aleatoreamente por toda la pantalla y un perro a partir de la 5 persona rescatada donde se irá moviendo y se detendrá cada que rescatemos 3 personas.


## MVP
- El jugador se mueve libremente por la pantalla.
- Saldrán zombies aleatoreamente dentro de la pantalla.
- Aleatoreamente aparecerá un humano al que tiene que rescatar.
- Al rescatar el humano se iran aumentando el contador.
- A partir del 5 humano rescatado aparece un perro y se mueve cada 3 humanos rescatados.


## Backlog
- Crear username y high score.
- Animacion a los Alliens y perro.


## Data structure
## main.js
# addEventListeners
## game.js
# Class Game
# drawBackgroud();
# clearCanvas();
# score();
# winGame();
# dogMovement();
# randomPerson();
# spawningZombie();
# zombieMovement();
# checkSoldierCollision();
# checkZombieCollision();
# checkDogCollision();
# gameLoop();
## person.js
# drawPerson();
## soldier.js
# drawSoldier();
# soldierMovementUp();
# soldierMovementDown();
# soldierMovementRight();
# soldierMovementLeft();
# soldierMovement();
## person.js
# drawPerson();
## audio.js
## dog.js
# drawDog();
# dogWallCollision();


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
Task definition in order of priority


## Additional Links


### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)
