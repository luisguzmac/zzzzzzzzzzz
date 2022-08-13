var aliensclaseelite,aliensdeexploracion,reyalien,reayaliendisparando,reyalientocino,rateros,guardiarobot,guardiarobotrip,aliensclaseelitecaminando;
var peppa, humano;
var piupiu,piuuuuuuuuuuuu;

function preload(){
  aliensclaseelite=loadImage("alien.02.gif");
  aliensdeexploracion=loadImage("alien.gif");
  reyalien=loadImage("rey alien passivo.gif");
  reayaliendisparando=loadImage("rey alien.gif");
  reyalientocino=loadImage("rey alien muerte.gif");
  rateros=loadImage("soldado aliado de los aliens.gif");
  guardiarobot=loadImage("guardia del alien.3.gif");
  guardiarobotrip=loadImage("guardia del alien.3.derrotado.webp");
  aliensclaseelitecaminando=loadImage("alien.02.caminando.gif");
  peppa=loadImage("soldado.gif");
  piupiu=loadImage("source.gif");
  piuuuuuuuuuuuu=loadImage("tenor.gif");
}

function setup() {
  createCanvas(1200, 400);

  humano = createSprite(50,310,50,50)
  humano.addImage(peppa);
  humano.scale = 0.2;
  
  
}

function draw() {
  background("purple");
  edges=createEdgeSprites();
  humano.collide(edges);
if(keyDown("UP_ARROW")){
  humano.y=humano.y-10;
}

if(keyDown("DOWN_ARROW")){
  humano.y=humano.y+10;
}


  juegosdepiupiu();
  enemigos();

  drawSprites();
}

function juegosdepiupiu(){
  if(frameCount % 150 === 0){
    quetiimporta= createSprite(250,340);
    quetiimporta.y=humano.y;


    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: quetiimporta.addImage(piupiu);
              quetiimporta.scale = 0.2;
              quetiimporta.velocityX=3;
              break;
      case 2: quetiimporta.addImage(piuuuuuuuuuuuu);
              quetiimporta.scale = 0.4;
              quetiimporta.velocityX=3;
              break;
     
      default: break;
    }

    
    
    quetiimporta.lifetime = 410;
  }
}

function enemigos(){
  if(frameCount % 100 === 0){
    var enemig = createSprite(1200,300,50,50);
    enemig.y = Math.round(random(100,300));

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: enemig.addImage(rateros);
              enemig.scale = 0.6;
              break;
      case 2: enemig.addImage(guardiarobot);
              enemig.scale = 0.4;
              break;
      case 3: enemig.addImage(aliensdeexploracion);
              enemig.scale = 0.25;
              break;
      case 4: enemig.addImage(aliensclaseelite);
              enemig.scale = 0.4;
              break;
      default: break;
    }

    
    enemig.velocityX = -3;
    enemig.lifetime = 410;
  }
}





















































































