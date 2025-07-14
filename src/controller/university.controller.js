import University from '../modules/university.schema.js'

export class UniversityController{
    async createUniversity(req,res){
        try {
            const existUniversity=await University.findOne(req.body.name)
            if(!existUniversity){
                return res.status(409).json({
                    statusCode:409,
                    message:'This university already added'
                })
            }
            const result=await University.create(req.body)
            return res.status(201).json({
                statusCode:201,
                message:'success',
                data:result
            })
        } catch (error) {
             return res.status(500).json({
                statusCode: 500,
                message: error.message || 'Internal server error'
            })
        }
    }

    async getAllUniversity(req,res){

    }

    async getUniversityById(req,res){
        
    }

    async updateUniversityById(req,res){
        
    }

    async deleteUniversityById(req,res){
        
    }
}