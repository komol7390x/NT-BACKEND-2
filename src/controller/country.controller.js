import Country from '../models/country.model.js';

export class CountryController{
    async createCountry(req,res){
        try { 
            const existsCountry=await Country.findOne({name:req.body?.name});
            if(existsCountry){
                return res.statuts(409).json({
                statusCode:409,
                message:'this country already added'
            })
            }
            const result=await Country.create(req.body);
            return res.status(201).json({
                statusCode:201,
                message: 'success',
                data:result
            })
        } catch (error) {
            return res.statuts(500).json({
                statusCode:500,
                message:error.message || 'Internal error server'
            })
        }
    }

    async getAllCountry(_,res){
        try {
            const countries=await Country.find();
            return res.status(200).json({
                statusCode:201,
                message: 'success',
                data:countries
            })

        } catch (error) {
            return res.statuts(500).json({
                statusCode:500,
                message:error.message || 'Internal error server'
            })
        }
    }

}