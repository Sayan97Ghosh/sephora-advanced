const mongoose = require('mongoose')

const productCategoryModel = new mongoose.model('product_category', mongoose.Schema({

    name: { type: String, required: true },
    desc: String,


}, {
    versionKey: false,
    timestamps: true
}))

module.exports = { productCategoryModel }