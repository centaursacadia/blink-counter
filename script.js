$("button").click(function(){
   var name = $(".name") .val();
    var eyecolor = $(".eyecolor") .val();
    var age = $(".age") .val();
    var blinks = 10512000*age;
      console.log(age);
      console.log(parseInt(age));
   $(".result").text(name+", your "+eyecolor+" eyes have blinked "+blinks+" times in your "+age+" years of life.") ;
   
   });
var userInput = $("input").val();

