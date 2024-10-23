var setupInfo = localStorage.getItem('setupInfo');

// print(setupInfo['x']);
// print(setupInfo['y']);

var symmetrical = true; // If the number of seats on each opposite side are symmetrical
var x = 30; // Placeholder for horizontal seats
var y = 20; // Placeholder for vertical seats
var table = document.getElementById("table");

var table_top = 5; // Placeholder for horizontal seats on the top
var table_bottom = 6; // Placeholder for horizontal seats on the bottom
var table_left = 4; // Placeholder for vertical seats on the left
var table_right = 5; // Placeholder for vertical seats on the right

var seats = [[Array(x).fill(false), Array(x).fill(false)], [Array(y).fill(false), Array(y).fill(false)]]

// var

var baseSize = 50;

console.log(window.innerWidth + " " + window.innerHeight);

// window.addEventListener("resize", )

function seat_setup(side, isVertical) {
    // var top = document.getElementById('top');
    // var right = document.getElementById('right');
    // var bottom = document.getElementById('bottom');
    // var left = document.getElementById('left');
    var _side = document.getElementById(side)

    var presence = true;
    var icon = "Empty Seat Color";
    var scale = "50%";
    var row_height;
    var row_width;
    var margin_top;
    var margin_left;
    var num;

    if (isVertical) {
        numSeats = y;
        row_height = 100 / y;
        row_width = "100";
        
    } else {
        numSeats = x;
        row_height = "100";
        row_width = 100 / x;
    }

    if (side == "top" || side == "right") {
        num = 1;
    } else {
        num = -numSeats;
    }

    for (let i = 0; i < numSeats; i++) {
        if (isVertical) {
            margin_top = row_height * i;
            margin_left = "0";
        } else {
            margin_top = "0";
            margin_left = row_height * i;
        }
        var seat = document.createElement('div');
        var svg_seat = document.createElement('SVG');
        var person = document.createElement('img');
        seat.id = side + Math.abs(i + num);
        person.src = "Media/" + icon + ".png";
        person.style.maxWidth = scale;
        person.style.maxHeight = scale;
        person.style.margin = "auto";
        person.style.position = "absolute";
        person.style.top = "0";
        person.style.left = "0";
        person.style.bottom = "0";
        person.style.right = "0";
        seat.style.height = row_height + "%";
        seat.style.width = row_width + "%";
        svg_seat.style.width = "100%";
        svg_seat.style.height = "100%";
        seat.style.top = margin_top + "%"
        seat.style.marginLeft = margin_left + "%"
        seat.style.position = "absolute";
        _side.appendChild(seat);
        seat.appendChild(svg_seat);
        svg_seat.appendChild(person);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var top = document.getElementById('top');
    var right = document.getElementById('right');
    var bottom = document.getElementById('bottom');
    var left = document.getElementById('left');

    var presence = true;
    var icon;
    var scale;

    if (presence) {
        scale = "80%";
        icon = "Person Color";
    } else {
        scale = "50%";
        icon = "Empty Seat Color";
    }

    seat_setup("top", false);
    seat_setup("right", true);
    seat_setup("bottom", false);
    seat_setup("left", true);

    // for (let i = 0; i < x; i++) {
    //     var seat = document.createElement('div');
    //     var svg_seat = document.createElement('SVG');
    //     var person = document.createElement('img');
    //     seat.id = "top" + (i + 1);
    //     person.src = "Media/" + icon + ".png";
    //     person.style.maxWidth = scale;
    //     person.style.maxHeight = scale;
    //     person.style.margin = "auto";
    //     person.style.position = "absolute";
    //     person.style.top = "0";
    //     person.style.left = "0";
    //     person.style.bottom = "0";
    //     person.style.right = "0";
    //     seat.style.width = 100 / x + "%";
    //     svg_seat.style.width = "100%";
    //     seat.style.height = "100%";
    //     svg_seat.style.height = "100%";
    //     seat.style.marginLeft = 100 / x * i + "%";
    //     seat.style.position = "absolute";
    //     seat.style.top = "0";
    //     top.appendChild(seat);
    //     seat.appendChild(svg_seat);
    //     svg_seat.appendChild(person);
    // }

    // for (let i = 0; i < y; i++) {
    //     var seat = document.createElement('div');
    //     var svg_seat = document.createElement('SVG');
    //     var person = document.createElement('img');
    //     seat.id = "right" + (i + 1);
    //     person.src = "Media/" + icon + ".png";
    //     person.style.maxWidth = scale;
    //     person.style.maxHeight = scale;
    //     person.style.margin = "auto";
    //     person.style.position = "absolute";
    //     person.style.top = "0";
    //     person.style.left = "0";
    //     person.style.bottom = "0";
    //     person.style.right = "0";
    //     seat.style.width = "100%";
    //     svg_seat.style.width = "100%";
    //     seat.style.height = 100 / y + "%";
    //     svg_seat.style.height = "100%";
    //     seat.style.top = 100 / y * i + "%"
    //     seat.style.position = "absolute";
    //     seat.style.left = "0";
    //     right.appendChild(seat);
    //     seat.appendChild(svg_seat);
    //     svg_seat.appendChild(person);
    // }

    // for (let i = 0; i < x; i++) {
    //     var seat = document.createElement('div');
    //     var svg_seat = document.createElement('SVG');
    //     var person = document.createElement('img');
    //     seat.id = "bottom" + (i + 1);
    //     person.src = "Media/" + icon + ".png";
    //     person.style.maxWidth = scale;
    //     person.style.maxHeight = scale;
    //     person.style.margin = "auto";
    //     person.style.position = "absolute";
    //     person.style.top = "0";
    //     person.style.left = "0";
    //     person.style.bottom = "0";
    //     person.style.right = "0";
    //     seat.style.width = 100 / x + "%";
    //     svg_seat.style.width = "100%";
    //     seat.style.height = "100%";
    //     svg_seat.style.height = "100%";
    //     seat.style.marginLeft = 100 / x * i + "%"
    //     seat.style.position = "absolute";
    //     seat.style.top = "0";
    //     bottom.appendChild(seat);
    //     seat.appendChild(svg_seat);
    //     svg_seat.appendChild(person);
    // }

    // for (let i = 0; i < y; i++) {
    //     var seat = document.createElement('div');
    //     var svg_seat = document.createElement('SVG');
    //     var person = document.createElement('img');
    //     seat.id = "left" + (i + 1);
    //     person.src = "Media/" + icon + ".png";
    //     person.style.maxWidth = scale;
    //     person.style.maxHeight = scale;
    //     person.style.margin = "auto";
    //     person.style.position = "absolute";
    //     person.style.top = "0";
    //     person.style.left = "0";
    //     person.style.bottom = "0";
    //     person.style.right = "0";
    //     seat.style.width = "100%";
    //     svg_seat.style.width = "100%";
    //     seat.style.height = 100 / y + "%";
    //     svg_seat.style.height = "100%";
    //     seat.style.top = 100 / y * i + "%"
    //     seat.style.position = "absolute";
    //     seat.style.left = "0";
    //     left.appendChild(seat);
    //     seat.appendChild(svg_seat);
    //     svg_seat.appendChild(person);
    // }
});

window.addEventListener('resize', function() {
    var first_top = document.getElementById("top1");
    var first_left = document.getElementById("left1");
    var big_width_scale, big_height_scale;



    if (first_top.innerWidth > first_left.innerWidth) {
        big_width_scale = first_left.innerWidth / first_top.innerWidth;
    } else {
        big_width_scale = first_top.innerWidth / first_left.innerWidth;
    }

    if (first_top.innerHeight > first_left.innerHeight) {
        big_height_scale = first_left.innerHeight / first_top.innerHeight;
    } else {
        big_height_scale = first_top.innerHeight / first_left.innerHeight;
    }
});