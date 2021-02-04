class Tom{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            density:50,
            setStatic:true
        }
        this.body = Bodies.rectangle(x, y, 400,600, options);
        this.width = 400;
        this.height = 600;
        this.image = loadImage("tom.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //rectMode(CENTER)
        //fill("yellow")
        //rect(0,0,this.width,this.height)
        pop();
      }
      score(){
        if(this.body.speed>1&&this.body.speed<5){
tomScore=tomScore-5
        }
      }
}