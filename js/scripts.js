var result;
$(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var countToVal=parseInt($("input#countTo").val());//retrive data value
    var countByVal=parseInt($("input#countBy").val());//retrive data valuei
      if(countByVal>countToVal){
        $("#output").append("<li>Please count by smaller number </li>");

      }
      else if(countToVal>0 &&countByVal>0){//count to/by greater than 0
     result = function(){
      for(var i=countByVal;i<=countToVal;i+=countByVal){
          $("#output").append("<li>"+i+"</li>");
      }}();
    }else if(countToVal<0&&countByVal>0){
      result = function(){
        for(var i=countToVal;i<=0;i+=countByVal){
            $("#output").append("<li>"+i+"</li>");
        }}();
//-30 ,5 ==> -30 -25 -20 -15 -10 -5 0
    }else if(countByVal<0){
      $("#output").append("<li>Please input a number 2 greater than 0 </li>");

    }else{
      $("#output").append("<li>Please type number(s) </li>");


    }

  });
});
