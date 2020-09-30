//Global Variables
var obstacleGroup,obstaceImage,obstacle1;
var player,player_running;
var bananaGroup,bananaImage,banana1;
var background1,backImage;
var score;
var ground;


function preload(){
  backImage = loadImage ("jungle.jpg");
  player_running = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage= loadImage("Banana.png");
  obstacleImage= loadImage("stone.png");
                      
  
}


function setup() {
  createCanvas(600,500);
  
  background1 = createSprite(300,150,400,400);
  background1.addImage("scene",backImage);
  background1.velocityX = -6;
  ground = createSprite(150,420,600,20);
  ground.visible = false;
  background.scale = 0.4;
  score = 0;
  player = createSprite (50,400,60,50);
  
  player.addAnimation ("running",player_running);
  player.scale= 0.10;
 
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
}


function draw(){
 background(255);
  banana();
  obstacle();
  
  if (bananaGroup.isTouching){
    score=score+2;
  }
  if (obstacleGroup.isTouching(player)){
   player.scale = 0.08; 
   
    
  }
  
  if (background1.x<300){
  
  background1.x = background1.width/2;
  }
  
  
  player.collide(ground);
  
 
    switch(score){
      case 10: player.scale= 0.13;
        break;
      case 20 : player.scale = 0.14;
        break;
      case 30 : player.scale = 0.16;
        break;
      case 40 : player.scale = 0.18;
        break;
      case 50 : player.scale = 0.20;
        break;
      case 100 : player.scale = 0.25;
        break;
        default : break;
}
  
  if (keyDown("space")&&player.y<390){
   player.velocityY = -10
  }
 
  player.velocityY= player.velocityY+0.8;
  
  drawSprites();
  
  stroke("white")
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
}        

function obstacle(){

  if (World.frameCount%80===0){
  obstacle1 = createSprite(600,400,30,30);
  obstacle1.addImage("obstacle",obstacleImage);
  obstacle1.scale = 0.3;
  obstacle1.velocityX = -8  ;
  obstacleGroup.add(obstacle1);
  
  obstacle1.lifeTime = 60;
  }
}

function banana(){
  if (World.frameCount%95===0){
    
   banana1 = createSprite ( 600,240,30,30);
    banana1.addImage("obstacle",bananaImage);
  banana1.scale = 0.13;
  banana1.velocityX = -8  ;
  bananaGroup.add(banana1);
  
  banana1.lifeTime = 60;
  }
  
}

