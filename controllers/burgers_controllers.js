var express = require("express");
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

router.post("/api/burgers", function (req, res) {
  console.log("POST:", req.body);
  burgers.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, 0],
    function (result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
      console.log("POST:", req.body);
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  console.log(req.body);
  burgers.updateOne(req.params.id, req.body, function (result) {
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
  burgers.delete(req.params.id, (data) => {
    // errs -> no error input
    // data hande it
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
