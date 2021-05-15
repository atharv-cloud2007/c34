class Box{
    constructor(x,y,w,h){
    var options={
        isStatic:false,
        friction:2,
        density:0.5,
        restitution:0.1
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)
}
display(){
    var groundPos=this.body.position
    fill(255,0,0)
    rectMode(CENTER)
    rect(groundPos.x,groundPos.y,this.w,this.h)
}
}