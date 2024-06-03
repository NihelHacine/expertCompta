const express = require("express");
const forum = require("../models/forum");
const forumrouter = express.Router();

// add forum
// POST method
forumrouter.post("/addforum", async (req, res) => {
  try {
    let newforum = new forum({ ...req.body });
    let result = await newforum.save();
    res.send({ forum: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// lister forum
// Get method
forumrouter.get("/allforum", async (req, res) => {
  try {
    let result = await forum.find();
    res.send({ forum: result, msg: "all forums " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// delete forum
// Delete method
forumrouter.delete("/:id", async (req, res) => {
  try {
    let result = await forum.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "forum deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update forum
// update method
forumrouter.put("/:id", async (req, res) => {
  try {
    let result = await forum.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " forum updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = forumrouter;