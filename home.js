
var song = new Audio('Time.mp3');

var container;

var windowWidth, windowHeight;

$(document).ready(function() {
	container = $('body');
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	happy();
	container.css('background-color', 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')');
	setInterval(function() {
		container.css('background-color', 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')');
	}, 5000);
	song.play();
});

function happy() {
	var span = $('<span>' + (Math.random() > 0.5 ? 'happy' : 'birthday') + '</span>');
	container.append(span);
	span.animate({
		'opacity': 0,
		'font-size': (Math.random() * 10 + 0.5) + 'em',
		'top': Math.floor(Math.random() * windowHeight) + 'px',
		'left': Math.floor(Math.random() * windowWidth) + 'px'
	}, Math.floor(Math.random() * 5000) + 7500, function() {
		$(this).remove();
	});
	setTimeout(happy, 125);
}
