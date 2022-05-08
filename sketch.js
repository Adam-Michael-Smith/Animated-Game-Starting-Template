/* ----- SET INITIAL VARIABLES ----- */

let floorPos_y;

let gameChar_x;
let gameChar_y;

let treePos_x;
let treePos_y;

let canyon;
let collectable;

let mountain;
let cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; // position floor

	// use built-in p5 variables for width and height
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2 + 210; // 512
	treePos_y = height/2 + 45; // 288

	collectable = {
		x_pos: 100, 
		y_pos: 100, 
		size: 50
	};

	canyon = {
		x_pos: 0,
		y_pos: 0,
		width: 100
	};

	mountain = {
		x_pos: -20,
		y_pos: 0
	}

	cloud = {
		x_pos: 0,
		y_pos: 0,
		size: 90
	}
}

function draw()
{
	/* ----- FILL BLUE SKY & DRAW GREEN GROUND ----- */

	background(100, 155, 255);

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height + 150, width - floorPos_y);

	/* ----- DRAW CLOUD ----- */
	
	fill(255);
	ellipse(
		cloud.x_pos + 200,
		cloud.y_pos + 100,
		cloud.size
		);
	ellipse(
		cloud.x_pos + 160, 
		cloud.y_pos + 110,
		cloud.size - 40
		);
	ellipse(
		cloud.x_pos + 240, 
		cloud.y_pos + 110,
		cloud.size - 40
		);

	/* ----- DRAW MOUNTAINS ----- */
	fill(35);
	triangle(
		mountain.x_pos + 550, mountain.y_pos + 50,
		mountain.x_pos + 400, mountain.y_pos + 432,
		mountain.x_pos + 700, mountain.y_pos + 432
		);
	fill(40);
	triangle(
		mountain.x_pos + 400, mountain.y_pos + 190,
		mountain.x_pos + 250, mountain.y_pos + 432,
		mountain.x_pos + 550, mountain.y_pos + 432
		);
	fill(255);
	triangle(
		mountain.x_pos + 550, mountain.y_pos + 50,
		mountain.x_pos + 498, mountain.y_pos + 182,
		mountain.x_pos + 583, mountain.y_pos + 132
		);
	triangle(
		mountain.x_pos + 400, mountain.y_pos + 190,
		mountain.x_pos + 367.5, mountain.y_pos + 242,
		mountain.x_pos + 414, mountain.y_pos + 212
		);
	stroke(20,20,20,140); strokeWeight(6);
	line(
		mountain.x_pos + 580, mountain.y_pos + 160,
		mountain.x_pos + 500, mountain.y_pos + 300
		);
	line(
		mountain.x_pos + 500, mountain.y_pos + 300,
		mountain.x_pos + 600, mountain.y_pos + 240
		);
	line(
		mountain.x_pos + 600, mountain.y_pos + 240,
		mountain.x_pos + 600, mountain.y_pos + 300
		);
	noStroke();
	
	/* ----- DRAW CANYON ----- */
	fill(100, 155, 255);
	triangle(
		canyon.x_pos + 40, canyon.y_pos + 432,
		canyon.x_pos + 120, canyon.y_pos + 575,
		canyon.x_pos + 210, canyon.y_pos + 432
		);
	triangle(
		canyon.x_pos + 80, canyon.y_pos + 500,
		canyon.x_pos + 120, canyon.y_pos + 575,
		canyon.x_pos + 40, canyon.y_pos + 576
		);
	fill(0,155,0);
	triangle(
		canyon.x_pos + 40, canyon.y_pos + 432,
		canyon.x_pos + 40, canyon.y_pos + 575,
		canyon.x_pos + 130, canyon.y_pos + 432
		);
	fill(30,30,0);
	triangle(
		canyon.x_pos + 40, canyon.y_pos + 576,
		canyon.x_pos + 120, canyon.y_pos + 575,
		canyon.x_pos + 130, canyon.y_pos + 432
		);

	/* ----- DRAW TREE ----- */

	fill(100,50,0);
	rect(treePos_x - 75, treePos_y, 40, 100);
	fill(0,105,0);
	triangle(
		treePos_x - 55, treePos_y - 67, 
		treePos_x - 100, treePos_y + 67,
		treePos_x - 5, treePos_y + 67
		);	
	triangle(
		treePos_x - 55, treePos_y - 167,
		treePos_x - 100, treePos_y + 17,
		treePos_x - 5, treePos_y + 17
		);
	
	/* ----- DRAW COLLECTABLE TOKEN ----- */

	fill(195,155,0);
	ellipse(
		collectable.x_pos + 280, 
		collectable.y_pos + 295, 
		collectable.size
		);
	fill(255);
	text(
		"$", 
		collectable.x_pos + 272, 
		collectable.y_pos + 305
		);
	textSize(30);
	
	/* ----- DRAW GAME CHARACTER ----- */

	// upper-body
	fill(0,0,255);
	rect(gameChar_x - 10, gameChar_y - 50, 20, 20);

	// arms
	fill(0,0,175);
	rect(gameChar_x - 17, gameChar_y - 50, 7, 30);
	rect(gameChar_x + 10, gameChar_y - 50, 7, 30);

	// hands
	fill(255,155,155);
	ellipse(gameChar_x - 14, gameChar_y - 18, 10, 10);
	ellipse(gameChar_x + 14, gameChar_y - 18, 10, 10);

	// legs
	fill(0);
	rect(gameChar_x - 8, gameChar_y - 30, 7, 26);
	fill(50,50,50);
	rect(gameChar_x + 1, gameChar_y - 30, 7, 26);

	// feet
	fill(155);
	rect(gameChar_x - 11, gameChar_y - 4, 10, 6);
	rect(gameChar_x + 1, gameChar_y - 4, 10, 6);

	// head
	fill(255,155,155);
	ellipse(gameChar_x, gameChar_y - 60, 25, 25);
}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
