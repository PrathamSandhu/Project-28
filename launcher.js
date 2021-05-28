class Launcher{
    constructor( body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.01,
            length : 15,
          }
          this.launcher = Constraint.create(options);
          World.add( world, this.launcher);
          this.A = body1;
          this.B = point2;


    }
    fly(){
        this.launcher.bodyA = null;
    }
}