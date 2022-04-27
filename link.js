class Link {
constructor(bodya,bodyb){
var lastlink = bodya.body.bodies.lenght-2
this.link = Constraint.create(
    {
        bodyA : bodya.body.bodies[lastlink],
        pointA : {x:0, y:0},
        bodyB : bodyb,
        pointB: {x:0, y:0},
        lenght : -10,
        stiffines : 0.01
}

)
      World.add(engine.world, this.link);
}




}










