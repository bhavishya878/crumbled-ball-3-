var paper, dustbinRight, dustbinLeft, dustbinMiddle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth,700);


	engine = Engine.create();
	world = engine.world;

   paper1 = new Paper(150, 500, 10);   

 //dustbin  
   dustbinRight = new Dustbin(850, 580, 20, 150);
   dustbinMiddle = new Dustbin(1000, 650, 320, 20);
   dustbinLeft = new Dustbin(1150, 580, 20, 150);

 //ground
   ground = new Ground(610, height-40, 1505, 15); 

   sling1= new SlingShot(paper1.body,{x:250,y:400});
  
  
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

//displaying
  dustbinRight.display();
  dustbinMiddle.display();
  dustbinLeft.display();

  paper1.display();

  stroke("white");
  textSize(35);
  fill("white");
  text("Put the paper into the dustbin ", 450,50);
  
  ground.display();

  sling1.display();

  drawSprites();

}

function mouseDragged(){

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling1.fly();
}
/*
function keyPressed(){
 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x:15, y:-15});
 }
}*/