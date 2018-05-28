let n= [true,true]
let k;
let positionLeft;
var htmlSave;
$(document).ready(function () {
    htmlSave= $(`.dandelion1`).html();
    console.log(htmlSave)
    k = $(window).width();
        function bullock(){if(k < 855){
            
            $(`#part2`).append(`<div  class="fa-1x pi2" id="search">
            <i class="fas fa-search"></i></div>
    </div>`);
            $(`.form`).remove();
            $('#searchdropdown').html(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Search" class="font-sz searchin">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);

        }
        else{
            $(`#part2`).prepend(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Search" class="font-sz searchin">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);
        $(`#search`).remove();
        }}
        bullock()
       function deadlockMin(){
            if(k<560){
               $(`#part2`).prepend(`<div  class="fa-1x" style="padding: 0px 20px;" id="menudrop">
               <i class="fas fa-caret-square-down" data-fa-transform="grow-3"></i>
           </div>`); 
               $(`.dandelion1`).html(``);
               $(`#menudropdown`).html(`${htmlSave}`); 
                $(`#menudropdown`).children(`.pad`).addClass("bi").removeClass("ti")

            }
            else{
                $(`.menudrop`).remove();
                $(`.dandelion1`).html(`${htmlSave}`); 
                $(`.dandelion1`).children(`.pad`).addClass("ti").removeClass("bi")


            }
        }
        deadlockMin()
    $(`#menudrop`).click(function () { 
        if(n[0]==true)
        {$(`#menudropdown`).animate({height:"180px"});
        n[0] = false  
        console.log(n[0])}
        else { 
        $(`#menudropdown`).animate({height:"0px"});
        $(`#dropdowndrop`).slideUp();
        n[0]= true;
     }
    });
    $(`#search`).click(function () { 
        if(n[1]==true)
        {$(`#searchdropdown`).animate({height:"47px"});
        n[1] = false  
        console.log(n)}
        else { 
        $(`#searchdropdown`).animate({height:"0px"});
        n[1]= true;
     }
    });
     $(window).resize(function () { 
        $(`#dropdowndrop`).slideUp();
            $(`#searchdropdown`).animate({height:"0px"});
            $(`#menudropdown`).animate({height:"0px"});
            for(let i=0;i<=1;i++){
                if(n[i]==false)
            {
            n[i] = true  
            }
            }
           k = $(window).width();
           if(k<855){
            location.reload();
           }
           if(k<560){
            location.reload();
           }
           

            console.log(n)
        });
        var position1 = $(`#part1`).position();
     var position2 = $(`.dandelion1`).position();
     var position3 = $(`.dropdown-guy`).position();
        var left = 15+ position1.left + position2.left + position3.left;
        console.log(left);
        $(`#dropdowndrop`).css({"position": "fixed",
                                "left": `${left}px`});
    $(`.dropdown-guy`).click(function () { 
        $(`#dropdowndrop`).slideToggle();
        $(this)
              .find('[data-fa-i2svg]')
              .toggleClass('fa-angle-down')
              .toggleClass('fa-angle-right');
        
    });
    $(`.buttonheight`).click(function (e) { 
        e.preventDefault();
        
    });
    
});
