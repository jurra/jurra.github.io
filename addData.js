
var i=0;

function adsliderInit(index) {

$("#head1, #para").removeClass("animated fadeIn").removeClass(" animated shake");

	if (index < 0){
		index = 0;
	}

	else if (index > 3){
		index = 3;
	}

    $.getJSON("data.json", function(object) {

			//Populate with data different areas
			document.getElementById("head1").innerHTML = object.content[index].head1;

			$("#head1, #para").addClass("animated fadeIn").addClass(" animated shake");
			// $("#head1").fadeOut("slow");

			// $("#head1").animate({
			// 	opacity: 0,
			// 	// left: "+=50",
			// 	height: ""
			// }, 1000, function() {
			// 	// Animation complete.
			// });


			document.getElementById("para").innerHTML = object.content[index].para;
			// document.getElementById("img").innerHTML = '<img class="ui fluid image" src="img/' + object.content[index].img + '">';
			document.getElementById("column2").innerHTML = object.content[index].body;
			// Jquery animations


			//update i variable to move back and forward
			return index;
		});
		return i=index;
	};

adsliderInit(i);
