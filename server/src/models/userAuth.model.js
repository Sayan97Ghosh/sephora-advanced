const mongoose = require('mongoose')

const userAuthSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})

const userAuthModel = mongoose.model('user', userAuthSchema)

module.exports = { userAuthModel }