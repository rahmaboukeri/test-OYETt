//import mongoose

const mongoose = require("mongoose")
                    
const connectDB =async()=>
{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI, 
            {useNewUrlParser: true, 
            useUnifiedTopology: true
            });

        console.log("database is connected ...")
        
    } catch (error) {
        console.error("connection database failled",error)
    }
}

module.exports = connectDB
