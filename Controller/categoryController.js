const category = require("../Model/category")

exports.getCategory = async (req,res)=>{
   try {
    const data = await category.find()
    return res.json({error:false,data:data})
   } catch (error) {
    return res.status(400).json({errors:true,error:error.message})
   }
}

exports.postCategory = async (req,res)=>{
    try {
     const data = await category.create(req.body)
     return res.json({error:false,data:data})
    } catch (error) {
     return res.status(400).json({errors:true,error:error.message})
    }
 }