const Product = require('../models/Product');

module.exports.get_products = (req,res) => {
    console.log(req.query.page)
    Product.find().sort({date:-1}).limit(req.query.page*10).then(product => res.json(product));
}

module.exports.get_outOfStock_products = (req,res) => {
    Product.find({quantity : 0}).then(product => res.json(product));
}

module.exports.get_product = (req,res) => {
    Product.find({Product_name : req.params.Product_name}).then(product => res.json(product));
}

module.exports.post_product = async (req,res) => {
    const newProduct = new Product({
        Product_name: req.body.Product_name,
        Price: req.body.Price,
        weight: req.body.weight,
        description: req.body.description,
        quantity: req.body.quantity
    });
    const newProducts2 =  await newProduct.save()
    res.status(201).json(newProducts2);
}

module.exports.update_product = async (req,res) => {
    await Product.findByIdAndUpdate({_id: req.params.id},req.body).then(function(product){
         Product.findOne({_id: req.params.id}).then(function(product){
            res.json(product);
        });
    });
}
module.exports.delete_product = async (req,res) => {
    await Product.findByIdAndDelete({_id: req.params.id}).then(function(product){
        res.json({success: true});
    });
}

