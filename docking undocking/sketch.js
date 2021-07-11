

var iss,spacecraft,hasDocked=false
var issimg,spacebg,spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img

function preload(){
  issimg=loadImage("/Users/zarachak/Downloads/docking undocking/Docking-undocking/iss.png")
  spacebg=loadimage("/Users/zarachak/Downloads/docking undocking/Docking-undocking/spacebg.jpg")
  spacecraft1img=loadImage("/Users/zarachak/Downloads/docking undocking/Docking-undocking/spacecraft1.png")
  spacecraft2img=loadImage("/Users/zarachak/Downloads/docking undocking/Docking-undocking/spacecraft2.png")
  spacecraft3img=loadImage("/Users/zarachak/Downloads/docking undocking/Docking-undocking/spacecraft3.png")
  spacecraft4img=loadImage("/Users/zarachak/Downloads/docking undocking/Docking-undocking/spacecraft4.png")
}






function setup() {
  createCanvas(600,350);
  iss=createSprite(330,130)
  iss.addImage(issimg)
  iss.scale=0.25

  spacecraft=createSprite(285,240)
  spacecraft.addImage(spacecraft1img)
  spacecraft.scale=0.15

 
}



function draw() {
  background(spacebg);  

  if (!hasDocked){
    spacecraft.x=spaceccraft.x+random(-1,1)
    if (keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-2
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3img)
      spacecraft.x=spacecraft.x-1
    } 

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4img)
      spacecraft.x=spacecraft.x+1
    }
    
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2img)
      
    }
    
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){

    hasDocked=true
    textSize(25)
    fill("white")
    text("docking succesfull",200,300)

  }


   

  drawSprites();
}