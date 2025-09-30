let body;
let face;
let n;

function preload() {
  body = loadImage('body.png');

  // get random face
  let n = int(random(1, 5));
  let imgName = n + ".png";  
  face = loadImage(imgName);
}

function setup() {
  createCanvas(400, 400);

  let button = createButton('How is it going?');
  button.position(100, 10);
  button.size(200, 30);
  button.style('font-size', '20px');
  button.style('stroke-color', 'red');

  button.mousePressed(() => {
    n = int(random(1, 5));
    let imgName = n + ".png";
    face = loadImage(imgName);
  });  
}

function draw() {
  background("beige");

  if( n===1 ) {
   background("darkgray");
  }
  if( n===2 ) {
   background("lightblue");
  }
  if( n===3 ) {
   background("lightpink");
  }
  if( n===4 ) {
   background("darkred");
  }

 image(body, 0, 0);
 image(face, 0, 0);   
 
  
}