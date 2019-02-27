$( document ).ready(function() {
    $('#get_messages' function(data){
      $.ajax({
      type: 'GET', 
      url: '/get_messages',
      var messages = data.getElementById('send').value;
      data: JSON.stringify({ messages: messages }),
      success: function(response){
        console.log(response);
      },
      error: function(error){
        console.log(error);
      }
    });
      $('#get_messages' ).append( `<p>${data}</p>` );
    });
    $.setInterval(ajax(), 1000);
});

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

      $("#send-message").click(function() {
      alert("Handler for .click() called.");
      */