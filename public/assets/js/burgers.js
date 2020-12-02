$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = true

        var newEatenStatus = {
            eaten: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function() {
                console.log('Changed burger eaten status to', newEaten);
                location.reload();
            }
        );
    });

    $(".reorderBurger").on("click", function(event) {
        var id = $(this).data("id");
        var newEaten = false

        var newEatenStatus = {
            eaten: false
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function() {
                console.log("Changed burger eaten status to", newEaten);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#addBurger").val().trim(),
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