const { productModel } = require("../models/product.model")

const getProduct = async (req , res) => {
    try {

        const productList = await productModel.find()

        res.json(productList)
        
    } catch (error) {
        console.log(error)
    }
}