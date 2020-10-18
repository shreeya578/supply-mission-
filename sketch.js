var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body1,body2,body3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(width/2,height-45,200,20);
	box1.shapeColor="red";

	box2=createSprite(width/2-100,height-70,20,50);
	box2.shapeColor="red";

	box3=createSprite(width/2+100,height-70,20,50);
	box3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 15 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	var options={isStatic:true};

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , options);
	 World.add(world, ground);
	 
	 body1=Bodies.rectangle(width/2,height-45,200,20,options);
	 World.add(world,body1);

	 body2=Bodies.rectangle(width/2-100,height-70,20,50,options);
	 World.add(world,body2);

	 body3=Bodies.rectangle(width/2+100,height-70,20,50,options);
	 World.add(world,body3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
  }
}



