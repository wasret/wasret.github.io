$(document).ready(function() {

 $("#rain").fadeOut();

 setTimeout(function(){
    $("#rain").text("so much...");
 }, 8000);
 
 $("#rain").fadeIn();

 $("#bed").fadeOut();

 setTimeout(function(){
    $("#bed").text("NOW THE MOTHER FUCKERS DEAD");
 }, 15000);
 
 $("#bed").fadeIn();

  $(document).ready(function(){
    $("#text").hover(function(){
    $("#text").animate({fontSize: "80px"});
},
    function(){
        $("#text").stop().animate({fontSize:"12px"});
    });
});



 $("#dead").mouseenter(function(){
    $(this).css("border", "solid 15px red");
 });

 $("#dead").mouseleave(function(){
    $(this).css("border", "none");
 });

 $("#oldman").click(function(){
        if($(this).is(":checked"))
        {
            $("#smiley").text("8^)");
        }else{
            var i = 1;

            while (i=1)
                i=i;

        }
    });

});

