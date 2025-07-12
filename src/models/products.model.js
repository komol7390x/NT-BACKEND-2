import {Schema,model} from 'mongoose';

const productsSchema=new Schema({
        name:{type:String,unique:true,required:true},
        brand:{type:Number},
        price:{type:Number},
        catagory:{type:String},
        quantity:{type:String}
        
    },{timestamps:true})

const Products=model('Products',productsSchema);

export default Products