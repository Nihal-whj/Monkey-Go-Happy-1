
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var ground, invisibleGround


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  
monkey = createSprite(50,180,20,50);
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(10,200,400,20);
  //ground.x = ground.width /2;
  ground.velocityX =-6;
  
  invisibleGround=createSprite(10,200,400,20)
  invisibleGround.visible=false
  
  obstaclesGroup=createGroup();
}


function draw() {
background(255)
  
 monkey.collide(invisibleGround) 
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
 
  spawnObstacles();
  score = score + Math.round(getFrameRate()/60);
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6 
  
    obstacle.addImage("obstacle",obstacleImage)
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnBanana() {
  //write code here to spawn the clouds
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
}