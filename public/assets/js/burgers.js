$(function() {

    // on click event for pickupBurger buttons
    $(".pickupBurger").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = true

        var newEatenStatus = {
            eaten: true
        };

        // send PUT request to change the eaten status to true
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function() {
                console.log('Changed burger eaten status to', newEaten);
                location.reload();
            }
        ); //end put request

    }); //end onclick event for pickupBurger buttons


    // on click event for reorderBurger buttons
    $(".reorderBurger").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = false

        var newEatenStatus = {
            eaten: false
        };

        // PUT request to change eaten status to false
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function() {
                console.log("Changed burger eaten status to", newEaten);
                location.reload();
            }
        ); //end PUT request

    }); //end reorderBurger onclick event

    // submit button on click event (place order button)
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#addBurger").val().trim(),
        };

        //POST request to add new burger to db
        $.ajax("/api/burgers", {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");

                location.reload();
            }
        ); //end POST request

    }); //end submit button onclick event

    // deleteBurger button onclick event
    $(".deleteBurger").on('click', function(event) {
        var id = $(this).data("id");

        // DELETE request to delete the selected burger from the db
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("Deleted burger", id);
                location.reload();
            }
        ); //end DELETE request

    }); //end deleteBurger onclick event


}); //end $(function())