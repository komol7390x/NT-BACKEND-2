import {Schema,model} from 'mongoose';

const productsSchema=new Schema({
        name:{type:String,unique:true,required:true},
        brand:{type:String},
        price:{type:Number},
        catagory:{type:String},
        quantity:{type:String}
        
    },{timestamps:true,virtuals:true,toJSON:{virtuals:true},toObject:{virtuals:true}})

productsSchema.virtual('cities',{
    ref:'City',
    localField:'_id',
    foreignField:'products_id'
})

const Products=model('Products',productsSchema);

export default Products