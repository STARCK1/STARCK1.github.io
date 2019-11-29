var streams=[]
var symbol_size=25;
function setup() {
    img=loadImage('hackoverflow_title_black.png');
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    
        
      
    background(0);
    var x=0;
    for(var i=0;i<=width/10;i++){
        var stream=new Stream();
        stream.generate_symbol(x,random(window.innerHeight/3,window.innerHeight));
        streams.push(stream)
        x+=symbol_size;
    }

    textSize(symbol_size);
}
function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
  }
function Catana(x,y,speed,first){
    this.x=x;
    this.y=y;
    this.value;
    this.speed=speed;
    this.changechar=Math.round(random(20,60));
    this.first=first;

    this.setToRandomSymbol=function() {
        if (frameCount % this.changechar == 0) {
            this["value"] = String.fromCharCode(0x3A0 + Math.round(random(0, 96)));//creating the character
        }
    }
    this.fall=function () {
        this.y+=this.speed;
    }

    this.fall=function () {
        this.y=(this.y>=height)?0:this.y+=this.speed;
    }

}



function Stream(){
    this.symbols=[];
    this.totalSymbols=Math.round(random(10,40));
    this.speed=random(5,20);

    this.generate_symbol=function(x,y) {
        var first=Math.round(random(0,3))==1;
        for (var i = 0; i <= this.totalSymbols; i++) {
            var symbol = new Catana(x, y, this.speed,first);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbol_size;
            first=false;
        }
    }

     this.render=function(){

            this.symbols.forEach(function(Catana){
                if(Catana.first){
                    fill(180,180,255);
                }
                else{
                    fill(0,150,255);
                }
                text(Catana.value,Catana.x,Catana.y);
                Catana.fall();
                Catana.setToRandomSymbol();

            });

     }
}
function draw() {
    background(0,150);
    streams.forEach(function (stream) {
        stream.render();
    });

    image(img,(window.innerWidth-img.width)/2,(window.innerHeight-img.height)/2);
    // image(img,(window.innerWidth-img.width),(window.innerHeight-img.height)/2);
}
