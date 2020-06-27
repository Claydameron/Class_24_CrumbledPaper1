class Paper{
constructor(x,y) {
    var options = {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.ellipse(x, y,50,50, options);
    this.height = 50;
    this.width = 50;
}
display()
 pos =this.body.position;
      push();
      translate(posX, posY);
      ellipseMode(CENTER);
      pop();
}