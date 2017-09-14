var html="";
// html += '<p>Yellow world</p>';
// html += '<p>Yellow world</p>';
// html += '<p>Yellow world</p>';
// html += '<p>Yellow world</p>';

$('#item').html(html);
// $(document).ready(function(){
$.getJSON("../json/neuro.json", function(data){
		html += '<p>Yellow world</p>';
		html += '<p>Yellow world</p>';
		html += '<p>Yellow world</p>';
		$('#item').html(data.header);

		// $.each(data,function(key,value){

		// 	$.each(value,function(index,item){
		//
		// 		html += '<div class="item">';
		// 		html += '<h2>' + item.header + '</h2>';
		// 		html += '<p>' + item.image + '</p>';
		// 		html += '</div>';
		// });
	// });

	// $('#item').html(html);

	});
// });
