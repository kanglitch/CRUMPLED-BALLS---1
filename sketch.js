var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
keypressed();
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = Bodies.ellipse(50,5,10,10)
	World.add(world,paper)

	ground =new Ground(0,0,800,5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



