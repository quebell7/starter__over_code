$(document).ready(pageReady);


	function pageReady() {
		
// The input field

		$("#submit-btn").click(function checkInput() {
		event.preventDefault();
		$("p").html($("#city-type").val());


	} );

// Variables

		// $("#submit-btn").click(changeBackground);

		var cityName = $("#city-type").val();
		// var defaultBackground = document.body.style.backgroundImage = "url(../images/'+ someimage+'.jpg) no-repeat center fixed"; 
		// var  cityBackground = document.body.style.backgroundImage = "url(../images/nyc.jpg) no-repeat center fixed";
		


// Conditionals
		// function changeBackground(){

		if (cityName === "New York" || "NYC" || "NY") {
			event.preventDefault();
			console.log("match for NYC");
    		$("body").addClass("nyc");
    	
    	}

    	else {
    		console.log("not NY")
    	}


		// if (cityName === "San Francisco" || "SF" || "San Fran") {
		// 	console.log("match for SF");
    		
  //   		$("body").addClass("sf");
		// }


		// else {

		// }

		}

// // Else if the value is equal to 7, add a green border
// else if ($(this).val() == 7) {
//     $(this).css("border", "5px solid green");
// }

// // Else if the value is greater than 7, add an orange border
// else if ($(this).val() > 7) {
//     $(this).css("border", "5px solid orange");
// }

// // Else if the value is anything else, add a black border
// else {
//     $(this).css("border", "5px solid black");
// }













		// var defaultBackground = document.body.style.backgroundImage = "url(../images/'+ someimage+'.jpg) no-repeat center fixed";

		// function changeBackground(){


		// 	if ($("#city-type").val() === "NYC") {
		// 		console.log("NYC");
  //           $("body").addClass(".nyc");

  //       } else {
            
  //       }
		// }




	// $("submit-btn").submit(() {
		
	// 	$('#msg').html($('input:textbox').val());
		
 //    });

	

	// $("input:#submit-btn").click(function () {
	// 	$('#msg').html($('input:textbox').val());
		
 //    });



	
//     $("#city-type").submit(switchUp); 
    
//     var cityName = document.getElementById("#city-type");
//     document.getElementById("submit-btn").onclick = cityName;


//     var defaultVal = cityName.defaultValue;
//     var currentVal = cityName.value;

//     if (defaultValue === currentVal)


//     {
//     e.preventDefault()
//     console.log("please");
//     }


//     $('#submit-btn').click(function() {
//     $("#inputArea").get(0).reset();
//     var city = $("#city-type").val().toLowerCase(); 


//     if (city == 'New York' || 'NYC' || 'NY') {
//     $('body').css('background-image',    'url("images/nyc.jpg")');
// 	}


//     if (city == 'San Francisco' || 'SF' || 'Bay Area') {
//     $('body').css('background-image', 'url("images/sf.jpg")');
// 	}


//     if (city == 'Los Angeles' || 'LA' || 'LAX') {
//     $('body').css('background-image', 'url("images/la.jpg")');
//     }


//     if (city == 'Austin' || 'ATX') {
//     $('body').css('background-image', 'url("images/austin.jpg")');
//     }


//     if (city == 'Sydney' || 'Syd') {
//     $('body').css('background-image', 'url("images/sydney.jpg")');
//     }
// })


