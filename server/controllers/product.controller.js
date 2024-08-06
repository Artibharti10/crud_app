const Product = require('../models/product.model.js')

const getProducts = async(req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500);
    }
}

const getSingleProducts = async(req,res) => {
    try{
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

const createProducts = async(req,res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

}

const updateProducts = async(req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteProducts = async(req,res) => {
    try{
        const {id} = req.params;
        const products = await Product.findByIdAndDelete(id);
        if(!products){
            res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({message:"Product deleted successfully"});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {getProducts, getSingleProducts, createProducts, updateProducts, deleteProducts}