let dataText;
let idText;
let modOutChk;
let modalPosition;
let modalHeight;
let windowHeight;
let marginUltSm = 6;
let marginUltMid= 10;
let marginUltMre= 19;
let marginUltCent;
let marginUlt;
$(document).ready(function(){
    $(`.show`).click(function () { 
        dataText= $(this).attr("data-size-text");
        console.log(dataText);
        modalPosition= $(this).attr("data-position-modal");
        modalHeight= $(`.${dataText}`).children("div.modalP").height();
        console.log(modalHeight);
        windowHeight= $(`.modalRequirement`).height()
        console.log(windowHeight)
        marginUltCent= ((1-modalHeight/windowHeight)/2)*100
        marginUlt= (modalPosition=="centeraxis")?marginUltCent:((modalPosition=="normal-more")?
        marginUltMre:((modalPosition=="normal")?
        marginUltMid:marginUltSm));
        console.log(marginUlt);
        modOutChk= true;
        $(`.${dataText}.${modalPosition}`).removeClass("sicko").addClass("freako");
        $(`body`).addClass("Overflw");
        $(`.modalP`).animate({margin: `${marginUlt}vh auto auto auto`,opacity: "1"},"fast"); 
        
    });

    $('.crossout, .z').click(function () { 
        modOutChk= false;
        
    });
    $(`.modalP`).click(function () { 
        if(modOutChk=== false){
            $(`.${dataText}`).removeClass("freako").addClass("sicko");
        $(`body`).removeClass("Overflw")
        $(`.modalP`).css({"margin":"0vh auto auto auto","opacity": "0"})
        }
        else{
            return;
        }
        
    });

    $('.modalhelp').click(function () { 
        $(`.${dataText}`).removeClass("freako").addClass("sicko");
        $(`body`).removeClass("Overflw")
        $(`.modalP`).css({"margin":"0vh auto auto auto","opacity": "0"})
    });
    
    


})