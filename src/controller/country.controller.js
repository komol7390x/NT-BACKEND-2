import Country from '../models/country.model.js';

export class CountryController{
    async salom(req,res){
        res.send(1111)
        
    }
    async createCountry(req,res){
        return res.send(222)
        try { 
            console.log(111);
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

}