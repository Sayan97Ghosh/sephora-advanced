// this is server.js
require('dotenv').config()
const express = require('express')
const { connection } = require('./src/connection/database.connection')
const { userRoutes } = require('./src/routes/user.routes')
const { cartItemRouter } = require('./src/routes/cart_item.routes')

const app = express()
const PORT = process.env.PORT || 4040


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => res.send({ message: 'Hello World' }))
app.use('/user' , userRoutes)
app.use('/user' , cartItemRouter)

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Database is connected successfully')
        console.log(`Listening on http://localhost:${PORT}`)
    } catch (error) {
        console.log(error)
    }
})
