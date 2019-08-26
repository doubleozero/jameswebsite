/* $() is the JQuery wrapper and is shorthand form of jQuery() */
/* $(document).ready(function(){}) */

/* function titleClicked() {
	var clicks = 0;
	clicks++;
	document.getElementById('title').innerText = "clicks = " + clicks;
}

function changeTitle() {
	var title = document.getElementById('title');
	title.innerText = "Great, you hijacked my title text.";
}

function addToAbout {
	var p = document.createElement("p");
	var node = document.createTextNode("So you added arbitrary text here.  Look at you go.");
	p.appendChild(node);

	var text = document.getElementById("profile_text");
	element.appendChild(p);
}
*/
/*$(function changeAboutColor {
	document.getElementById("about").onclick = function() {
		document.getElementById("about").className = "text-danger";
	};
}

window.onload = function() {
	changeAboutColor();
});*/

/* Generate alert after DOM is fully loaded: */
$(document).ready(function() {
	alert("Here's an annoying alert pop-up!");
	$('#about').html("Oh look it's about YOU now");
});


