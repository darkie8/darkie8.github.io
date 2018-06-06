// main document ready function to check if dom is loaded fully or not

let myFacebookToken;

$(document).ready(() => {

    myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No usr Token found");

    } else {

        getAllDetails();

    } // end if condition

}); // end document.ready function

let getAllDetails = () => {


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
    });// end ajax call 

}