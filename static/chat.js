$( document ).ready(function() {
    $("#send-message").click(function() {
      alert("Handler for .click() called.");
      /*
      $.get( "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty", function( data ) {
  		var top_10 = data.slice(0, 10);
  		for (var i = 0; i < top_10.length; i++){
  			$.get(`https://hacker-news.firebaseio.com/v0/item/${top_10[i]}.json?print=pretty`, function(data){
  				var title = data['title'];
  				$( "#random-string" ).append( `<p>${title}</p>` );
  			});
  		}
      });
      */
    $.fetchAllMessages('chat-app.db', function(data) {
    $.each(data, function(text, text) {
      $("#" + text).val(text);
    });
    setInterval(fetchAllMessages(), 1000);
    });
});