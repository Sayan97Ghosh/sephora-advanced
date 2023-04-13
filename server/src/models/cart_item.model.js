const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({

    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'user'
    },
    quantity: {
        type: Number,
        required : true,
        default: 1
    },

}, {
    versionKey: false,
    timestamps: true
})

const cartItemModel = mongoose.model('cart_item', cartItemSchema)

module.exports = { cartItemModel }