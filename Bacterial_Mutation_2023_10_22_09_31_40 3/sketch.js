/* 
Welcome to the Bacteria Lab! 
Click on the different chemicals to see the mutations they cause...
*/

let dia;
let dishRadius = 200;
let numCircles = 75;
let circles = [];
let r1, r2, r3, r4, g1, g2, g3, g4, b1, b2, b3, b4; //ring/chemical colors
let r5, g5, b5, r6, b6, g6, r7, b7, g7, r8, b8, g8; // bacteria colors
let firstColor, secondColor, thirdColor, fourthColor;

function setup() {
  createCanvas(451, 451);
  frameRate(8);

  //Create bounds so bacteria doesn't escape from petri dish
  for (let i = 0; i < numCircles; i++) {
    let x, y;
    let withinDish = false;
    while (!withinDish) {
      x = random(width / 2 - dishRadius, width / 2 + dishRadius);
      y = random(height / 2 - dishRadius, height / 2 + dishRadius);
      if (dist(width / 2, height / 2, x, y) < dishRadius) {
        withinDish = true;
      }
    }

    // Bacteria movement speeds
    let angle = random(TWO_PI);
    let speed = random(2, 4);

    circles.push({
      x: x,
      y: y,
      angle: angle,
      speed: speed,
    });
  }
}

function draw() {
  background(220);

  // Petri dish
  noStroke();
  fill(300);
  ellipse(width / 2, height / 2, dishRadius * 2);

  // For loop to produce the 'bacteria' with random motion
  for (let i = 0; i < numCircles; i++) {
    let circle = circles[i];
    circle.x += cos(circle.angle) * circle.speed;
    circle.y += sin(circle.angle) * circle.speed;

    if (dist(width / 2, height / 2, circle.x, circle.y) > dishRadius - 10) {
      // Reverse the direction when hitting the boundary
      circle.angle += PI;
    }

//RGB values
    noStroke();
    r1 = 0;
    g1 = 206;
    b1 = 209;
    r2 = 173;
    g2 = 255;
    b2 = 47;
    r3 = 255;
    g3 = 192;
    b3 = 203;
    r4 = 255;
    g4 = 165;
    b4 = 0;

    //'hot zones'
    fill(r1, g1, b1);
    ellipse(165, 165, dishRadius * 0.3);
    fill(r2, g2, b2);
    ellipse(280, 165, dishRadius * 0.3);
    fill(r3, g3, b3);
    ellipse(165, 285, dishRadius * 0.3);
    fill(r4, g4, b4);
    ellipse(280, 285, dishRadius * 0.3);

// default bacteria
    r5 = 200;
    g5 = 0;
    b5 = 300;
    fill(r5, g5, b5);
    noStroke();
    dia = random(5, 10);
    ellipse(circle.x, circle.y, dia);

// bacterial mutations
    if (firstColor == true) {
      r1 = 0; //blue 'chemical' circle displays
      g1 = 206;
      b1 = 209;
      otherthanBlue = 300;
      fill(r1, g1, b1);
      ellipse(165, 165, dishRadius * 0.3);

      r5 = 200; // bacteria effect_big diameter
      g5 = 0;
      b5 = 300;

      fill(r5, g5, b5);
      noStroke();
      dia = random(10, 30);
      ellipse(circle.x, circle.y, dia);
      frameRate(8);

      noFill(); // blue ring around petri
      stroke(r1, g1, b1);
      strokeWeight(4);
      ellipse(width / 2, height / 2, 400);
    }

    if (fourthColor == true) {
      r4 = 255; // orange 'chemical' circle displays
      g4 = 165;
      b4 = 0;
      fill(r4, g4, b4);
      ellipse(280, 285, dishRadius * 0.3);

      r8 = 255; // bacteria effect_small diameter
      g8 = 0;
      b8 = 0;
      noStroke();
      fill(r8, g8, b8);
      ellipse(circle.x, circle.y, dia);
      frameRate(100);

      noFill(); // orange ring around petri
      stroke(r4, g4, b4);
      strokeWeight(4);
      ellipse(width / 2, height / 2, 400);
    }

    if (secondColor == true) {
      r2 = 173; // green 'chemical'circle displays
      g2 = 255;
      b2 = 47;
      fill(r2, g2, b2);
      ellipse(280, 165, dishRadius * 0.3);

      r6 = 0; //bacteria effect_random green/blue
      g6 = random(300);
      b6 = random(255);
      noStroke();
      fill(r6, g6, b6);
      ellipse(circle.x, circle.y, dia);
      frameRate(8);

      noFill(); // green ring around petri
      stroke(r2, g2, b2);
      strokeWeight(4);
      ellipse(width / 2, height / 2, 400);
    }

    if (thirdColor == true) {
      r3 = 255; //pink 'chemical' circle displays
      g3 = 192;
      b3 = 203;
      fill(r3, g3, b3);
      ellipse(165, 285, dishRadius * 0.3);

      r7 = 221; // bacteria effect_plum&white (no fill)
      g7 = 160;
      b7 = 221;
      fill(300);
      stroke(r7, g7, b7);
      strokeWeight(1.5);
      ellipse(circle.x, circle.y, dia);
      frameRate(8);

      noFill(); // pink ring around petrie
      stroke(r3, g3, b3);
      strokeWeight(4);
      ellipse(width / 2, height / 2, 400);
    }
  }
}

function mouseClicked() {
  ring(mouseX, mouseY);
}

function ring(x, y) {
  if (x < 225 && y < 225) {
    firstColor = true;
    secondColor = false;
    thirdColor = false;
    fourthColor = false;
  } else if (x > 225 && y < 225) {
    firstColor = false;
    secondColor = true;
    thirdColor = false;
    fourthColor = false;
  } else if (x < 225 && y > 225) {
    firstColor = false;
    secondColor = false;
    thirdColor = true;
    fourthColor = false;
  } else if (x > 225 && y > 225) {
    firstColor = false;
    secondColor = false;
    thirdColor = false;
    fourthColor = true;
  }
}
