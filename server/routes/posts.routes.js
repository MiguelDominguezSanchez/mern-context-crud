import { Router } from 'express'
const router = Router()
import {
	createPost,
	deletePost,
	getPost,
	getPosts,
	updatePost,
} from '../controllers/posts.controllers.js'

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.put('/posts', updatePost)
router.delete('/posts', deletePost)
router.get('/posts/:id', getPost)

export default router
