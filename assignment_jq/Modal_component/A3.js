let dataText;
let idText;
let modoutchk;
$(document).ready(function(){
    $(`.show`).click(function () { 
        dataText= $(this).attr("data-small-text");
        console.log(dataText);
        modoutchk= true;
        $(`#${dataText}`).removeClass("sicko").addClass("freako");
        $(`body`).addClass("Overflw");
        $(`.modalP`).animate({margin: "10vh auto auto auto",opacity: "1"},"fast");   
    });

    $('.crossout, .z').click(function () { 
        modoutchk= false;
        
    });
    $(`.modalP`).click(function () { 
        if(modoutchk=== false){
            $(`#${dataText}`).removeClass("freako").addClass("sicko");
        $(`body`).removeClass("Overflw")
        $(`.modalP`).css({"margin":"0vh auto auto auto","opacity": "0"})
        }
        else{
            return;
        }
        
    });

    $('.modalhelp').click(function () { 
        $(`#${dataText}`).removeClass("freako").addClass("sicko");
        $(`body`).removeClass("Overflw")
        $(`.modalP`).css({"margin":"0vh auto auto auto","opacity": "0"})
    });
    

})