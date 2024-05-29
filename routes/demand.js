const express = require("express");
const demand = require("../models/demand");
const demandrouter = express.Router();

// add demand
// POST method
demandrouter.post("/adddemand", async (req, res) => {
  try {
    let newdemand = new demand({ ...req.body });
    let result = await newdemand.save();
    res.send({ demand: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// lister demand
// Get method
demandrouter.get("/alldemand", async (req, res) => {
  try {
    let result = await demand.find();
    res.send({ demand: result, msg: "all demands " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// delete demand
// Delete method
demandrouter.delete("/:id", async (req, res) => {
  try {
    let result = await demand.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "Demand deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update demand
// update method
demandrouter.put("/:id", async (req, res) => {
  try {
    let result = await demand.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: {status:"acceptée"} }
    );
    res.send({ msg: " Demand updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = demandrouter;