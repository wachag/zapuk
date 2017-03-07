/**
 * Created by wacha on 3/7/17.
 */
function Button(ctx, size, pinlen, x, y){
    this.size=size;
    this.outpin= new Rx.Subject();
    this.x = x;
    this.y = y;
    this.pinlen=pinlen;
    this.value=false;
    this.out=new Point(x+size/2+pinlen,y);
    this.ctx = ctx;
    this.isInside=function(xf,yf){
        if(xf>=this.x-this.size/2 &&xf<this.x+this.size/2 )
            if(yf>=this.y-this.size/2 &&yf<this.y+this.size/2 )
                return true;
        return false;
    };
    this.clicked=function() {
        this.value = this.value != true;

        this.draw();
        this.outpin.onNext(this.value);
    };
    this.draw=function() {
        this.ctx.beginPath();
        this.ctx.rect(this.x-this.size/2,this.y-this.size/2,this.size,this.size);
        this.ctx.fillStyle="white";
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.rect(this.x-this.size/2,this.y-this.size/2,this.size,this.size);
        this.ctx.moveTo(this.out.x,this.out.y);
        this.ctx.lineTo(this.out.x-this.pinlen,this.out.y);
        this.ctx.arc(this.x,this.y,this.size/2,0,2*Math.PI);
        this.ctx.stroke();
        if(this.value===true){
            this.ctx.fillStyle="black";
            this.ctx.beginPath();
            this.ctx.arc(this.x,this.y,this.size/2,0,2*Math.PI);
            this.ctx.fill();

        }
    }
}
