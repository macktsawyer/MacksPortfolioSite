'use strict';

// Pop up cards

let cardButtonOne = document.getElementById('cardButtonOne');
let cardButtonTwo = document.getElementById('cardButtonTwo');
let cardButtonThree = document.getElementById('cardButtonThree');
let canvas = document.getElementById('canvas');
let window_height = window.innerHeight;
let window_width = window.innerWidth;
let context = canvas.getContext('2d');

canvas.width = .5 * window_width;
canvas.height = .5 * window_height;

canvas.style.background = 'black';

class Circle {
    constructor(xpos, ypos, radius, color){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.fill();
        context.fillStyle = this.color;
        context.closePath();
    }
}

let user_circles = [];

let createCircle = function(circle) {
    circle.draw(context);               // Create New Dot
}

// Event Listener
document.getElementById('canvas').addEventListener('click', function onClick(event) {
        let canvasX = event.pageX - 472;      // Grab X, Y from Event Listener
        let canvasY = event.pageY;
        let my_circle = new Circle(canvasX, canvasY, 2, 'white');
        user_circles.push(my_circle); // Store Circle
        createCircle(my_circle); // Create dot
        console.log(canvasX, canvasY);
});

function redrawCircle() {

}

function moveRandom() {

}