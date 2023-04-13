const mongoose = require('mongoose')

const productModel = new mongoose.model('product', mongoose.Schema({

    name: { type: String, required: true },
    desc: String,
    sku : {
        type: String,
        required: true,
        unique: true
      },
    category_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'product_category'
    },
    inventory_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'product_inventory'
    },
    price : {
        type : Number,
        required : true
    },
    // <--- I will comment this out we have to wait until the confirmation --- > working on - 11-04-2023

    // discount_id : {
    //     type : String
    // }

    // <--- I will comment this out we have to wait until the confirmation --- > working on - 11-04-2023


}, {
    versionKey: false,
    timestamps: true
}))

module.exports = { productModel }