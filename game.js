var pjs = new PointJS('2D', 1280 / 2, 720 / 2, { // 16:9
	backgroundColor : '#53769A' // if need
});
// pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Object's manager
var math   = pjs.math;           // More Math-methods
var levels = pjs.levels;         // Levels manager

// var key   = pjs.keyControl.initKeyControl();
// var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window

// Game Loop
game.newLoopFromConstructor('myGame', function () {
	// Constructor Game Loop

	var myText = game.newTextObject({
		positionC : point(game.getWH2().w, game.getWH2().h), // central position of text
		size : 50, // size text
		color : '#EAEAEA', // color text
		text : 'Hello, World!', // label
		alpha : 0, // alpha channel
		font : 'Arial' // font family
	});

	this.update = function () {
		// Update function

		game.clear(); // clear screen

		myText.draw(); // drawing text
		myText.transparent(0.005); // change alpha [0..>..1]

	};

	// this.entry = function () { // [optional]
	// 	// Entry Function
	// 	log('myGame is started');
	// };

	// this.exit = function () { // [optional]
	// 	// Exit function
	// 	log('myGame is stopped');
	// };

});

// // Advanced Game Loop
// var MyGame = function () {
// 	// Constructor Game Loop

// 	this.update = function () {
// 		// Update function
// 	};

// 	this.entry = function () {
// 		// Entry Function
// 	};

// 	this.exit = function () {
// 		// Exit function
// 	};

// };
// game.newLoopFromClassObject('myGame', new MyGame());


// Simple Game Loop
// game.newLoop('myGame', function () {
// 	// Update function
// });

game.startLoop('myGame');