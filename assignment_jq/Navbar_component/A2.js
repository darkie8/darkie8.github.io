let n= [true,true]
let k;
$(document).ready(function () {
    
    k = $(window).width();
        function bullock(){if(k < 855){
            
            $(`#part2`).append(`<div  class="fa-2x pi2" id="search">
            <i class="fas fa-search"></i></div>
    </div>`);
            $(`.form`).remove();
            $('#searchdropdown').html(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Mickey" class="font-sz">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);

        }
        else{
            $(`#part2`).prepend(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Mickey" class="font-sz">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);
        $(`#search`).remove();
        }}
        bullock()
       function deadlockMin(){
            if(k<560){
               $(`#part2`).prepend(`<div  class="fa-2x" style="padding: 0px 20px;" id="menudrop">
               <i class="fas fa-caret-square-down" data-fa-transform="grow-3"></i>
           </div>`); 
               $(`.dandelion1`).html(``);
            }
            else{
                $(`.menudrop`).remove();
                $(`.dandelion1`).html(`<li style="display: inline;" class="pad normal-guy">Lorem</li>
                <li style="display: inline;" class="pad link-guy">Lorem</li>
                <li style="display: inline;" class="pad dropdown-guy">Lorem</li>
                <li style="display: inline;" class="pad deactive-guy">Lorem</li>`); 
                


            }
        }
        deadlockMin()
    $(`#menudrop`).click(function () { 
        if(n[0]==true)
        {$(`#menudropdown`).animate({height:"150px"});
        n[0] = false  
        console.log(n[0])}
        else { 
        $(`#menudropdown`).animate({height:"0px"});
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

    
});
