import {Router} from 'express'
import {UniversityController} from '../controller/university.controller.js'

const university=new UniversityController()
const router=Router()

router
    .get('/',university.getAllUniversity)
    .post('/',university.createUniversity)
    .get('/',university.getUniversityById)
    .patch('/',university.updateUniversityById)
    .delete('/',university.deleteUniversityById)

export default router