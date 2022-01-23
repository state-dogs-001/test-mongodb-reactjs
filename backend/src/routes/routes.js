const express = require('express')
const router = express.Router()
const signupTemplateCp = require('../models/signupModel')
const productTemplateCp = require('../models/productModel')

// Authentication Sign-up
router.post('/signup', (request, response) => {
    const signupUser = new signupTemplateCp({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
    })

    signupUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

// Add Product
router.post('/addproduct', (request, response) => {
    const addProduct = new productTemplateCp({
        productName: request.body.productName,
        productBrand: request.body.productBrand,
        productPrice: request.body.productPrice,
        productImage: request.body.productImage,
        productStatus: request.body.productStatus,
        productDescription: request.body.productDescription,
    })

    addProduct.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

// Get Products
router.get('/getproducts', (request, response) => {
    const getProducts = productTemplateCp

    getProducts.find()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router