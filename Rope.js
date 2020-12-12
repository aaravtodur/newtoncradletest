class rope{
constructor(body1,body2,offsetX,offsetY){
this.offsetX=offsetX;
this.offsetY=offsetY;
 var opt={
     bodyA: body1,
     bodyB: body2,
     pointB: {x:this.offsetX,y:this.offsetY}
 }
this.rope=Matter.Constraint.create(opt);
World.add(world,this.rope);
}
display(){
var point1 = this.rope.bodyA.position;
var point2 = this.rope.bodyB.position;

stroke("black")

var Anchor1X = point1.X;
var Anchor1Y = point2.y;

var Anchor2X = point1.X;
var Anchor2Y = point2.Y;

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}