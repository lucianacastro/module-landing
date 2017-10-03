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

    $("#features-button").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#capabilities-section").offset().top - 150
	   	}, 600);
	});

	$("#pricing-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#pricing-section").offset().top
		}, 600);
	});

	$("#more-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#more-section").offset().top
		}, 600);
	});

	$("#contact-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact-section").offset().top
		}, 600);
	});

	/*Mobile*/
	$(".toggle-button").click(function() { 
		$(".nav-menu").fadeToggle('fast', function(){

		});
	});
	
});
