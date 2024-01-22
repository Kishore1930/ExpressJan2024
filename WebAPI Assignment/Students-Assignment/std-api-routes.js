const express = require("express");
const StdsModel = require('./models/stds-model.js');
const router = express.Router();

// Read All data
router.get("/Stds", async function (req, res) {

    let result = await StdsModel.find({}, { "_id": 0 });
    console.log(result);

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        // sending error details to client
        res.status(500).send(error);
    }
});

// Read Single data
router.get("/Stds/:id", async function (req, res) {
    var sid = req.params.id;
    let result = await StdsModel.findOne({ StdId: sid }, { "_id": 0 });
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);
});


// Create a new data in db
router.post('/Stds', async function (req, res) {
    var stdObj = new StdsModel({
        StdId: parseInt(req.body.StdId),
        Sname: req.body.Sname,
        Srank: req.body.Srank,
        Savg: req.body.Savg,
        Saddress: req.body.Saddress
    });
    console.log(stdObj)


    let newObj = await stdObj.save();

    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
});


//Update the data in db
router.put('/Stds', async function (req, res) {
    var stdsObj = {};

    stdsObj.StdId = parseInt(req.body.StdId),
        stdsObj.Sname = req.body.Sname,
        stdsObj.Srank = req.body.Srank,
        stdsObj.Savg = req.body.Savg,
        stdsObj.Saddress = req.body.Saddress
    // Logic to insert new dept in database
    let resResult = await StdsModel.findOneAndUpdate({ StdId: stdsObj.StdId }, { $set: stdsObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);

});

//Delete the data in db
router.delete('/Stds/:id', async function (req, res) {
    var Id = req.params.id;
    let resResult = await StdsModel.findOneAndDelete({ StdId: Id });

    var result = {};
    result.status = "Record deleted from Database";
    console.log("[Delete] - Record deleted from Database");
    res.send(result);

});



module.exports = router;