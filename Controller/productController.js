const product = require("../Model/Product")

exports.getProduct = async (req,res)=>{
     try {
        const data = await Product.find().populate("category")
        return res.json({error:false,data:data})
     } catch (error) {
        return res.status(400).json({error:true,message:error.message})
     }
}

exports.postProduct = async (req,res)=>{
  try {
    const data = await Product.create(req.body)
    return res.json({error:false,data:data})
  } catch (error) {
    return res.status(400).json({error:true,message:error.message})
  }
}