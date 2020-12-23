import express from 'express';
import { User } from '../entities/User';
import { getRepository } from 'typeorm';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const { relation } = req.query;

  try {
    const query = getRepository(User).createQueryBuilder('user');

    if (relation === 'rides') {
      query.leftJoinAndSelect('user.rides', 'ride').orderBy('user.id');
    }

    const users = await query.getMany();

    return res.json(users);
  } catch (error) {
    return next(error);
  }
});

export { router as userController };
