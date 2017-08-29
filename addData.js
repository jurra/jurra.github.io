var i=0;

function adsliderInit(index) {

	if (index < 0){
		index = 0;
	}

	else if (index > 3){
		index = 3;
	}

    $.getJSON("data.json", function(object) {

			//Populate with data different areas

			document.getElementById("head1").innerHTML = object.content[index].head1;

			document.getElementById("para").innerHTML = object.content[index].para;

			document.getElementById("img").innerHTML =
			'<img src="img/' + object.content[index].img + '">';



			document.getElementById("column2").innerHTML = object.content[index].body;
			return index;
		});
		return i=index;
	};

adsliderInit(i);
