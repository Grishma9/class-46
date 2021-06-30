var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ram,ravan,bird,arrow,gameOver,start,win,object,cloud;
var backgroundImg,ramImg,ravanImg,birdImg;
var arrowImg,gameoverImg,startImg,winImg,cloudImg;
var score,arrowGroup;
var count=5;
var birdkilled=0;


function preload(){
backgroundImg=loadImage("background.jpg");
ramImg=loadImage("shree ram Img1.png");
ravanImg=loadImage("ravan.png");
birdImg=loadImage("Picture1.png");
gameoverImg=loadImage("game over.png");
startImg=loadImage("start.png");
arrowImg=loadImage("Arrow.png");
winImg=loadImage("win1.png");
cloudImg=loadImage("newcloud.png");
}
function setup() {
  

  createCanvas(800,400);
 ram= createSprite(100, 200, 50, 50);
  ram.addImage(ramImg);
  ram.scale=0.5;
  
  


  object=createSprite(600, 110, 50, 50);
  object.visible = false;
  
  arrowGroup=new Group();
  birdGroup=new Group();
   score = 0;
  
}

function draw() {
  background(backgroundImg);  
  textSize(30);
  fill("red")
  text("Score: "+ score, 610,50);
  spawnClouds();
  Bird();
 
  
  if(score===100){
    win= createSprite(400,200,20,20);
   win. addImage(winImg);
     }
  
 
  object.debug=false;
  object.setCollider("rectangle",0,0,150,50);
  if(arrowGroup.isTouching(ravan)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    score+=5;
    count--;
}
  if(arrowGroup.isTouching(birdGroup)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    birdGroup.destroyEach();
    score=score-10;
    birdkilled+=1;
   
  }
   text("birdKilled:" + birdkilled,100,50);
  console.log(birdkilled);
  console.log(count);
  if(count === 0)
    {
      end= createSprite(400,200,20,20);
   end. addImage(gameoverImg);
      
    }
  if(arrowGroup.isTouching(object)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    score+=20
}
  if(keyDown("space")){
   createArrow();
  }
  
 
  drawSprites();
}
function createArrow(){
  arrow=createSprite(mouseX,mouseY , 50, 50);
  arrow.addImage(arrowImg);
  arrow.scale=0.1;
  arrow.velocityX =5;
  arrowGroup.add(arrow);
  return arrow;
}
function Bird(){
  if(frameCount%120===0){
  bird=createSprite(790,790,20,20);
     bird_=Math.round(random(2,6));
    bird.scale=0.2;
    bird.addImage(birdImg);
    bird.y=Math.round(random(100,300));
     bird.velocityX=-4;
    birdGroup.add(bird);
    return bird;
  }
}
function spawnClouds() {
    
    

    if (frameCount % 60 === 0) {

      ravan= createSprite(600, 200, 50, 50);
    ravan.addImage(ravanImg);
    ravan.scale=0.5;
    ravan.velocityX = -3;

    ravan.debug=false;
    ravan.setCollider("circle",0,0,120);
    
      var cloud = createSprite(790,120,40,10);
      cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudImg);
      cloud.scale = 0.1;
      cloud.velocityX = -3;
      ravan.x=cloud.x;
      
    //  cloudsGroup.add(cloud);

    }}