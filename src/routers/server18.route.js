import {Router} from 'express'
import {CountryController} from '../controller/country.controller.js'

const router=Router()
const controller=new CountryController()

router
    .post('/',controller.createCountry)
    .get('/',controller.salom)

export default router    