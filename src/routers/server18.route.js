import {Router} from 'express'
import {CountryController} from '../controller/country.controller.js'

const router=Router()
const controller=new CountryController()

router
    .post('/',controller.createCountry)
    .get('/',controller.getAllCountry)

export default router    