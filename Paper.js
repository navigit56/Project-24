class paper{
    Constructor(x,y,r){
        options={
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            density:1.2
        }
        this.x=x; 
		this.y=y;
		this.r=r;
		this.paper=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.paper);
        
    }
    display(){
        var pos = this.paper.position;

        push();
        Translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255,0,255);
        pop();

    }
    
}