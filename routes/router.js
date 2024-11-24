import express from 'express'
import { deleteProfile, getProfile, login, signup, updateProfile } from '../controllers/user.controller.js'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.get('/profile', authenticateToken, getProfile)
router.put('/profile/:id', authenticateToken, updateProfile)
router.delete('/profile/:id', authenticateToken, deleteProfile)

export default router