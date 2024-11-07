const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    title:{
    type:String,
    require:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("category1",categorySchema)