import {Schema,model} from 'mongoose'

const UniversitySchema=new Schema({
    name:{type:String,required:true,unique:true},
    city:{type:String,require:true}
},{timestamps:true,versionKey:false,toJSON: { virtuals: true }, toObject: { virtuals: true } })

UniversitySchema.virtual('allUniversity', {
    ref: 'groups',
    localField: '_id',
    foreignField: 'groupID',
});

const University=model('university',UniversitySchema)

export default University