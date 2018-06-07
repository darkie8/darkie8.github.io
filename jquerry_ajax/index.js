// main document ready function to check if dom is loaded fully or not


let title
let year
let id
let plot

$(document).ready(() => {
    $(`button`).click(function (e) { 
        e.preventDefault();
        
    });
    $(`#search1`).find(`button`).hover(function () {
        title= $(`#search1`).find(`#title`).val();
        year= $(`#search1`).find(`#year`).val();
        plot= $(`#search1`).find(`#inputGroupSelect01`).val();
        console.log(title+","+year+","+plot)
        if(title== null || title== "" || title == "Movie name")
        {
            $(`#needText`).text("Please give Correct movie title");
            $(this).addClass("show");
        }else {
            $(this).removeClass("show");
        }
            
        }, function () {
            $(this).removeClass("show");
        }
    );
    
    $(`#search2`).find(`button`).hover(function () { 
        id= $(`#search2`).find(`#id`).val();
        plot= $(`#search2`).find(`#inputGroupSelect02`).val();
        console.log(id+","+plot)
        if(id== null || id== "" || id == "IMDB Id")
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
   
    /*myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No usr Token found");

    } else {

        getAllDetails();

    } // end if condition

}); // end document.ready function

let getAllDetails = () =>
 {


    // API call to get user details

    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: `https://graph.facebook.com/me?fields=name,quotes,cover,picture.type(large)&access_token=${myFacebookToken}`,

        success: (response) => {




        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
$(selector).data(key);
    });// end ajax call */

})