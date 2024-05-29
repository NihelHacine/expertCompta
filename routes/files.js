const express = require("express");
const files = require("../models/files");
const filesrouter = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })


// add file
// POST method
filesrouter.post("/upload-files",upload.single("file"), async (req,res) => {
    console.log(req.file);
    const title = req.body.title;
    const file = req.file.filename;
    const service = req.body.service;
    const demand_num = req.body.demand_num;
    const admin = req.body.admin;
    try {
        await files.create({file_name:title,file:file,service:service, demand_num:demand_num,admin:admin});
        res.send("file uploaded");
    } catch (error) {
        res.json({status:error});
    }
})

// lister files
// Get method
filesrouter.get("/allfiles", async (req, res) => {
  try {
    files.find({}).then(
        (data) => {
            res.send({status:'ok',data: data});
        }
    )
    
  } catch (error) {
    
  }
});

filesrouter.get("/allfiless", async (req, res) => {
  try {
    let result = await files.find();
    res.send({ file: result, msg: "all files " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// delete files
// Delete method
filesrouter.delete("/:id", async (req, res) => {
  try {
    let result = await files.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "file deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});


module.exports = filesrouter;