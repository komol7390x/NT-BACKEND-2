import {Schema,model} from 'mongoose'

const UniversitySchema=new Schema({
    name:{type:String,required:true,unique:true},
    city:{type:String,require:true}
},{timestamps:true,versionKey:false})

const University=model('university',UniversitySchema)

export default University