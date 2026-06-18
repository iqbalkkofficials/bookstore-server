const mongoose = require("mongoose")

const connectionString = process.env.DB_URL
console.log(connectionString)

mongoose.connect(connectionString).then((res)=> {
    console.log("Database connection successful")
}).catch(err=> {
    console.log("Database connection failed")
    console.log(err)
})