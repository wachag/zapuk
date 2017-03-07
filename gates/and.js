/**
 * Created by wacha on 3/7/17.
 */

function AndGate(ctx, size, pinlen, x, y, inpin0, inpin1) {
    this.size=size;
    this.x = x;
    this.y = y;
    this.pinlen=pinlen;
    this.in0=new Point(x-pinlen,y+size/4);
    this.in1=new Point(x-pinlen,y+3*size/4);
    this.out=new Point(x+pinlen+3*size/4,y+size/2);
    this.outpin=inpin0.combineLatest(inpin1,function (a,b){return a&&b;});
    this.ctx = ctx;
    this.draw=function () {

        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.bezierCurveTo(this.x+this.size,this.y+this.size/8,this.x+this.size,this.y+7*this.size/8,this.x,this.y+this.size);
        this.ctx.moveTo(this.x,this.y);
        this.ctx.lineTo(this.x,this.y+this.size);
        this.ctx.moveTo(this.in0.x,this.in0.y);
        this.ctx.lineTo(this.in0.x+this.pinlen,this.in0.y);
        this.ctx.moveTo(this.in1.x,this.in1.y);
        this.ctx.lineTo(this.in1.x+this.pinlen,this.in1.y);
        this.ctx.moveTo(this.out.x,this.out.y);
        this.ctx.lineTo(this.out.x-this.pinlen,this.out.y);
        this.ctx.stroke();
    }

}
