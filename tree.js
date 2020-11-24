class Tree{
    constructor(x,y,width,height){
       this.x=x
       this.y=y
       this.width=width
       this.height=height
       this.image=loadImage("tree.png")
       this.body = Bodies.rectangle(x,y,width,height)
       World.add(world,this.body)
    }
    display(){
        push()
        rectMode(CENTER)
        fill("brown")
       rect(this.x,this.y,this.width,this.height)
       pop()
    }
}