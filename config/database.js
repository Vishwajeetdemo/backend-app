const mongoose = require("mongoose");


const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI).then(conn => console.log(`connect Databases ${conn.connection.host}`))
}

module.exports = connectDatabase;