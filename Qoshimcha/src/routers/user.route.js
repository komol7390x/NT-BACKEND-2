import { Router } from 'express'
import { getAllUsers, addUser, updateUser } from '../controller/users.controller.js';

const router = Router();
router.get('/', getAllUsers)
    .post('/', addUser)
    .put('/:id', updateUser)

export default router