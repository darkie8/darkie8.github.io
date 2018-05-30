var n=[];
let k;
let positionLeft;
var htmlSave;
$(document).ready(function () {
    let z = $(`body`).find(`.superParent`);
    console.log(z)
    console.log(z[0].id)
    for(let m = 0;m< z.length;m++){
         n.push([true,true])

    }
    console.log(n)
    for(let m = 0;m< z.length;m++)
 {   
     htmlSave= $(`#${z[m].id}`).find(`.dandelion1`).html();
    console.log(htmlSave)
    k = $(window).width(); 
        function bullock(){
            for(let i=1;i<=2;i++)
            {if($(`#${z[m].id}`).find(`.part${i}`).attr("data-element")=="searchbar")
            {if(k < 855){
            
            $(`#${z[m].id}`).find(`.part${i}`).append(`<div  class="fa-1x pi2 search">
            <i class="fas fa-search"></i></div>
    </div>`);
            $(`#${z[m].id}`).find(`.form`).remove();
            $(`#${z[m].id}`).find('.searchdropdown').html(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Search" class="font-sz searchin">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);

        }
        else{
            $(`#${z[m].id}`).find(`.part${i}`).prepend(`<form class="form" style="padding: 10px;">
            <input type="text" name="firstname" value="Search" class="font-sz searchin">
                <button class="fa-1x buttonheight"><i class="fas fa-search"></i></button>
        </form>`);
        $(`#${z[m].id}`).find(`.search`).remove();
        }}
        if($(`#${z[m].id}`).find(`.part${i}`).data("element")== "emailpass"){
            if(k < 650){
                $(`#${z[m].id}`).find(`.part${i}`).append(`<div  class="fa-1x pi2 search">
                <i class="fas fa-eye"></i></div>
        </div>`);
                $(`#${z[m].id}`).find(`.form`).remove();
                $(`#${z[m].id}`).find('.searchdropdown').html(`<form class="form " style="padding: 2px;">
                <input style="height:30px;position:relative;top:10px" type="text" name="firstname" value="Email" class="font-szemail emailin">
                    
            </form><form class="form" style="padding: 2px;">
            <input type="text" name="firstname" value="Password" class="font-szemail searchin" style="height:30px;position:relative;top:10px">
                <button class="fa-1x buttonheightsubmit" style="height:30px;position:relative;top:10px">Submit</button>
        </form>`);
            }
            else{
                $(`#${z[m].id}`).find(`.part${i}`).prepend(`<form class="form formempass" style="padding: 10px;">
                <input type="text" name="firstname" value="Email" class="font-szemail emailin">
                    
            </form><form class="form formempass" style="padding: 10px;">
            <input type="text" name="firstname" value="Password" class="font-szemail searchin">
                <button class="fa-1x buttonheightsubmit">Submit</button>
        </form>
            `);
            $(`#${z[m].id}`).find(`.search`).remove();
            }
        }
       }
    }
        bullock()
       function deadlockMin(){
            if(k<560){
               for(let i=1;i<=2;i++)
                {
                    if($(`#${z[m].id}`).find(`.part${i}`).attr("data-doomsday")=="icon")
                    {$(`#${z[m].id}`).find(`.part${i}`).prepend(`<div  class="fa-1x menudrop" style="padding: 0px 20px;" >
               <i class="fas fa-caret-square-down" data-fa-transform="grow-3"></i>
           </div>`);
        }
        

        } 
               $(`#${z[m].id}`).find(`.dandelion1`).html(``);
               $(`#${z[m].id}`).find(`.menudropdown`).html(`${htmlSave}`); 
                $(`#${z[m].id}`).find(`.menudropdown`).children(`.pad`).addClass("bi").removeClass("ti")

            }
            else{
                $(`#${z[m].id}`).find(`.menudrop`).remove();
                $(`#${z[m].id}`).find(`.dandelion1`).html(`${htmlSave}`); 
                $(`#${z[m].id}`).find(`.dandelion1`).children(`.pad`).addClass("ti").removeClass("bi")


            }
        }
        deadlockMin()
    $(`#${z[m].id}`).find(`.menudrop`).click(function () { 
        if(n[m][0]==true)
        {$(`#${z[m].id}`).find(`.menudropdown`).animate({height:"180px"});
        n[m][0] = false  
        console.log(n[m][0])}
        else { 
        $(`#${z[m].id}`).find(`.menudropdown`).animate({height:"0px"});
        $(`#${z[m].id}`).find(`.dropdowndrop`).slideUp();
        n[m][0]= true;
     }
    });
    $(`#${z[m].id}`).find(`.search`).click(function () { 
        if(n[m][1]==true)
        {$(`#${z[m].id}`).find(`.searchdropdown`).animate({height:"47px"});
        n[m][1] = false  
        console.log(n)}
        else { 
        $(`#${z[m].id}`).find(`.searchdropdown`).animate({height:"0px"});
        n[m][1]= true;
     }
    });
     $(window).resize(function () { 
        $(`#${z[m].id}`).find(`.dropdowndrop`).slideUp();
            $(`#${z[m].id}`).find(`.searchdropdown`).animate({height:"0px"});
            $(`#${z[m].id}`).find(`.menudropdown`).animate({height:"0px"});
            for(let i=0;i<=1;i++){
                if(n[i]==false)
            {
            n[i] = true  
            }
            }
           k = $(window).width();
           if(k<1400){
            location.reload();
           }
           
           

            console.log(n)
        });

        let position1 = $(`#${z[m].id}`).find(`.part1`).position();
     let position2 = $(`#${z[m].id}`).find(`.dandelion1`).position();
     let position3 = $(`#${z[m].id}`).find(`.dropdown-guy`).position();
        let left = 15+ position1.left + position2.left + position3.left;
        console.log(left);
        $(`#${z[m].id}`).find(`.dropdowndrop`).css({"position": "relative",
                                "left": `${left}px`});
    $(`#${z[m].id}`).find(`.dropdown-guy`).click(function () { 
        $(`#${z[m].id}`).find(`.dropdowndrop`).slideToggle();
        $(this)
              .find('[data-fa-i2svg]')
              .toggleClass('fa-angle-down')
              .toggleClass('fa-angle-right');
        
    });
    $(`#${z[m].id}`).find(`.buttonheight`).click(function (e) { 
        e.preventDefault();
        
    });
    if($(`#${z[m].id}`).data("rev")=="yes"){
        $(`#${z[m].id}`).find(`.parent`).css({"flex-direction": "row-reverse",
        "-webkit-flex-direction": "row-reverse",
        "-moz-flex-direction": "row-reverse",
        "-o-flex-direction": "row-reverse"});
         position1 = $(`#${z[m].id}`).find(`.part1`).position();
      
      position3 = $(`#${z[m].id}`).find(`.dropdown-guy`).position();
         left =(k<560)?110+position3.left:position1.left + position3.left-80;
        console.log(left);
        $(`#${z[m].id}`).find(`.dropdowndrop`).css({"position": "relative",
                                "left": `${left}px`});
    }
   }
   
    
    
});
