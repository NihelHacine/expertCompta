const mongoose = require("mongoose");

const db_connect = async () => {
    try {
       const result = await mongoose.connect(process.env.DB_URI) ;
       console.log("Database is connected");
    } catch (error) {
       console.log(error) ;
       console.log("Database is is not connected");
    }
}

module.exports = db_connect ; 