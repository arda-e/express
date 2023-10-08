import { User } from './user.model';

const findAll = async () => {
  try {
    const result: User[] = [
      { id: 1, name: 'John Doe', email: 'jdoe@test.com' },
      { id: 2, name: 'Jane Doe', email: 'janedoe@test.com' },
    ];
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { findAll };
