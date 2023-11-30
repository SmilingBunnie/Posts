import { Router } from 'express'
import postValidationMiddleware from '../middleware/postValidationMiddleware'
import { createPost } from '../controllers/post'

const router = Router()

router.route('/post').post(postValidationMiddleware, createPost)

export default router