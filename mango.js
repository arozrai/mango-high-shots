class Mango{
    constructor(x,y,radius){
      var options={
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.x=x
      this.y=y
      this.image=loadImage("mango.png")
      this.body=Matter.Bodies.circle(x,y,radius/2,options)
      this.radius=radius
      World.add(world,this.body)
    }
    display(){
      this.pos=this.body.position
        push()
        translate(this.pos.x,this.pos.y)
      imageMode(RADIUS)
      image(this.image,0,0,this.radius,this.radius)
      pop()
    }
}