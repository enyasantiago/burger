// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
      devoured: '0'
    };
  
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  
  // $(".change-devoured").on("click", function(event) {
  //   var id = $(this).data("id");
  //   var newSleep = $(this).data("newDevoured");

  //   var newSleepState = {
  //     sleepy: newSleep
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "PUT",
  //     data: newSleepState
  //   }).then(
  //     function() {
  //       console.log("changed sleep to", newSleep);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newDevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".delete-button").on("click", function(event) {
    console.log("Delete worked");
    console.log(this);
    var button = $(this);
    // grabs id from button
    var id = button.attr("data-id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function(results) {
        console.log(results);
        location.reload();
      }
    );
  });
  // $(".delete-button").on("click", function (event) {
  //   event.preventDefault();
  //   let id = $(this).data("id");
    
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE",
  //   }).then(function () {
  //     // Reload the page to get the updated list
  //     location.reload();
  //   });
  // });
});
