$(function() {
  $("#contactform").submit(function(e) {
  console.log('click')
   var url = "https://shine-lunch.glitch.me/api/mail";
          $.ajax({
            type: "post",
            url: url,
            data: $(this).serialize(),
           // success: function(data) { alert(data) }
          });  e.preventDefault();
  });

 
});