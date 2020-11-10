
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var bananasGroup;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas = (600,600);
  
  //creating monkey and ground
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  bananasgroup = createGroup();

  score = 0;
}


function draw() {
 background("lightblue")
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50)
  
  //when space key pressed monkey should jump
  if(keyDown("space")){
    monkey.velocityY = -12;
   }
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //stop monkey from falling down
  monkey.collide(ground);
  
  food();
  spawnObstacles();
  
  //scoring
    score = score + Math.round(getFrameRate()/60);
  
  
  
  
  
  
  drawSprites();
}
 
function food(){
  if (frameCount % 80 === 0){
     banana = createSprite(200,120,40,10);
     banana.y = Math.round(random(120,200));
     banana.addImage("banana", bananaImage)
     banana.scale = 0.1
     banana.velocityX = -3;
    
    //assigning lifetime to banana
    banana.lifetime = 80;
    
    bananasgroup.add(banana)
  }
}
function spawnObstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(600,330,10,40);
    obstacle.addImage("image",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -(6 + score/100);
    obstacle.lifetime = 80;
    
    
  }

}
