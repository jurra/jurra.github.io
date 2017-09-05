// $.ajaxSetup({
// 	async: true
// });

var i=0;

function adsliderInit(index) {

$("#head1, #para, #img").removeClass("animated fadeIn");
	if (index < 0){

		history.go(0);

	}

	else if (index > 5){
		index = 5;
	}

    $.getJSON("data.json", function(object) {
			// Jquery animations, add classes first
			$("#head1, #para, #img").addClass("animated fadeIn");

			//Populate with data different areas
			var storeObj = object.content[index];

			document.getElementById("head1").innerHTML = storeObj.head1;
			document.getElementById("para").innerHTML = storeObj.para;
			$("#img").load(storeObj.html);

			// document.getElementById("column2").innerHTML = storeObj.body;


			//update i variable to move back and forward
			// return index;
		});
		return i=index;
	};

adsliderInit(i); //Run from the start (Init)


// Sticky for buttons
$('.ui.sticky')
  .sticky({
    context: '#column2'
  })
;
