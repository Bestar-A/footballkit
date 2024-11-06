// Get the canvas element and its drawing context (2D)
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Initialize variables for shirt and shorts color, and current type of design
var curType = 0; // Current design type (plain, striped, etc.)
var shirtPrimaryColor; // Primary color for the shirt
var shirtSecondaryColor; // Secondary color for the shirt
var shortsColor; // Color for the shorts
var sleaveColor; // Color for the sleeves
var markColor; // Color for markings
var showLine; // Boolean to show lines or not

// Function to get color values from input fields
function getColors() {
	shirtPrimaryColor = document.querySelector("#shirtPrimaryColor").value;
	shirtSecondaryColor = document.querySelector("#shirtSecondaryColor").value;
	shortsColor = document.querySelector("#shortsColor").value;
	markColor = document.querySelector("#markColor").value;
	showLine = document.querySelector("#controlShow").checked; // Check if lines should be shown
	sleaveColor = shirtPrimaryColor; // Set sleeve color as the primary shirt color
}

// Function to compute the contrasting color (black or white) based on brightness
function getContrastColor(hex) {
	// Remove the "#" if it is included
	hex = hex.replace(/^#/, "");

	// Handle 3-digit hex conversion to 6-digit hex
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map(function (hex) {
				return hex + hex; // Duplicate each digit
			})
			.join("");
	}

	// Convert hex to RGB
	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	// Calculate perceived brightness using a specific formula
	const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

	// Return black or white based on brightness threshold
	return brightness > 186 ? "#000000" : "#FFFFFF"; // Return black if bright, else white
}

// Function to clear the canvas
function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to draw a shape using provided coordinates and color
function drawShape() {
	ctx.beginPath();
	const x1 = arguments[0];
	const y1 = arguments[1];
	ctx.moveTo(x1, y1);
	for (let i = 2; i < arguments.length; i += 2) {
		const x2 = arguments[i];
		const y2 = arguments[i + 1];
		ctx.lineTo(x2, y2);
	}
	ctx.closePath();
	ctx.fillStyle = arguments[arguments.length - 1]; // Set fill color
	ctx.fill();
}

// Function to draw a half circle at given position and radius
function drawHalfCircle(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI, false); // Half circle
	ctx.lineTo(x - radius, y); // Draw line to left
	ctx.closePath();
	ctx.fillStyle = "#58595b"; // Fill with a gray color
	ctx.fill();
}

// Function to draw a light effect (circle with transparency)
function drawLight(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.fillStyle = "#ffffff44"; // White with transparency
	ctx.fill();
	ctx.closePath();
}

// Function to draw the background shape of the canvas
function drawBackground() {
	drawShape(0, 0, 0, 335, 220, 335, 220, 190, 170, 190, 170, 130, 220, 80, 380, 80, 430, 130, 430, 0, "#244853");
}

// Function to draw a plain shirt
function drawPlain() {
	// Draw sleeves, arms, body, and other components with the respective colors
	drawShape(170, 190, 170, 174, 220, 174, 220, 190, sleaveColor); // Left Sleeve
	drawShape(170, 174, 170, 130, 220, 80, 220, 174, shirtPrimaryColor); // Left Arm
	drawShape(220, 80, 380, 80, 380, 335, 220, 335, shirtPrimaryColor); // Body

	// Draw Right Sleeve, Arm, Shorts, Mark, Neck, Light, and Shadows
	drawShape(430, 190, 430, 174, 380, 174, 380, 190, sleaveColor); // Right Sleeve
	drawShape(430, 174, 430, 130, 380, 80, 380, 174, shirtPrimaryColor); // Right Arm
	drawShape(220, 340, 220, 365, 190, 510, 280, 530, 300, 475, 320, 530, 410, 510, 380, 365, 380, 340, shortsColor); // Shorts

	// Draw Markings
	drawShape(335, 138, 343, 138, 343, 146, 335, 146, markColor);
	drawShape(348, 138, 356, 138, 356, 146, 348, 146, markColor);
	drawShape(361, 138, 369, 138, 369, 146, 361, 146, markColor);
	drawShape(339, 156, 365, 156, 365, 172, 352, 182, 339, 172, markColor);

	drawShape(296, 364, 304, 364, 316, 382, 312, 387, 300, 372, 288, 397, 284, 392, getContrastColor(shortsColor)); // Holder
	drawHalfCircle(300, 80, 35); // Neck
	drawLight(170, 80, 210); // Light

	// Draw Shadows
	drawShape(229, 80, 238, 80, 238, 100, 229, 100, "#00000066");
	drawShape(247, 80, 256, 80, 256, 100, 247, 100, "#00000066");
	drawShape(344, 80, 353, 80, 353, 100, 344, 100, "#00000066");
	drawShape(362, 80, 371, 80, 371, 100, 362, 100, "#00000066");

	drawShape(213, 190, 213, 160, 220, 160, 220, 190, "#00000066");
	drawShape(387, 190, 387, 160, 380, 160, 380, 190, "#00000066");
}

// Function to draw a striped shirt
function drawStripe() {
	// Similar logic as drawPlain, but with stripes included
	drawShape(170, 190, 170, 174, 220, 174, 220, 190, sleaveColor); // Left Sleeve
	drawShape(170, 174, 170, 130, 220, 80, 220, 174, shirtPrimaryColor); // Left Arm
	drawShape(220, 80, 380, 80, 380, 335, 220, 335, shirtPrimaryColor); // Body

	// Stripes
	drawShape(225, 80, 255, 80, 255, 335, 225, 335, shirtSecondaryColor);
	drawShape(285, 80, 315, 80, 315, 335, 285, 335, shirtSecondaryColor);
	drawShape(345, 80, 375, 80, 375, 335, 345, 335, shirtSecondaryColor);

	// Draw Right Sleeve, Arm, Shorts, Mark, Neck, Light, and Shadows
	drawShape(430, 190, 430, 174, 380, 174, 380, 190, sleaveColor); // Right Sleeve
	drawShape(430, 174, 430, 130, 380, 80, 380, 174, shirtPrimaryColor); // Right Arm
	drawShape(220, 340, 220, 365, 190, 510, 280, 530, 300, 475, 320, 530, 410, 510, 380, 365, 380, 340, shortsColor); // Shorts

	// Draw Markings
	drawShape(335, 138, 343, 138, 343, 146, 335, 146, markColor);
	drawShape(348, 138, 356, 138, 356, 146, 348, 146, markColor);
	drawShape(361, 138, 369, 138, 369, 146, 361, 146, markColor);
	drawShape(339, 156, 365, 156, 365, 172, 352, 182, 339, 172, markColor);

	drawShape(296, 364, 304, 364, 316, 382, 312, 387, 300, 372, 288, 397, 284, 392, getContrastColor(shortsColor)); // Holder
	drawHalfCircle(300, 80, 35); // Neck
	drawLight(170, 80, 210); // Light

	// Draw Shadows
	drawShape(213, 190, 213, 160, 220, 160, 220, 190, "#00000066");
	drawShape(387, 190, 387, 160, 380, 160, 380, 190, "#00000066");
}

// Function to draw a shirt with hoops
function drawHoops() {
	// Similar logic as drawPlain and drawStripe, but with hoops included

	drawShape(170, 190, 170, 174, 220, 174, 220, 190, sleaveColor); // Left Sleeve
	drawShape(170, 174, 170, 130, 220, 80, 220, 174, shirtPrimaryColor); // Left Arm
	drawShape(220, 80, 380, 80, 380, 335, 220, 335, shirtPrimaryColor); // Body

	// Hoops
	drawShape(225, 135, 380, 135, 380, 160, 225, 160, shirtSecondaryColor);
	drawShape(225, 185, 380, 185, 380, 210, 225, 210, shirtSecondaryColor);
	drawShape(225, 235, 380, 235, 380, 260, 225, 260, shirtSecondaryColor);
	drawShape(225, 285, 380, 285, 380, 310, 225, 310, shirtSecondaryColor);

	// Draw Right Sleeve, Arm, Shorts, Mark, Neck, Light, and Shadows
	drawShape(430, 190, 430, 174, 380, 174, 380, 190, sleaveColor); // Right Sleeve
	drawShape(430, 174, 430, 130, 380, 80, 380, 174, shirtPrimaryColor); // Right Arm
	drawShape(220, 340, 220, 365, 190, 510, 280, 530, 300, 475, 320, 530, 410, 510, 380, 365, 380, 340, shortsColor); // Shorts

	// Draw Markings
	drawShape(335, 138, 343, 138, 343, 146, 335, 146, markColor);
	drawShape(348, 138, 356, 138, 356, 146, 348, 146, markColor);
	drawShape(361, 138, 369, 138, 369, 146, 361, 146, markColor);
	drawShape(339, 156, 365, 156, 365, 172, 352, 182, 339, 172, markColor);

	drawShape(296, 364, 304, 364, 316, 382, 312, 387, 300, 372, 288, 397, 284, 392, getContrastColor(shortsColor)); // Holder
	drawHalfCircle(300, 80, 35); // Neck
	drawLight(170, 80, 210); // Light

	// Draw Shadows
	drawShape(229, 80, 238, 80, 238, 100, 229, 100, "#00000066");
	drawShape(247, 80, 256, 80, 256, 100, 247, 100, "#00000066");
	drawShape(344, 80, 353, 80, 353, 100, 344, 100, "#00000066");
	drawShape(362, 80, 371, 80, 371, 100, 362, 100, "#00000066");

	drawShape(213, 190, 213, 160, 220, 160, 220, 190, "#00000066");
	drawShape(387, 190, 387, 160, 380, 160, 380, 190, "#00000066");
}

// Function to draw a sash on the shirt
function drawSash() {
	// Logic similar to other draw functions, but includes a sash item.
	drawShape(170, 190, 170, 174, 220, 174, 220, 190, sleaveColor); // Left Sleeve
	drawShape(170, 174, 170, 130, 220, 80, 220, 174, shirtPrimaryColor); // Left Arm
	drawShape(220, 80, 380, 80, 380, 335, 220, 335, shirtPrimaryColor); // Body

	// Sash
	drawShape(350, 80, 380, 80, 230, 335, 220, 335, 220, 295, shirtSecondaryColor);

	// Draw Right Sleeve, Arm, Shorts, Mark, Neck, Light, and Shadows
	drawShape(430, 190, 430, 174, 380, 174, 380, 190, sleaveColor); // Right Sleeve
	drawShape(430, 174, 430, 130, 380, 80, 380, 174, shirtPrimaryColor); // Right Arm
	drawShape(220, 340, 220, 365, 190, 510, 280, 530, 300, 475, 320, 530, 410, 510, 380, 365, 380, 340, shortsColor); // Shorts

	// Draw Markings
	drawShape(335, 138, 343, 138, 343, 146, 335, 146, markColor);
	drawShape(348, 138, 356, 138, 356, 146, 348, 146, markColor);
	drawShape(361, 138, 369, 138, 369, 146, 361, 146, markColor);
	drawShape(339, 156, 365, 156, 365, 172, 352, 182, 339, 172, markColor);

	drawShape(296, 364, 304, 364, 316, 382, 312, 387, 300, 372, 288, 397, 284, 392, getContrastColor(shortsColor)); // Holder
	drawHalfCircle(300, 80, 35); // Neck
	drawLight(170, 80, 210); // Light

	// Draw Shadows
	drawShape(213, 190, 213, 160, 220, 160, 220, 190, "#00000066");
	drawShape(387, 190, 387, 160, 380, 160, 380, 190, "#00000066");
}

// Function to draw the left and right halves of the shirt
function drawHalf() {
	drawShape(170, 190, 170, 174, 220, 174, 220, 190, sleaveColor); // Left Sleeve
	drawShape(170, 174, 170, 130, 220, 80, 220, 174, shirtPrimaryColor); // Left Arm
	drawShape(220, 80, 300, 80, 300, 335, 220, 335, shirtPrimaryColor); // Left Half
	drawShape(300, 80, 380, 80, 380, 335, 300, 335, shirtSecondaryColor); // Right Half

	// Draw Right Sleeve, Arm, Shorts, Mark, Neck, Light, and Shadows
	drawShape(430, 190, 430, 174, 380, 174, 380, 190, sleaveColor); // Right Sleeve
	drawShape(430, 174, 430, 130, 380, 80, 380, 174, shirtSecondaryColor); // Right Arm
	drawShape(220, 340, 220, 365, 190, 510, 280, 530, 300, 475, 320, 530, 410, 510, 380, 365, 380, 340, shortsColor); // Shorts

	// Draw Markings
	drawShape(335, 138, 343, 138, 343, 146, 335, 146, markColor);
	drawShape(348, 138, 356, 138, 356, 146, 348, 146, markColor);
	drawShape(361, 138, 369, 138, 369, 146, 361, 146, markColor);
	drawShape(339, 156, 365, 156, 365, 172, 352, 182, 339, 172, markColor);

	drawShape(296, 364, 304, 364, 316, 382, 312, 387, 300, 372, 288, 397, 284, 392, getContrastColor(shortsColor)); // Holder
	drawHalfCircle(300, 80, 35); // Neck
	drawLight(170, 80, 210); // Light

	// Draw Shadows
	drawShape(229, 80, 238, 80, 238, 100, 229, 100, "#00000066");
	drawShape(247, 80, 256, 80, 256, 100, 247, 100, "#00000066");
	drawShape(344, 80, 353, 80, 353, 100, 344, 100, "#00000066");
	drawShape(362, 80, 371, 80, 371, 100, 362, 100, "#00000066");

	drawShape(213, 190, 213, 160, 220, 160, 220, 190, "#00000066");
	drawShape(387, 190, 387, 160, 380, 160, 380, 190, "#00000066");
}

// Function to clear the current type selection
function clearCurType() {
	const activeType = document.querySelector(".active");
	if (activeType) activeType.classList.remove("active");
}

// Function to draw lines and links for primary and secondary colors, and trousers color
function drawButtonLines() {
	// Draw Primary Color Line
	ctx.beginPath();
	ctx.moveTo(195, 105);
	ctx.quadraticCurveTo(160, 60, 90, 60);
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#ffffff"; // Line color
	ctx.stroke();
	drawShape(195, 105, 195, 95, 185, 105, "#ffffff"); // Secondary shape
	ctx.closePath();

	// Draw Secondary Color Line for specific types
	if (curType == 1 || curType == 2 || curType == 4) {
		ctx.beginPath();
		ctx.moveTo(380, 300);
		ctx.quadraticCurveTo(420, 320, 500, 250);
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#ffffff";
		ctx.stroke();
		drawShape(380, 300, 382, 307, 387, 298, "#ffffff");
		ctx.closePath();
		// Set position for the secondary color input
		document.querySelector("#shirtSecondaryColor").style.display = "block";
		document.querySelector("#shirtSecondaryColor").style.top = "235px";
		document.querySelector("#shirtSecondaryColor").style.left = "505px";
	} else if (curType == 3) {
		ctx.beginPath();
		ctx.moveTo(365, 80);
		ctx.quadraticCurveTo(390, 30, 500, 50);
		ctx.lineWidth = 2;
		ctx.strokeStyle = "#ffffff";
		ctx.stroke();
		drawShape(365, 80, 374, 76, 364, 70, "#ffffff");
		ctx.closePath();
		// Set position for the secondary color input
		document.querySelector("#shirtSecondaryColor").style.display = "block";
		document.querySelector("#shirtSecondaryColor").style.top = "35px";
		document.querySelector("#shirtSecondaryColor").style.left = "505px";
	} else {
		document.querySelector("#shirtSecondaryColor").style.display = "none"; // Hide if not applicable
	}

	// Draw Trousers Color Line
	ctx.beginPath();
	ctx.moveTo(205, 425);
	ctx.quadraticCurveTo(120, 430, 80, 500);
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#ffffff";
	ctx.stroke();
	drawShape(205, 425, 199, 419, 199, 431, "#ffffff"); // Additional shape
	ctx.closePath();
}

// The main draw function to handle different shirt types
function draw() {
	switch (curType) {
		case 0:
			drawPlain();
			break; // Plain
		case 1:
			drawStripe();
			break; // Stripe
		case 2:
			drawHoops();
			break; // Hoops
		case 3:
			drawSash();
			break; // Sash
		case 4:
			drawHalf();
			break; // Half
	}
	drawBackground(); // Always draw the background first
	if (showLine) drawButtonLines(); // Conditionally draw button lines
}

// Function to render the drawing based on the color selections
function render() {
	getColors(); // Get the selected colors
	clearCanvas(); // Clear the previous drawings
	draw(); // Draw the current design
}

// Event listeners for design type button clicks
document.querySelector("#plain").addEventListener("click", () => {
	clearCurType(); // Clear any previous active type
	document.querySelector("#plain").classList.add("active"); // Set active class
	curType = 0; // Set current type to plain
	render(); // Re-render
});

document.querySelector("#striped").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#striped").classList.add("active");
	curType = 1; // Set current type to striped
	render();
});

document.querySelector("#hoops").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#hoops").classList.add("active");
	curType = 2; // Set current type to hoops
	render();
});

document.querySelector("#sash").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#sash").classList.add("active");
	curType = 3; // Set current type to sash
	render();
});

document.querySelector("#half").addEventListener("click", () => {
	clearCurType();
	document.querySelector("#half").classList.add("active");
	curType = 4; // Set current type to half
	render();
});

// Event listener for checkbox to show/hide control lines
document.querySelector("#controlShow").addEventListener("change", () => {
	showLine = document.querySelector("#controlShow").checked; // Update showLine variable
	// Show or hide the color control inputs based on showLine
	if (showLine) {
		document.querySelector("#shirtPrimaryColor").style.display = "block";
		document.querySelector("#shirtSecondaryColor").style.display = "block";
		document.querySelector("#shortsColor").style.display = "block";
		// document.querySelector("#sleaveColor").style.display = "block"; // Uncomment for sleeves
	} else {
		document.querySelector("#shirtPrimaryColor").style.display = "none";
		document.querySelector("#shirtSecondaryColor").style.display = "none";
		document.querySelector("#shortsColor").style.display = "none";
		// document.querySelector("#sleaveColor").style.display = "none"; // Uncomment for sleeves
	}
	render(); // Re-render on change
});

// Initial render to display the default state
render();
