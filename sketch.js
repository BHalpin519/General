var state = 0;

var xOffset = 0.01;
var yOffset = 0.01;
var pointHeight;

var myCanvas;


function setup(){
	myCanvas = createCanvas(800, 600);
	myCanvas.style('display', 'block');
	myCanvas.style('margin', 'auto');
	myCanvas.style('margin-top', '10px');

	noiseDetail(24);
	noStroke();


}

function draw(){
	if(state == 0){
		background(128);
		fill(0);
		var introString = "B\u00dcRGERMEISTER";
		textSize(36);
		text(introString, 230, 100);
		textSize(20);
		text("Press Any Key To Continue", 275, 500);
		fill(0);
		rect(0, 350, 800, 10);
	}
	else if(state == 1){
		//This part makes the random map
		for(var i = 0; i < 800; i += 5){
			for(var j = 0; j < 600; j += 5){
				pointHeight = map(noise(xOffset + i / 100.0, yOffset + j / 100.0), 0, 1, 0, 255);
				//Original: pointHeight >= 120
				if(pointHeight >= 127){
					fill(0, 0, 255);
				}
				else if(pointHeight <= 70){
					var g = map(pointHeight, 0, 70, 50, 128);
					fill(0, g, 0);
				}
				else{
					var x = map(pointHeight, 71, 119, 100, 150);
					fill(x, x - 75, 0);
				}
				rect(i, j, 5, 5);
			}
		}
		//End of random map generator
	}
	else if(state == 2){
		stroke(0);
		for(var k = 0; k < 800; k += 40){
			line(k, 0, k, 600);
		}
		for(var u = 0; u < 600; u+= 30){
			line(0, u, 800, u);
		}
	}
	else if(state == 3){
		ellipse(mouseX, mouseY, 25, 25);
		console.log("1 has been pressed");
	}
}


function keyPressed(){
	if(keyCode === 79){
		console.log("O has been pressed");
		state = 2;
	}
	else if(state == 0){
		state = 1;
	}
	if((state == 1) && (keyCode === 49)){
		state = 3;
	}
}

class City{
	constructor(inX, inY, inName){
		this.x = inX;
		this.y = inY;
		this.name = inName;
	}
	display(){
		ellipse(this.x, this.y, 25, 25);
	}
}
/*
function mousePressed(){
	if(hasCapitalCity == false){
		placeCapital(mouseX, mouseY);
	}
}


function placeCapital(inX, inY){
	capitalCityInput = createInput();
	capitalCityInput.position(400, 300);
	capitalButton = createButton("Create Capital City");
	capitalButton.position(capitalCityInput.x + capitalCityInput.width, 300);
	capitalButton.mousePressed(takeInput);

	capitalArr.push(new CapitalCity(inX, inY, name));
}

class CapitalCity{
	constructor(inX, inY, inName){
		this.x = inX;
		this.y = inY;
		this.name = inName;
	}
	display(){
		ellipse(this.x, this.y, 25, 25);
		if(dist(mouseX, mouseY, this.x, this.y) <= 25){
			text(this.name, this.x, (this.y + 25));
		}	
	}
}

function takeInput(){
	name = capitalCityInput.value();
	capitalCityInput.value("");
}
*/
/*
	if(hasCapitalCity == false){
		ellipse(mouseX, mouseY, 15, 15);	
	}
	else{
		for(var i = 0; i < capitalArr.length; i++){
			capitalArr[i].display();
		}
	}
*/	

/*
var hasCapitalCity = false;

var capitalArr = [];

var capitalCityInput;

var capitalButton;

var name;
*/
