var i=0;

function initHome(){
	$("#codeWrapper").load("pages/home.html");
}

function initPortfolio(){
	$("#codeWrapper").load("pages/portfolio.html");
}

function carr(dataPath, imgPath){
	var html1 ='' ;

	$(document).ready(function(){

		$('#carr_init').html('<div class="button_ctn"><div class=""> <div class="prev ui circular icon huge red button left floated"><i class="ui left chevron icon"></i></div><div class="next circular huge red button ui icon right floated"><i class="ui right chevron icon"></i></div></div></div><div id="items" class="ui container"></div><div class="ui hidden divider"></div><div class="ui divider"></div>');


		// html += '<div class="ui divider"></div>';
		$.getJSON(dataPath, function(data){
			$.each(data, function(key, value){
				$.each(value, function(index,item){
					html1 += '<div class="row student">';
					html1 += '<img class ="ui fluid image" src="'+ imgPath +'/'+ item.img +'">';
					html1 += '<div class="row textWrapper change">';
					html1 += '<p>'+ item.firstname +'</p>';
					html1 +='</div></div>';
				})
			});

			$('#items').html(html1);

			var widthQuery = window.matchMedia("(min-width: 800px)").matches;
			// Put conditional here for loading the cycle script

			if (widthQuery){
				$('.button_ctn').show();
				$('#items').cycle({
					// before:  onBefore,
					fx: 'fade',
					// nowrap:'1',
					next: '.next',
					prev: '.prev',
					speed:'slow',
					timeout:0
					// startingSlide: 1
					// endingSlide:3;
				})
			}

			else if(!widthQuery){
				$('.button_ctn').hide();
				$('.change').removeClass('textWrapper').addClass('carText');
			}


		});
	});

}


function adsliderInit(index) {

	// $("#head1, #para, #img").removeClass("animated fadeIn");
	if (index < 0){

		history.go(0);

	}

	else if (index > 6){
		index = 6;
	}

	$.getJSON("data.json", function(object) {
		// Jquery animations, add classes first
		// $("#head1, #para, #img").addClass("animated fadeIn");
		var storeObj = object.content[index];
		//Populate with data different areas
		document.getElementById("head1").innerHTML = storeObj.head1;
		document.getElementById("date").innerHTML = storeObj.date;
		document.getElementById("para").innerHTML = storeObj.para;
		// document.getElementById("metaD").innerHTML= storeObj.logo;
		$("#img").load(storeObj.html);
		// carr(storeObj.carr1,storeObj.carr2);
	});

	return i=index;
};


initHome();
// adsliderInit(i); //Run from the start (Init)

// Sticky for buttons
// $('.ui.sticky')
// .sticky({
// 	context: '#column2'
// })
// ;

// Scroll function
function scrollDown(target){
		$('html,body').animate({
			scrollTop: $(target).offset().top},
			'slow');
}
