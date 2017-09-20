// $.ajaxSetup({
// 	async: true
// });

var i=0;

function initHome(){
	$("#codeWrapper").load("pages/home.html");
}

function initPortfolio(){
	$("#codeWrapper").load("pages/portfolio.html");
}

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
		var storeObj = object.content[index];
		//Populate with data different areas
		//Load html
		$("#img").load(storeObj.html);

		document.getElementById("head1").innerHTML = storeObj.head1;
		document.getElementById("para").innerHTML = storeObj.para;
		// document.getElementById("date1").innerHTML = storeObj.date;
		// document.getElementById("meta").innerHTML = '<img class="ui tiny image" src="logos/' + storeObj.logo + '">';
		document.getElementById("metaD").innerHTML= storeObj.logo;
		// document.getElementById("column2").innerHTML = storeObj.body;
		//update i variable to move back and forward
		// return index;
	});
	return i=index;
};



initHome();
// adsliderInit(i); //Run from the start (Init)



// Sticky for buttons
$('.ui.sticky')
.sticky({
	context: '#column2'
})
;


// Scroll function
function scrollDown(target){
		$('html,body').animate({
			scrollTop: $(target).offset().top},
			'slow');
	}

	function carr(dataPath, imgPath){

	var html = '';

	$(document).ready(function(){
		// html += '<div class="ui divider"></div>';
		$.getJSON(dataPath, function(data){

			$.each(data, function(key, value){

				$.each(value, function(index,item){

					html += '<div class="row student">';
					html += '<img class ="ui fluid image" src="'+ imgPath +'/'+ item.img +'">';
					html += '<div class="row textWrapper">';
					html += '<p>'+ item.firstname +'</p>';
					html +='</div></div>';

				})
			});
			$('#items').html(html);

			$('#items').cycle({
				// before:  onBefore,
				fx: 'scrollHorz',
				// nowrap:'1',
				next: '.next',
				prev: '.prev',
				// speed:'slow',
				timeout:0
				// startingSlide: 1
				// endingSlide:3;
			})

		});
	});

	}
