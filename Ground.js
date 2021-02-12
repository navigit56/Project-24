class ground{
    Constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.ground = Bodies.rectangle(x,y,width,height);
        World.add(world,this.ground);
    }
    display(){
        var posofground = this.ground.position;
        rectMode(CENTER);
        fill(brown);
        rect(posofground.x,posofground.y,this.width,this.height);
    }
}