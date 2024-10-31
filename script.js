const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var curType = 0;
var shirtPrimaryColor;
var shirtSecondaryColor;
var shortsColor;
var sleaveColor;
var markColor;

function getColors() {
	shirtPrimaryColor = document.querySelector("#shirtPrimaryColor").value;
	shirtSecondaryColor = document.querySelector("#shirtSecondaryColor").value;
	shortsColor = document.querySelector("#shortsColor").value;
	sleaveColor = document.querySelector("#sleaveColor").value;
	markColor = document.querySelector("#markColor").value;
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawShape() {
	ctx.beginPath();
	const x1 = arguments[0];
	const y1 = arguments[1];
	ctx.moveTo(x1, y1);
	for (let i = 2; i < arguments.length; i += 2) {
		x2 = arguments[i];
		y2 = arguments[i + 1];
		ctx.lineTo(x2, y2);
	}
	ctx.closePath();
	ctx.fillStyle = arguments[arguments.length - 1];
	ctx.fill();
}

function drawHalfCircle(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI, false);
	ctx.lineTo(x - radius, y);
	ctx.closePath();

	ctx.fillStyle = "#58595b";
	ctx.fill();
}

function drawLight(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.fillStyle = "#ffffff22";
	ctx.fill();
	ctx.closePath();
}

function drawPlain() {
	// Draw Left Sleeve
	drawShape(120, 140, 120, 124, 170, 124, 170, 140, sleaveColor);
	// Draw Left Arm
	drawShape(120, 124, 120, 80, 170, 30, 170, 124, shirtPrimaryColor);
	// Draw Body
	drawShape(170, 30, 330, 30, 330, 285, 170, 285, shirtPrimaryColor);

	// Draw Right Sleeve
	drawShape(380, 140, 380, 124, 330, 124, 330, 140, sleaveColor);
	// Draw Right Arm
	drawShape(380, 124, 380, 80, 330, 30, 330, 124, shirtPrimaryColor);
	//Draw Shorts
	drawShape(170, 290, 170, 315, 140, 460, 230, 480, 250, 425, 270, 480, 360, 460, 330, 315, 330, 290, shortsColor);

	// Draw Mark
	drawShape(285, 88, 293, 88, 293, 96, 285, 96, markColor);
	drawShape(298, 88, 306, 88, 306, 96, 298, 96, markColor);
	drawShape(311, 88, 319, 88, 319, 96, 311, 96, markColor);
	drawShape(289, 106, 315, 106, 315, 122, 302, 132, 289, 122, markColor);

	// Draw holder
	drawShape(246, 314, 254, 314, 266, 332, 262, 337, 250, 322, 238, 347, 234, 342, markColor);
	// Draw Neck
	drawHalfCircle(250, 30, 35);

	// Draw Light
	drawLight(120, 30, 210);

	// Draw Shadow
	drawShape(179, 30, 188, 30, 188, 50, 179, 50, "#00000066");
	drawShape(197, 30, 206, 30, 206, 50, 197, 50, "#00000066");
	drawShape(294, 30, 303, 30, 303, 50, 294, 50, "#00000066");
	drawShape(312, 30, 321, 30, 321, 50, 312, 50, "#00000066");

	drawShape(163, 140, 163, 110, 170, 110, 170, 140, "#00000066");
	drawShape(337, 140, 337, 110, 330, 110, 330, 140, "#00000066");
}

function drawStripe() {
	// Draw Left Sleeve
	drawShape(120, 140, 120, 124, 170, 124, 170, 140, sleaveColor);
	// Draw Left Arm
	drawShape(120, 124, 120, 80, 170, 30, 170, 124, shirtPrimaryColor);
	// Draw Body
	drawShape(170, 30, 330, 30, 330, 285, 170, 285, shirtPrimaryColor);
	// Draw Stripe
	drawShape(175, 30, 205, 30, 205, 285, 175, 285, shirtSecondaryColor);
	drawShape(235, 30, 265, 30, 265, 285, 235, 285, shirtSecondaryColor);
	drawShape(295, 30, 325, 30, 325, 285, 295, 285, shirtSecondaryColor);
	// Draw Right Sleeve
	drawShape(380, 140, 380, 124, 330, 124, 330, 140, sleaveColor);
	// Draw Right Arm
	drawShape(380, 124, 380, 80, 330, 30, 330, 124, shirtPrimaryColor);
	//Draw Shorts
	drawShape(170, 290, 170, 315, 140, 460, 230, 480, 250, 425, 270, 480, 360, 460, 330, 315, 330, 290, shortsColor);

	// Draw Mark
	drawShape(285, 88, 293, 88, 293, 96, 285, 96, markColor);
	drawShape(298, 88, 306, 88, 306, 96, 298, 96, markColor);
	drawShape(311, 88, 319, 88, 319, 96, 311, 96, markColor);
	drawShape(289, 106, 315, 106, 315, 122, 302, 132, 289, 122, markColor);

	// Draw holder
	drawShape(246, 314, 254, 314, 266, 332, 262, 337, 250, 322, 238, 347, 234, 342, markColor);
	// Draw Neck
	drawHalfCircle(250, 30, 35);

	// Draw Light
	drawLight(120, 30, 210);

	// Draw Shadow
	drawShape(163, 140, 163, 110, 170, 110, 170, 140, "#00000066");
	drawShape(337, 140, 337, 110, 330, 110, 330, 140, "#00000066");
}

function drawHoops() {
	// Draw Left Sleeve
	drawShape(120, 140, 120, 124, 170, 124, 170, 140, sleaveColor);
	// Draw Left Arm
	drawShape(120, 124, 120, 80, 170, 30, 170, 124, shirtPrimaryColor);
	// Draw Body
	drawShape(170, 30, 330, 30, 330, 285, 170, 285, shirtPrimaryColor);

	// Draw Hoops
	drawShape(175, 85, 330, 85, 330, 110, 175, 110, shirtSecondaryColor);
	drawShape(175, 135, 330, 135, 330, 160, 175, 160, shirtSecondaryColor);
	drawShape(175, 185, 330, 185, 330, 210, 175, 210, shirtSecondaryColor);
	drawShape(175, 235, 330, 235, 330, 260, 175, 260, shirtSecondaryColor);

	// Draw Right Sleeve
	drawShape(380, 140, 380, 124, 330, 124, 330, 140, sleaveColor);
	// Draw Right Arm
	drawShape(380, 124, 380, 80, 330, 30, 330, 124, shirtPrimaryColor);
	//Draw Shorts
	drawShape(170, 290, 170, 315, 140, 460, 230, 480, 250, 425, 270, 480, 360, 460, 330, 315, 330, 290, shortsColor);

	// Draw Mark
	drawShape(285, 88, 293, 88, 293, 96, 285, 96, markColor);
	drawShape(298, 88, 306, 88, 306, 96, 298, 96, markColor);
	drawShape(311, 88, 319, 88, 319, 96, 311, 96, markColor);
	drawShape(289, 106, 315, 106, 315, 122, 302, 132, 289, 122, markColor);

	// Draw holder
	drawShape(246, 314, 254, 314, 266, 332, 262, 337, 250, 322, 238, 347, 234, 342, markColor);
	// Draw Neck
	drawHalfCircle(250, 30, 35);

	// Draw Light
	drawLight(120, 30, 210);

	// Draw Shadow
	drawShape(179, 30, 188, 30, 188, 50, 179, 50, "#00000066");
	drawShape(197, 30, 206, 30, 206, 50, 197, 50, "#00000066");
	drawShape(294, 30, 303, 30, 303, 50, 294, 50, "#00000066");
	drawShape(312, 30, 321, 30, 321, 50, 312, 50, "#00000066");

	drawShape(163, 140, 163, 110, 170, 110, 170, 140, "#00000066");
	drawShape(337, 140, 337, 110, 330, 110, 330, 140, "#00000066");
}

function drawSash() {
	// Draw Left Sleeve
	drawShape(120, 140, 120, 124, 170, 124, 170, 140, sleaveColor);
	// Draw Left Arm
	drawShape(120, 124, 120, 80, 170, 30, 170, 124, shirtPrimaryColor);
	// Draw Body
	drawShape(170, 30, 330, 30, 330, 285, 170, 285, shirtPrimaryColor);
	// Draw Sash
	drawShape(300, 30, 330, 30, 180, 285, 170, 285, 170, 245, shirtSecondaryColor);

	// Draw Right Sleeve
	drawShape(380, 140, 380, 124, 330, 124, 330, 140, sleaveColor);
	// Draw Right Arm
	drawShape(380, 124, 380, 80, 330, 30, 330, 124, shirtPrimaryColor);
	//Draw Shorts
	drawShape(170, 290, 170, 315, 140, 460, 230, 480, 250, 425, 270, 480, 360, 460, 330, 315, 330, 290, shortsColor);

	// Draw Mark
	drawShape(285, 88, 293, 88, 293, 96, 285, 96, markColor);
	drawShape(298, 88, 306, 88, 306, 96, 298, 96, markColor);
	drawShape(311, 88, 319, 88, 319, 96, 311, 96, markColor);
	drawShape(289, 106, 315, 106, 315, 122, 302, 132, 289, 122, markColor);

	// Draw holder
	drawShape(246, 314, 254, 314, 266, 332, 262, 337, 250, 322, 238, 347, 234, 342, markColor);
	// Draw Neck
	drawHalfCircle(250, 30, 35);

	// Draw Light
	drawLight(120, 30, 210);

	// Draw Shadow
	drawShape(163, 140, 163, 110, 170, 110, 170, 140, "#00000066");
	drawShape(337, 140, 337, 110, 330, 110, 330, 140, "#00000066");
}

function drawHalf() {
	// Draw Left Sleeve
	drawShape(120, 140, 120, 124, 170, 124, 170, 140, sleaveColor);
	// Draw Left Arm
	drawShape(120, 124, 120, 80, 170, 30, 170, 124, shirtSecondaryColor);
	// Draw Body
	drawShape(170, 30, 250, 30, 250, 285, 170, 285, shirtSecondaryColor);
	drawShape(250, 30, 330, 30, 330, 285, 250, 285, shirtPrimaryColor);

	// Draw Right Sleeve
	drawShape(380, 140, 380, 124, 330, 124, 330, 140, sleaveColor);
	// Draw Right Arm
	drawShape(380, 124, 380, 80, 330, 30, 330, 124, shirtPrimaryColor);
	//Draw Shorts
	drawShape(170, 290, 170, 315, 140, 460, 230, 480, 250, 425, 270, 480, 360, 460, 330, 315, 330, 290, shortsColor);

	// Draw Mark
	drawShape(285, 88, 293, 88, 293, 96, 285, 96, markColor);
	drawShape(298, 88, 306, 88, 306, 96, 298, 96, markColor);
	drawShape(311, 88, 319, 88, 319, 96, 311, 96, markColor);
	drawShape(289, 106, 315, 106, 315, 122, 302, 132, 289, 122, markColor);

	// Draw holder
	drawShape(246, 314, 254, 314, 266, 332, 262, 337, 250, 322, 238, 347, 234, 342, markColor);
	// Draw Neck
	drawHalfCircle(250, 30, 35);

	// Draw Light
	drawLight(120, 30, 210);

	// Draw Shadow
	drawShape(179, 30, 188, 30, 188, 50, 179, 50, "#00000066");
	drawShape(197, 30, 206, 30, 206, 50, 197, 50, "#00000066");
	drawShape(294, 30, 303, 30, 303, 50, 294, 50, "#00000066");
	drawShape(312, 30, 321, 30, 321, 50, 312, 50, "#00000066");

	drawShape(163, 140, 163, 110, 170, 110, 170, 140, "#00000066");
	drawShape(337, 140, 337, 110, 330, 110, 330, 140, "#00000066");
}

function clearCurType() {
	const activeType = document.querySelector(".active");
	if (activeType) activeType.classList.remove("active");
}

function draw() {
	switch (curType) {
		case 0:
			drawPlain();
			break;
		case 1:
			drawStripe();
			break;
		case 2:
			drawHoops();
			break;
		case 3:
			drawSash();
			break;
		case 4:
			drawHalf();
			break;
	}
}

function render() {
	getColors();
	clearCanvas();
	draw();
}

document.querySelector("#shirtPrimaryColor").addEventListener("change", () => {
	render();
});

document.querySelector("#shirtSecondaryColor").addEventListener("change", () => {
	render();
});

document.querySelector("#shortsColor").addEventListener("change", () => {
	render();
});

document.querySelector("#sleaveColor").addEventListener("change", () => {
	render();
});

document.querySelector("#markColor").addEventListener("change", () => {
	render();
});

document.querySelector("#plain").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#plain").classList.add("active");
	curType = 0;
	render();
});

document.querySelector("#striped").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#striped").classList.add("active");
	curType = 1;
	render();
});

document.querySelector("#hoops").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#hoops").classList.add("active");
	curType = 2;
	render();
});

document.querySelector("#sash").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#sash").classList.add("active");
	curType = 3;
	render();
});

document.querySelector("#half").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#half").classList.add("active");
	curType = 4;
	render();
});

render();
