import express from 'express'

// Require the controllers WHICH WE DID NOT CREATE YET!!
import * as userController from '../controllers/user.js'

const router = express.Router();

router.post('/register', userController.create);

router.post('/login', userController.fetchDetails);

export default router;