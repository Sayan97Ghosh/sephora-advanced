const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.MONGO_DB_URL)

module.exports = { connection }