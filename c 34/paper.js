class Rock
 {
    constructor(x,y,w) {
      var options = {
          'restitution':0,
          'friction':1.1,
          'density':0.5
      }
      this.width=w
      
      this.body = Bodies.circle(x,y,w,options);
      
      World.add( world,this.body);
     
    }
    display(){
      var pos=this.body.position
      push()
      translate(pos.x,pos.y)
      fill(0,0,255)
      ellipseMode(RADIUS)
      ellipse(0,0,this.width,this.width)
      pop()
    }
    
  };
  