/**
 * Created by priya.chandra on 8/5/2015.
 */
$(document).ready(function(){
    $('.fade').mouseenter(function(){
        $(this).fadeTo("fast", 1);
    });
    $('.fade').mouseleave(function(){
        $(this).fadeTo("fast", 0.5);
    });
    $('.fade').click(function(){
        $(this).animate({left:'250px'});
    });
    $('.back').mouseenter(function(){
        $(this).fadeTo("fast",1);
    });
    $('.back').mouseleave(function(){
        $(this).fadeTo("fast",0.5);
    });
});