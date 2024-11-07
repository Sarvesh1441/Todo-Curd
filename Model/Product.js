const mongoose = require("mongoose")
const { title } = require("process")
const category = require("./category")
const { type } = require("os")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true
    },
    creatdAt:{
        type:Date,
        default:Date.now()
    }
  
})

module.exports = mongoose.model("product1",ProductSchema)