class Paper{
constructor(x,y) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x, y,70,options);
    this.height = 50;
    this.width = 50;

    World.add(world, this.body);
}
display() {
var pos = this.body.position;
      push();
      translate(pos.x, pos.x);
      ellipseMode(CENTER);
      ellipse(0,0,this.width,this.height);
      pop();
}
}