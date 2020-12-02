// node requirements
var express = require("express");

// set up router
var router = express.Router();

// import model from burger.js
var burger = require("../models/burger.js");

// get route
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

// post route
router.post("/api/burgers", function(req, res) {
    burger.create([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// put route
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log('condition:', condition);

    burger.update({
        eaten: req.body.eaten
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// delete route
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// exports router for use throughout application
module.exports = router;