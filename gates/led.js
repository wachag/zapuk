/**
 * Created by wacha on 3/7/17.
 */
function LED(ctx, size, pinlen, x, y, inpin){
    this.size=size;

    this.x = x;
    this.y = y;
    this.pinlen=pinlen;
    this.value=false;
    this.out=new Point(x-size/2-pinlen,y);
    this.ctx = ctx;
    this.inpin=inpin;
    this.draw=function() {
        this.ctx.beginPath();
        this.ctx.rect(this.x-this.size/2,this.y-this.size/2,this.size,this.size);
        this.ctx.fillStyle="white";
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.beginPath();
        this.ctx.moveTo(this.out.x,this.out.y);
        this.ctx.lineTo(this.out.x+pinlen,this.out.y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.size/2,0,2*Math.PI);
        this.ctx.stroke();
        this.ctx.stroke();
        if(this.value===true){
            this.ctx.fillStyle="red";
            this.ctx.beginPath();
            this.ctx.arc(this.x,this.y,this.size/2,0,2*Math.PI);
            this.ctx.fill();

        }
    };
    var _this=this; /* The ugliness of JS... */
    this.setVal=function(val){_this.value=val; _this.draw();};
    this.inpin.subscribe(this.setVal);
}
