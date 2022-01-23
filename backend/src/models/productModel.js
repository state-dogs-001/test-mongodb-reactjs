const mongoose = require('mongoose')

const addProductTemplate = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
    },
    productBrand: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    productStatus: {
        type: Boolean,
        required: true
    },
    productDescription: {
        type: String,
        default: "Not have description."
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ProductTable', addProductTemplate)