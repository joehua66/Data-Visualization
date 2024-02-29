class Location{
    constructor(loaction){
        //this.id= stations.id
        this.x= map(location[0],minLng,maxLng,0,width)
        this.y= map(location[1],minLat,maxLat,height,0)
    }

    display(){
        noStroke();
        fill(150);
        circle(this.x,this.y,3)

    }
}