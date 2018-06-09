// main document ready function to check if dom is loaded fully or not


let title
let year
let id
let plot
let k=[]
let k1= []
var time= 1000
$(document).ready(() => {
    $(`button`).click(function (e) { 
        e.preventDefault();
        
    });
    /* function getAJAX(n)
    {   
       
        return omega
        
    };

   function postAJAX (n) {
            
    }*/
    function dfdAJAX(n){
        var dfd= $.Deferred()
        var omega= 
        $.ajax({
               type: 'GET',
               dataType: 'jsonp',
               async: true,
               url: `https://www.omdbapi.com/?${$(n).parents("form").serialize()}&apikey=9ccf0d71`,
               timeout: time});
        omega.then(function(m){
            console.log(m)
            k.splice(0,0,m)
            return k
            },
            function(e){
            if(e.statusText == 'timeout')
            {
                k.splice(0,0,{"Response":"timeout"})
             return k}
            })  

        dfd.resolve(k)
        return dfd.promise()
    }
    
    
    $(`#search1`).find(`button`).click(function (){
        $(`#needText`).html(`<i class="fas fa-spinner fa-pulse fa-5x"></i><br><br>Proceeding`);
        dfdAJAX(this).then(function(t){
            
            setTimeout(function(){
                console.log(t)
                console.log(t[0])
                k1.splice(0,0,t[0].Response)
                console.log(k1)
                if(k1[0] == "False")
                {
                    $(`#needText`).html(`<i class="fas fa-exclamation-circle fa-5x"></i><br><br>Please give Correct input`);
                }else if(k1[0] == "timeout"){
                    $(`#needText`).html(`<i class="fas fa-exclamation-circle fa-5x"></i><br><br>Request Timeout`);
                

                } 
                
                else {
                    $(`#needText`).text("done");
                }
                   
            
            
            
            },time)
    
           })   

    })
     
    
    $(`#search2`).find(`button`).click(function(){
        postAJAX(this)
        console.log(k)

    }).hover(function () { 
        if(k[0].Response== "False")
        {
            $(`#needText`).text("Please give Correct Imdb Id");
            $(this).addClass("show");
        } else {
            $(this).removeClass("show");
        }
           
    
    }, 
        function () {
            $(this).removeClass("show");
        });

})