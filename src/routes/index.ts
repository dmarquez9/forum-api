import express, { Router } from 'express';

import AuthRoute from './AuthRoute';

const router : Router = express.Router()

router.use('/auth', AuthRoute);

export default router;
