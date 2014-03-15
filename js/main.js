
var output;

function init() {
    output = $("#color");

    requestInterval(function() { 
        blink("#FF0000", 300); 
    }, 1000);
}

function blink(color, duration) {
    console.log("blink", color, duration);
    setColor(color);
    requestTimeout(function() {
        setColor("black");
    }, duration);
}

function setColor(color) {
    console.log("color", color);
    if (typeof color === "undefined") {
        color = "black";
    }
    output.css('background-color', color);
};

$(function() {
    init();
});
