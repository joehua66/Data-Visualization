let data;
let maxLat, maxLng, minLat, minLng;
let crimes = [];
let myMap;

function preload() {
    data = loadJSON('./data.json');
    myMap= loadImage('./map.jpeg')
}

async function setup() {
    createCanvas(1265*0.7, 977*0.7)

    const lats = data.crimes.map(crime => crime.location[0])
    console.log(lats)
    maxLat = Math.max(...lats)
    maxLng = Math.max(...data.crimes.map(crime => crime.location[1]))
    minLat = Math.min(...lats)
    minLng = Math.min(...data.crimes.map(crime => crime.location[1]))

    data.crimes.forEach(s => {
        const location = new Location(s);
        crimes.push(location);
    })
   // console.log(maxLat, maxLng, minLat, minLng)

}

function draw() {
    background(220)
    
    image(myMap,0,0,width,height)
    tint(180)
    crimes.forEach(s => {
        s.display();
        s.mouseOn();
    })

}

/*function mouseClicked(){
    crimes.forEach(s => {
        s.mouseClicked();
    })

}*/