const cartItemRouter = require('express').Router()

const { userCartPost, userCartGet, userCartDelete } = require('../controllers.js/cart_item.controller')
const { authMiddleWare } = require('../middlewares/auth.middleware')

cartItemRouter.use(authMiddleWare)

cartItemRouter.post("/cart", userCartPost)

cartItemRouter.get("/cart/:product_id", userCartGet)

cartItemRouter.get("/cart/:id", userCartDelete)


module.exports = { cartItemRouter }

