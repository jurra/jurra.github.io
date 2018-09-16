function carr(dataPath, imgPath){

var html = '';

$(document).ready(function(){
	// html += '<div class="ui divider"></div>';
	$.getJSON(dataPath, function(data){

		$.each(data, function(key, value){

			$.each(value, function(index,item){

				html += '<div class="row student">';
				html += '<img class ="ui fluid image" src="'+ imgPath + item.img +'">';
				html += '<div class="row textWrapper">';
				html += '<p>'+ item.firstname +'</p>';
				html +='</div></div>';

			})
		});
		$('#items').html(html);

		$('#items').cycle({
			// before:  onBefore,
			fx: 'scrollHorz',
			nowrap:'1',
			next: '.next',
			prev: '.prev',
			speed:'slow',
			timeout:0
			// startingSlide: 1
			// endingSlide:3;
		})

	});
});

}

// carr('carr.json','images');
