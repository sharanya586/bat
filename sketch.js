const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,drops,boy,thunder,rand;
var drops = [];
var maxDrops = 100;
var x = 0;

function preload() {
    thunderimg = loadImage("images/thunder.png"); 
}
function setup(){
    canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    boy = new Umbrella(500,370);

    for (var i = 0; i <maxDrops; i++) {
        drops.push(new Drops(random(0,1000),random(0,500)));
    }


}

function draw(){
    background("black");    
    Engine.update(engine);
   
    for (var i = 0; i <maxDrops; i++) {
        drops[i].display();
        drops[i].update();
    }
    
    rand = Math.round(random(1,4));
    if (frameCount%80===0) {
      x=frameCount;
        thunder = createSprite(random(10,370),10,10,10);       
       switch (rand) {
            case 1 : thunder.addImage(thunderimg);
            break;
            case 2 : thunder.addImage(thunderimg);
            break;
            case 3 : thunder.addImage(thunderimg);
            break;
            case 4 : thunder.addImage(thunderimg);
            break;
            default:break;
        }
        thunder.scale = random(0.4,0.9)
    }
    if (x+10 === frameCount&&thunder) {
        thunder.destroy();
    }
      boy.display();
drawSprites();
}   

