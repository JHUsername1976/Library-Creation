//Library is:
//Contains all defined functions for a program (any program, if its included in the "index.html"'s head), so a programmer does not need to redefine code/repeat code
//think of p5.play.js


//place holder objects to take input (think of it like cells?)
function isTouching(object1,object2) {
    //boolean values - true and false
      if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2) {
          return true;
    }
    else {
      return false;
    }
      
}





function bounceOff(object1,object2){

    if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
      object2.x - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
      }
  
    if(object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
      }
      
  
    
  }