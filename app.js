const express = require("express")
const mongoose = require("mongoose")
const ProductRoute = require("./Route/productRoute")
const CategoryRoute = require("./Route/categoryRoute")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/product",ProductRoute)
app.use("/api/category",CategoryRoute)

app.listen(process.env.PORT)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data= await res.default
        console.log(data.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}

db()
