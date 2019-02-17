$( document ).ready(function() {
    $("#target").click(function() {
      alert("Handler for .click() called.");
      $.get( "/hi", function( data ) {
        $( "#random-string" ).html( data );
      });
    });
});