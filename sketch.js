const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground1;
var box1;
var polygon, slingshot1;

function preload(){
  
   polygonImg = loadImage("polygon.png")
     
}

function setup(){
    createCanvas(1350,655)
    
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(900,350,230,10);
    ground2 = new Ground(590,480,270,10);
  
    box1 = new Box(870, 235, 30, 40);
    box2 = new Box(900, 235, 30, 40);
    box3 = new Box(840, 235, 30, 40);
    box4 = new Box(930, 235, 30, 40);
    box5 = new Box(960, 235, 30, 40);
    box6 = new Box(870, 205, 30, 40);
    box7 = new Box(900, 205, 30, 40);
    box8 = new Box(930, 205, 30, 40);
    box9 = new Box(900, 290, 30, 40);

    box10 = new Box(585, 400, 30, 40);
    box11 = new Box(555, 400, 30, 40);
    box12 = new Box(525, 400, 30, 40);
    box13 = new Box(615, 400, 30, 40);
    box14 = new Box(645, 400, 30, 40);
    box15 = new Box(675, 400, 30, 40);
    
    box17 = new Box(495, 400, 30, 40);
   
    box18 = new Box(585, 350, 30, 40);
    box19 = new Box(555, 350, 30, 40);
    box20 = new Box(525, 350, 30, 40);
    box21 = new Box(615, 350, 30, 40);
    box22 = new Box(645, 350, 30, 40);

    box23 = new Box(585, 320, 30, 40);
    box24 = new Box(555, 320, 30, 40);
    box25 = new Box(615, 320, 30, 40);
    box16 = new Box(585, 290, 30, 40);
  
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot1 = new Slingshot(this.polygon,{x:100, y:200});

}

function draw(){
    background("black")
    Engine.update(engine);
   
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x, polygon.position.y, 40, 40 );
   slingshot1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot1.fly();
} 

function keyPressed(){

if(keyCode===32){
      slingshot1.attach(this.polygon)
 }

}