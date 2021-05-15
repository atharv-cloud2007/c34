class Ground{
    constructor(x,y,w,h){
    var options={
        isStatic:true,
        friction:2
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
    fill(255,255,255)
    rectMode(CENTER)
    rect(groundPos.x,groundPos.y,this.w,this.h)
}
}