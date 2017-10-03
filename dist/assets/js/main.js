/**
 * miProyecto
 */

var msg = 'miProyecto';

function printLog(log){
    'use strict';
  return console && console.log(log);
}

printLog(msg);

$(function() {
	/*Header menu*/

	$("#main-logo").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#start").offset().top
	   	}, 600);
	});

    $("#features-button-container").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#capabilities-section").offset().top - 150
	   	}, 600);
	   	$(".nav-menu").fadeToggle('fast');
	});

	$("#pricing-button-container").click(function() {
		$('html, body').animate({
			scrollTop: $("#pricing-section").offset().top
		}, 600);
		$(".nav-menu").fadeToggle('fast');
	});

	$("#more-button-container").click(function() {
		$('html, body').animate({
			scrollTop: $("#more-section").offset().top
		}, 600);
		$(".nav-menu").fadeToggle('fast');
	});

	$("#contact-button-container").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact-section").offset().top
		}, 600);
		$(".nav-menu").fadeToggle('fast');
	});

	/*Mobile*/
	$(".toggle-button").click(function() { 
		$(".nav-menu").fadeToggle('fast');
	});
	
});

//# sourceMappingURL=main.js.map
