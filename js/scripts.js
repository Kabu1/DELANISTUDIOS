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
    event.preventDefault();



});
