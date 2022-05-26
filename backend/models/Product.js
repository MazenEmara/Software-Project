const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Product_name : {
        type : String,
        required : true
    },
    Price : Number,
    weight : String,
    description : String,
    quantity : { 
        type : Number,
        default : 0
    },
    //orderdproducts: [{
        //type: Schema.Types.ObjectId,
        //ref: 'Product'
     //}//]
},{collection: "product"});
module.exports = Product = mongoose.model('product',ProductSchema);
