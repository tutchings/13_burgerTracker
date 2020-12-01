$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("newEaten");

        var newEatenStatus = {
            eaten: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function() {
                console.log('Changed burger status to', newEaten);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#addBurger").val().trim(),
            eaten: 'notEaten'
        };

        $.ajax("/api/burgers", {
            type: 'POST',
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");

                location.reload();
            }
        );
    });


});