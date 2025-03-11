import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body; // Get username and password from the request body

  try {
    // Find the user by username
    const user = await User.findOne({ where: { username } });

    // Check if the user exists
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If the password is incorrect
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // If the user exists and the password is correct, generate a JWT token
if (!process.env.JWT_SECRET) {
  return res.status(500).json({ message: 'JWT secret is not defined' });
}

const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return the token in the response
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;