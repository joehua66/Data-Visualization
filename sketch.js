let data;
let maxLat,maxLng,mainLat,mainLng;
let locations=[]

function preload(){
    data = loadJSON('./data.json');
}

async function setup(){
createCanvas(600,600)
const lats = data.locations.map( location => location[0])
maxLat = Math.max (... lats)
maxLng = Math.max(...data.locations.map(location => location[1]))
minLat = Math.min(...lats)
minLng = Math.min(...data.locations.map(location => location[1]))

console.log(maxLat,maxLng,minLat,minLng)

data.stations.forEach( s => {
    const location= new Location(s);
    locations.push(location);
})



}




function draw(){
    background(220)
   

    locations.forEach(s =>{
    s.display();
   })

}

