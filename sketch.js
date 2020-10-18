var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;

 

 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor = "green";
 gameObject2 = createSprite(200,100,50,50);
 gameObject2.shapeColor = "green";
 gameObject3 = createSprite(300,100,50,50);
 gameObject3.shapeColor = "green";
 gameObject4 = createSprite(400,100,50,50);
 gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  
     //movingRect.x = mouseX;
     //movingRect.y = mouseY;

  //Put it in the "()", it tells the function what to scan ()
    //parameters (or arguments)
     //it passes the values of these objects from there to the function, and it processes it like algorithm and puts out output
 /* if(isTouching(movingRect,gameObject3)) {
    movingRect.shapeColor = "purple";
    gameObject3.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  } */

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

