var html = '';

$(document).ready(function(){
	// html += '<div class="ui divider"></div>';
	$.getJSON('carr.json', function(data){

		$.each(data, function(key, value){

			$.each(value, function(index,student){

				html += '<div class="row student">';
				html += '<img class ="fluid huge image"src="images/'+ student.img +'">';
				html += '<div class="row textWrapper">';
				html += '<h1>'+ student.firstname +'</h1>';
				html +='</div></div>';

				/*
				<div class="row">
					<img class ="fluid small image"src="cloud.png" alt="">
						<div class="row textWrapper">
							<h1>Here goes text</h1>
					</div>
				</div>

				*/

			})
		});
		$('#students').html(html);

		$('#students').cycle({
			// before:  onBefore,
			fx: 'scrollLeft',
			pause:'0',
			// next: '#next',
			// prev: '#prev',
			speed:'slow',
			timeout:1000,
			// startingSlide: 1
			// endingSlide:3;
		})

	});
});
