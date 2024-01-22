const express = require("express");
const PdtsModel = require('./models/pdts-model.js');
const router = express.Router();

// Read All
router.get("/Pdts", async function (req, res) {

    let result = await PdtsModel.find({}, { "_id": 0 });
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

// Read Single
router.get("/Pdts/:id", async function (req, res) {
    var pid = req.params.id;
    let result = await PdtsModel.findOne({ PdtId: pid }, { "_id": 0 });
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);
});


// Create 
router.post('/Pdts', async function (req, res) {
    var pdtObj = new PdtsModel({
        PdtId: parseInt(req.body.PdtId),
        Pdname: req.body.Pdname,
        Pdprice: req.body.Pdprice,
        PdStandard: req.body.PdStandard

       

    });
    console.log(pdtObj)

    // Logic to insert new dept in database
    let newObj = await pdtObj.save();

    var result = {};
    result.status = "Record inserted in Database";
    console.log("[Create] - Record inserted in Database");
    res.send(result);
});


//Update
router.put('/Pdts', async function (req, res) {
    var pdtObj = {};

        pdtObj.PdtId= parseInt(req.body.PdtId),
        pdtObj.Pdname= req.body.Pdname,
        pdtObj.Pdprice= req.body.Pdprice,
        pdtObj.PdStandard=req.body.PdStandard
    // Logic to insert new dept in database
    let resResult = await PdtsModel.findOneAndUpdate({ PdtId: pdtObj.pId }, { $set: pdtObj });

    var result = {};
    result.status = "Record updated in Database";
    console.log("[Update] - Record updated in Database");
    res.send(result);

});

//Delete
router.delete('/Pdts/:id', async function (req, res) {
    var Id = req.params.id;
    let resResult = await PdtsModel.findOneAndDelete({ PdtId: Id });

    var result = {};
    result.status = "Record deleted from Database";
    console.log("[Delete] - Record deleted from Database");
    res.send(result);

});



module.exports = router;