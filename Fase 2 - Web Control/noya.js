var slider1 = document.getElementById('servo1');
var slider3 = document.getElementById('servo3');
var slider4 = document.getElementById('servo4');
var slider5 = document.getElementById('servo5');
var button6 = document.getElementById('servo6');

button6.addEventListener('click', button66);
var socket = io.connect('http://192.168.1.108:3000');

function slider11(){
	socket.emit('move', 0, slider1.value);
}

function slider33(){
	socket.emit('move', 2, slider3.value);
}

function slider44(){
	socket.emit('move', 3, slider4.value);
}

function slider55(){
	socket.emit('move', 4, slider5.value);
}

function button66(){
	socket.emit('move', 5);
	console.log("hola");
}

function heartbeat(){
	slider11();
	slider33();
	slider44();
	slider55();
}

setInterval(heartbeat, 33);

//console.log(slider1.value);
(function($){
  $(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel();
    $('.slider').slider();
    $('.button-collapse').sideNav();
	// Next slide
	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.
	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.
	// Set to nth slide
	$('.carousel').carousel('set', 4);
    $('.carousel.carousel-slider').carousel({fullWidth: true});  
  }); // end of document ready
})(jQuery); // end of jQuery name space
