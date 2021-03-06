class Rock {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.001,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x, y, radius/5, options);
      this.radius = radius
      this.image=loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill(255,0,255);
      imageMode(CENTER);
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  };