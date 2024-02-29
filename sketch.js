let data;
let maxLat,maxLng,mainLat,mainLng;
let crimes=[];

function preload(){
    data = loadJSON('./data.json');
}

async function setup(){
createCanvas(600,600)



const lats = data.crimes.map( location => location[0])
console.log(lats)
maxLat = Math.max (... lats)
maxLng = Math.max(...data.crimess.map(location => location[1]))
minLat = Math.min(...lats)
minLng = Math.min(...data.crimess.map(location => location[1]))

console.log(maxLat,maxLng,minLat,minLng)

data.crimes.forEach( s => {
    const location= new Location(s);
    crimes.push(location);
})



}




function draw(){
    background(220)
   

    crimes.forEach(s =>{
    s.display();
   })

}

