class Boy{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image=loadImage("boy.png")
       this.body = Bodies.rectangle(x,y,width/100,height/100)
       World.add(world,this.body)
    }
    display(){
        push()
       imageMode(CENTER)
       image(this.image,this.x,this.y,this.width,this.height)
       pop()
    }
}