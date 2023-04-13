// <--- with that function user add their product on the their private cart ---> last update on - 12-04-2023

const { cartItemModel } = require("../models/cart_item.model")
const { productModel } = require('../models/product.model')

const userCartPost = async (req, res) => {
    const { product_id } = req.params
    const userId = req.userId
    try {

        const isExistingItem = await cartItemModel.findOne({ user_id: userId, product_id })

        if (isExistingItem) {
            isExistingItem.quantity += 1;
            await isExistingItem.save()
            res.json(isExistingItem)
        } else {
            const newItem = new cartItemModel({ user_id: userId, product_id })
            newItem.save()
            res.json(newItem)
        }

        // res.json({ message: 'Product Added Successfully in the user cart' })


    } catch (error) {
        res.json({
            message: 'Something went wrong , Please try again',
            error
        })

    }
}

// <--- with that function user add their product on the their private cart ---> Last update on - 12-04-2023

// <--- with that function user see their product on the their private cart ---> last Update on - 12-04-2023

const userCartGet = async (req, res) => {
    try {
        const userCartList = await cartItemModel.find({ user_id: req.userId }).populate('product_id')


        res.json(userCartList)

    } catch (error) {
        console.log(error)
        res.json({
            message: 'Something went wrong , Please try again',
            error
        })
    }
}


// <--- with that function user see their product on the their private cart ---> last Update on - 12-04-2023

// <--- with that function user delete their product on the their private cart ---> Working on - 12-04-2023


const userCartDelete = async (req, res) => {

    const { id } = req.params

    try {

        await cartItemModel.findByIdAndDelete({ id: id })

        res.json({ message: 'Cart Product Item delete successfully' })

    } catch (error) {
        console.log(error)
        res.json({
            message: 'Something went wrong , Please try again',
            error
        })
    }

}

// <--- with that function user delete their product on the their private cart ---> Working on - 12-04-2023


module.exports = { userCartGet, userCartPost, userCartDelete } // on that function I added get the Cart Detail , add the product in their cart , delete the product in their cart
