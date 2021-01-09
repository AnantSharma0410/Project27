
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new bob(400,410,30);
	bob2=new bob(460,410,30);
	bob3=new bob(520,410,30);
	bob4=new bob(340,410,30);
	bob5=new bob(280,410,30);
	roof=new roof(400,200,350,30);
	rope1= new rope(bob1.body,roof.body,0, 0)
	rope2= new rope(bob2.body,roof.body,60,0)
	rope3= new rope(bob3.body,roof.body,120, 0)
	rope4= new rope(bob4.body,roof.body,-60, 0)
	rope5= new rope(bob5.body,roof.body,-120, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-140,y:145});

  
	}
}
