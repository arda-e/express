import { Request, Response } from 'express';
import * as UserService from './users.service';
import { User } from './user.model';

const findAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await UserService.findAll();

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    res.status(200).json({ data: users });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { findAllUsers };
