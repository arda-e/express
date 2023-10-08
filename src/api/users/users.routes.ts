import { Router } from 'express';
import * as UsersControllers from './users.controllers';
const router = Router();

// prettier-ignore
router.route('/')
  .get(UsersControllers.findAllUsers);

export default router;
