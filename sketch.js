const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var walking;
var thunder1,thunder2,tunder3,thunder4;




function preload(){
    walking=loadImage("walking_1.png");
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
}

function setup(){
   createCanvas(800,800);
   engine = Engine.create();
    world = engine.world;

   createDrops=[];
    
}

function draw(){
    background(0,0,0);
    
    image(walking,180,420,400,400);
    for(var i=0; i<20; i++){
      if(frameCount%5===0){
      var drop=new Drop(random(1,800),random(1,800));
      drop.display();
      }
    }

    rand=Math.round(1,4);
    if(frameCount%80===0){
      thunder=createSprite(random(10,770),random(10,60),20,20);
      switch (rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
      }
      thunder.scale=random(0.5,0.7);
      thunder.display();
      if(frameCount%80===0){
        thunder.destroy();
      }
    }
    

    
    drawSprites();
}   

