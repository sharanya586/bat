class Drops {
    constructor(x, y) {
      var options = {
        'restitution': 1,
        'friction': 0.1,
        'isStatic': false
      }

      this.r=10;
      this.body = Bodies.circle(x, y,this.r, options);
      //this.color=color("white") 
      World.add(world, this.body);
    }

    display(){
      push();
      fill("white");
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,2, this.r);
      pop();
    }

    update(){
      if (this.body.position.y>500) {
          Matter.Body.setPosition(this.body,{x:random(0,1000),y:0})
      }
    }

  }