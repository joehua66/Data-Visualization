class Location{
    constructor(crime){
        
        this.x= map(crime.location[1],minLng,maxLng,0,width)
        this.y= map(crime.location[0],minLat,maxLat,height,0)
        this.datetime=crime.datetime
        this.des=crime.description
        this.color=color(255,0,0)
        this.size=10
        this.textSize=24
        //this.color = color(random(255), random(255), random(255));
        

    }

    display(){
       
        noStroke();
        fill(this.color);
        circle(this.x,this.y,this.size)
        //console.log(this.color)
    }

    mouseOn() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.size/2) {
          // 如果点击到了圆形，改变颜色
          //this.color = color(random(255), random(255), random(255));
          this.size=30
          
          fill(0)
          textSize(this.textSize)
          textFont("monospace", 25);
          text(this.datetime,this.x+20,this.y-20)
          textSize(this.textSize/2)
         text(this.des,this.x+20,this.y+20)
        

         
        }

        if (d > this.size/2){
            this.size=10
        }
      
        //console.log(this.x,this.y)
        //console.log(mouseX,mouseY)
      // console.log(d);


    }

     /*mouseClicked() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        fill(0,0,255)
        textSize(this.textSize)
        text('hoooo',width/2,height/2)
       //text(this.des,this.x+20,this.y+20)
       //console.log(this.des)
      
        


    }*/
}