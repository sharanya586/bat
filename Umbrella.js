class Umbrella {
    constructor(x, y) {
      var options = {
        'isStatic': true
      }

      this.body = Bodies.circle(x, y,50,options);
      this.image = loadImage("images/boy.png");
      World.add(world, this.body);
    }

    display(){
      push();
      imageMode(CENTER);
      image(this.image, this.body.position.x,this.body.position.y,200,200);
      pop();
    }

  }