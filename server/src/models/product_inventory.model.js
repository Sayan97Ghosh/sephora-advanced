const mongoose = require('mongoose')

const productInventoryModel = new mongoose.model('product_inventory', mongoose.Schema({
    quantity : {
        type : Number,
        required : true
    }
    
}, {
    versionKey: false,
    timestamps: true
}))

module.exports = { productInventoryModel }