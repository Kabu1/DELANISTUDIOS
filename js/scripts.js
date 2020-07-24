$(document).ready(function(){

    //what we do hide and show the icon and the content//
    $(".column1").click(function(){
        $(".icon1").toggle();
        $(".contents1").toggle();

    });
    $(".column2").click(function(){
        $(".icon2").toggle();
        $(".contents2").toggle();

    });
    $(".column3").click(function(){
        $(".icon3").toggle();
        $(".contents3").toggle();

    });

    //form for collecting information
    $("#form-contact").submit(function(event){
       
       //longer version that doesnt user loop

       //var nameInput = $("input#name").val();
       //var emailInput = $("input#email").val();
       //var messageInput = $("input#message").val();

        //$(".name").text(nameInput);
        //$(".email").text(emailInput);
        //$(".message").text(messageInput);

        //shorter version of the same code
        var blanks = ["name", "email", "message"];
        blanks.forEach(function(blank){
            var userInput = $("input#" +blank).val();
            $("."+ blank).text(userInput);
        });

        $("#response").show();
        
        event.preventDefault();

    });

});
