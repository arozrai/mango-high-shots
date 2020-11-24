class Sling{
    constructor(body1,X,Y){
       var options={
           bodyA:body1,
          pointB:{x:X,y:Y},
          stiffness:0.004,
          length:10
       }
      this.body=Matter.Constraint.create(options)
      this.X=X
      this.Y=Y
      World.add(world,this.body)
    }
    fly(){
      this.body.bodyA=null
    }
    display(){
      if (this.body.bodyA){
          var posA=this.body.bodyA.position
          strokeWeight(1)
        line(posA.x,posA.y,this.X,this.Y)
      }
    }
}