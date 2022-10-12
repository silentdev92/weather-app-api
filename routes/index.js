import { Router } from 'express'
import RootController from '../controllers/index.js'
const router = Router()

router.get('/location', RootController.location)

router.get('/current', RootController.current)

router.get('/forecast', RootController.forecast)

export default router
