class Sling{
    constructor(body1,point1){
       var options={
           bodyA:body1,
          pointB:point1,
          stiffness:0.02,
          length:1
       }
      this.body=Matter.Constraint.create(options)
      World.add(world,this.body)
    }
    fly(){
      this.body.bodyA=null
    }
    attach(body){
      this.body.bodyA=body
    }
    display(){
      if (this.body.bodyA){
          var posA=this.body.bodyA.position
          var posB=this.body.pointB
          strokeWeight(1)
        line(posA.x,posA.y,posB.x,posB.y)
      }
    }
    
}