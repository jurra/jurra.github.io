var object =[

		{"title":"Project A has  changed",
			"body":"here goes the body of the text"
		},
		{
			"title":"Project B for Leila",
				"body":"here goes the body of the text"

		},
		{
			"title":"Project c",
			"body":"here goes the body of the text"

		},
		{
			"title":"Project D Change",
			"body":"here goes the body of the text"

		}

	];

var i= 0;


function adsliderInit(index) {
	console.log(object[i].title);
  return i=index+1;
	};

adsliderInit(i);
console.log(i);
prompt("click right or left:");
