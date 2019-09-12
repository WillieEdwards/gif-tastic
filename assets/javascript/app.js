var cartoonArray = ["The Simpsons", "South Park", "SpongeBob SquarePants", "Rick and Morty"];

$(document).ready(function () {
    for (var i = 0; i < cartoonArray.length; i++) {
        $("#cartoon-buttons").append("<button type='button' onclick='searchGif(\"" + cartoonArray[i] + "\")' class='btn btn-primary' value=' " + cartoonArray[i] + "'> " + cartoonArray[i] + " </button>");
    }
})