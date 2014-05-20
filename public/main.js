$(document).ready(function(){
	// step 1/2 - select and storage input html
	var resultsTemplate = $('#results-template').html();
	// step 3 - compile
	var renderResultsTemplate = Handlebars.compile(resultsTemplate);

	$('#main-form').on('submit', function(){
		// sending entered search term to /search
		var userInput = $('input').val();
		// console.log(userInput);

		$.get('/search', {userInputKey:userInput}, function(responseData){
			// step 4 - render (needs an object)
			var obj = {
				name: userInput, 
				desc: responseData
			};
			var renderedHtml = renderResultsTemplate(obj);
			// step 5 - append
			$('#results').empty().append(renderedHtml);

		})
		return false;
	})

});


