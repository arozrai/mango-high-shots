class Mango{
    constructor(x,y,radius){
      var options={
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.x=x
      this.y=y
      this.radius=radius
      this.body=Matter.Bodies.circle(x,y,radius,options)
    }
    display(){
        push()
      ellipseMode(RADIUS)
      fill("orange")
      ellipse(this.x,this.y,this.radius)
      pop()
    }
}