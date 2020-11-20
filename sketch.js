var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(600, 10, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(600, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(600,585,1200,20);
	groundSprite.shapeColor=color(225)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(600, 100 , 5 , 
								{restitution:0.1, isStatic:true,friction:1});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(600, 585, 1200, 20 , {isStatic:true ,friction:1 } );
 	World.add(world, ground);


	Engine.run(engine);

   box1 = new Box(600,540,200,20);
    box2 = new Box(490,500,20,100);
    box3 = new Box(710,500,20,100);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x= ground.position.x
  groundSprite.y=ground.position.y
 
  keyPressed();

	box1.display();
    box2.display();
    box3.display();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 // makes the pakage move 
    Matter.Body.setStatic(packageBody , false)
  }
}