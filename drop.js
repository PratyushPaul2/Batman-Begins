class Drop {
    constructor(x,y){
        var options={
            'isStatic':true
        }
        this.body=Bodies.circle(x,y,5,options);
        this.body.radius=5;
        this.width=width;
        this.height=height;
    }

    display(){
        var angle = this.body.angle;
        push();
        fill("blue");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop();
    }


}