import City from '../models/city.model.js';
import {isValidObjectId} from 'mongoose'
export class CityController{

    async createCity(req,res){
        try {
            const newCity=await City.create(req.body);
            return res.status(201).json({
                statusCode:201,
                message:"success",
                data:newCity
            })
        } catch (error) {
            return res.status(500).json({
                statusCode:500,
                message:error.message|| 'Internal server error'
            })
        }
    }

    async getAllCity(_,res){
        try {
            const cities=await City.find().populate('products_id')
            return res.status(200).json({
                statusCode:200,
                message:"success",
                data:cities
            })
        } catch (error) {
            return res.status(500).json({
                statusCode:500,
                message:error.message|| 'Internal server error'
            })
        }
    }

    async getCityByID(req,res){
        try {
            const id=req.params?.id            
            if(!isValidObjectId(id)){
                return res.status(400).json({
                    statusCode:400,
                    message:'Invalid ObjectID'
                })
            }
            const cities=await City.findById(id).populate('products_id')
            if(!cities){
                return res.status(404).json({
                    statusCode:404,
                    message:'not found City'
                })
            }
            return res.status(200).json({
                statusCode:200,
                message:"success",
                data:cities
            })
        } catch (error) {
            return res.status(500).json({
                statusCode:500,
                message:error.message|| 'Internal server error'
            })
        }
    }

     async updateCity(req,res){
        try {
            const id=req.params?.id            
            if(!isValidObjectId(id)){
                return res.status(400).json({
                    statusCode:400,
                    message:'Invalid ObjectID'
                })
            }
            const update=await City.findByIdAndUpdate(id,req.body,{new:true})
            if(!update){
                return res.status(404).json({
                    statusCode:404,
                    message:'not found City'
                })
            }
            const cities=await City.findById(id).populate('products_id')
            return res.status(200).json({
                statusCode:200,
                message:"success",
                data:cities
            })
        } catch (error) {
            return res.status(500).json({
                statusCode:500,
                message:error.message|| 'Internal server error'
            })
        }
    }

    async deleteCity(req,res){
        try {
            const id=req.params?.id            
            if(!isValidObjectId(id)){
                return res.status(400).json({
                    statusCode:400,
                    message:'Invalid ObjectID'
                })
            }
            await City.findByIdAndDelete(id,req.body,{new:true})
            return res.status(200).json({
                statusCode:200,
                message:"success",
                data:{}
            })
        } catch (error) {
            return res.status(500).json({
                statusCode:500,
                message:error.message|| 'Internal server error'
            })
        }
    }
}