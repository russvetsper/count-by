$(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var countToVal=parseInt($("input#countTo").val());//retrive data value
    var countByVal=parseInt($("input#countBy").val());//retrive data value

    var result = function(){
      for(var i=countByVal;i<=countToVal;i+=countByVal){
          $("#output").append("<li>"+i+"</li>");
      }}();


  });
});
