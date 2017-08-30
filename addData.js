$.ajaxSetup({
   async: false
 });


var i=0;

function adsliderInit(index) {

$("#head1, #para, #img").removeClass("animated fadeIn");
	if (index < 0){
		index = 0;
	}

	else if (index > 3){
		index = 3;
	}


    $.getJSON("data.json", function(object) {


			// Jquery animations, add classes first
			$("#head1, #para, #img").addClass("animated fadeIn");
			//Populate with data different areas
			var storeObj = object.content[index];
			document.getElementById("head1").innerHTML = storeObj.head1;
			document.getElementById("para").innerHTML = storeObj.para;
			document.getElementById("img").innerHTML = '<img class="ui big fluid bordered image" src="img/' + storeObj.img + '">';
			document.getElementById("column2").innerHTML = storeObj.body;




			//update i variable to move back and forward
			return index;
		});
		return i=index;
	};

adsliderInit(i);
