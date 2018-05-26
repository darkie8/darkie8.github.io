let n
let m
$(document).ready(function(){
    $(`#One`).click(function () { 
        $('.ModalS').removeClass("sicko").addClass("freako");
        $(`body`).addClass("Overflw");
        $(`.modalP`).animate({margin: "10vh auto auto auto",opacity: "1"},"fast");       
        n= true;
        
        console.log(n)
        
    });
    $(`.modalP`).click(function () { 
        n= false
        console.log(n)
       });
    $('.modalhelp').click(function () { 
        $('.ModalS').removeClass("freako").addClass("sicko");
        $(`body`).removeClass("Overflw")
        $(`.modalP`).css({"margin":"0vh auto auto auto","opacity": "0"})
    });
    
    console.log(n)

})