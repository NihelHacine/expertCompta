const express = require("express");
const appoint = require("../models/appoint");
const appointrouter = express.Router();
// add appoint
// POST method

appointrouter.post("/addappoint", async (req, res) => {
  try {
    let newappoint = new appoint({ ...req.body });
    let result = await newappoint.save();
    res.send({ appoint: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister appoint
// Get method
appointrouter.get("/allappoint", async (req, res) => {
  try {
    let result = await appoint.find();
    res.send({ appoint: result, msg: "all appoints " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete appoint
// Delete method
appointrouter.delete("/:id", async (req, res) => {
  try {
    let result = await appoint.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "appoint deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update appoint
// update method
appointrouter.put("/:id", async (req, res) => {
  try {
    let result = await appoint.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " appoint updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = appointrouter;