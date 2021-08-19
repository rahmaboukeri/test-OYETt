const mongoose = require('mongoose')


//creation schema
const {Schema} = mongoose

const contactSchema = new Schema({
    name : {
        type: String,
        required: true
    }
})
module.exports = contact = mongoose.model("titre",contactSchema)