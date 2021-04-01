var express = require("express")
var router = express.Router();
var burgers = require("../models/burger");

// Create the `router` for the app and set up logic within those routes where required
// GET (read) ROUTE
router.get("/", (req, res) => {
    burgers.selectAll(function (data) {
      let hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
      //res.json(hbsObject)
    });
  });

  
  router.post("/api/burgers", function(req, res) {
    burgers.insertOne([
      "burger", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  // The `catsController.js` file to have a `/api/cats/:id` delete route, 
  // to call the delete key of the cat model, and to pass in arguments as necessary
  router.delete("/api/burgers/:id", (req, res) => {
    // req.params --> we have req.params.id
    // req.body --> not needed
    // query.... no do we have model? --> we will use the cat.delete
    cat.delete({ id: req.params.id }, data => {
      // errs -> no error input
      // data hande it
      console.log(data);
      res.json(data);
    });
  });


module.exports = router;