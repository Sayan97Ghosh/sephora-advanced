const mongoose = require('mongoose')

const userAuthSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: function () {
        return !this.oauth
    } },
    oauthid : {type : String },
    oauth : {type : String , enum : ['google']}
}, {
    versionKey: false,
    timestamps: true
})

const userAuthModel = mongoose.model('user', userAuthSchema)

module.exports = { userAuthModel }