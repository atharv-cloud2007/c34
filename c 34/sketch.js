const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var box1,ground,chain1,rock
var bg , box2 ,box3,box4;
var pole1,pole2,box5,box6,box7,box8;
function preload() {
    // create getBackgroundImg( ) here
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(800,400,50,100)
    box2= new Box(850,400,50,100)
    box3= new Box(900,400,50,100)
    box4= new Box(950,400,50,100)

    box5= new Box(800,300,50,100)
    box6= new Box(850,300,50,100)
    box7= new Box(900,300,50,100)
    box8= new Box(950,300,50,100)
    
    rock = new Rock(450,200,50)
    pole1 = new Ground(260,400,60,500)
    pole2 = new Ground(330,180,300,50)

    chain1 = new Chain(rock.body,{x:450,y:200})
    ground = new Ground(600,670,1200,30)
}

function draw(){
    // add condition to check if any background image is there to add
    background(255,255,255)
    // write code to display time in correct format here
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    ground.display()
    pole1.display()
    pole2.display()
    rock.display()
    chain1.display()
    Engine.update(engine);
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
