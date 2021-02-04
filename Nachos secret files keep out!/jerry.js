class Jerry{
    constructor(x, y) {
        var options = {
            density:50,
            setStatic:true
        }
        this.body = Bodies.rectangle(x, y, 400,400, options);
        this.width = 700;
        this.height = 400;
        this.image = loadImage("jerry.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
       // rectMode(CENTER)
        //fill("pink")
        //rect(0,0,this.width,this.height)
        pop();
        
      }
      score(){
        if(this.body.speed>1&&this.body.speed<5){
jerryScore=jerryScore-100
        }
      }
}