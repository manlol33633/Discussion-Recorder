var setupInfo = localStorage.getItem('setupInfo');

// print(setupInfo['x']);
// print(setupInfo['y']);

var symmetrical = true; // If the number of seats on each opposite side are symmetrical
var x = 10; // Placeholder for horizontal seats
var y = 5; // Placeholder for vertical seats
var table = document.getElementById("table");

var table_top = 5; // Placeholder for horizontal seats on the top
var table_bottom = 6; // Placeholder for horizontal seats on the bottom
var table_left = 4; // Placeholder for vertical seats on the left
var table_right = 5; // Placeholder for vertical seats on the right

var baseSize = 50;

console.log(window.innerWidth + " " + window.innerHeight);

// window.addEventListener("resize", )

document.addEventListener("DOMContentLoaded", function() {
    var top = document.getElementById('top');
    var right = document.getElementById('right');
    var bottom = document.getElementById('bottom');
    var left = document.getElementById('left');

    for (let i = 0; i < x; i++) {
        var seat = document.createElement('div');
        seat.id = "top" + (i + 1);
        seat.style.width = 100 / x + "%";
        seat.style.height = "100%";
        seat.style.marginLeft = 100 / x * i + "%"
        seat.style.backgroundColor = "#" + i % 2 * 9 + "f1f1f";
        seat.style.position = "absolute";
        seat.style.top = "0";
        top.appendChild(seat);
    }

    for (let i = 0; i < y; i++) {
        var seat = document.createElement('div');
        seat.id = "right" + (i + 1);
        seat.style.width = "100%";
        seat.style.height = 100 / y + "%";
        seat.style.top = 100 / y * i + "%"
        seat.style.backgroundColor = "#" + i % 2 * 9 + "f1f1f";
        seat.style.position = "absolute";
        seat.style.left = "0";
        right.appendChild(seat);
    }

    for (let i = 0; i < x; i++) {
        var seat = document.createElement('div');
        seat.id = "bottom" + (i + 1);
        seat.style.width = 100 / x + "%";
        seat.style.height = "100%";
        seat.style.marginLeft = 100 / x * i + "%"
        seat.style.backgroundColor = "#" + i % 2 * 9 + "f1f1f";
        seat.style.position = "absolute";
        seat.style.top = "0";
        bottom.appendChild(seat);
    }

    for (let i = 0; i < y; i++) {
        var seat = document.createElement('div');
        seat.id = "left" + (i + 1);
        seat.style.width = "100%";
        seat.style.height = 100 / y + "%";
        seat.style.top = 100 / y * i + "%"
        seat.style.backgroundColor = "#" + i % 2 * 9 + "f1f1f";
        seat.style.position = "absolute";
        seat.style.left = "0";
        left.appendChild(seat);
    }
});