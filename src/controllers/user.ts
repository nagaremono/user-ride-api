import express from 'express';
import { User } from '../entities/User';

const router = express.Router();

router.get('/', async (_, res, next) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return next(error);
  }
});

export { router as userController };
