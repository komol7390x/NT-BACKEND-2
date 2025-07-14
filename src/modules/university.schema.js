import {Schema,model} from 'mongoose'

const GroupSchema=new Schema({
    name:{type:String,required:true,unique:true},
    city:{type:String,require:true}
},{timestamps:true,versionKey:false})

const University=model('university',GroupSchema)

export default University