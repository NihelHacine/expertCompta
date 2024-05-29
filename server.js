const express = require ("express");
const app = express ();
const cors = require('cors');
app.use(express.json());
const db_connect = require("./connect_db");
app.use(cors());
app.use("/files",express.static("files"));
require("dotenv").config();
//connexion db
db_connect();


//routes
app.use("/user", require("./routes/user"));
app.use("/appoint", require("./routes/appoint"));
app.use("/demand", require("./routes/demand"));
app.use("/files", require("./routes/files"));
app.use("/forum", require("./routes/forum"));


//server
const PORT = process.env.PORT ;
app.listen( PORT , 
    (err) => err?console.log(err): console.log(`server is running on ${PORT}!`)
    );
