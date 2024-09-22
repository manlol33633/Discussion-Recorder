document.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    var person = document.getElementById('person');
    if (x > 100 && x < 200 && y > 75 && y < 400) {
        person.setAttribute('transform', 'translate(5, 0) scale(1.1)');
    } else {
        person.setAttribute('transform', 'translate(0, 0) scale(1)');
    }
});

