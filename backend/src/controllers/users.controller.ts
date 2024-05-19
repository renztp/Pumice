import dotenv from "dotenv";
import express, { Request, Response } from 'express';
dotenv.config();

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const secretKey = process.env.SECRET_KEY;

const router = express.Router();

export const registerUser = async (req: Request, res: Response) => {
  console.log('test!')
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });

    await newUser.save();
    const token = createAuthToken(newUser);
    res.json({ message: 'Registration successful', token });
  } catch (error) {
    res.status(500).send('Something went wrong');
    console.log(error);
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid email or password');
    }
    const token = createAuthToken(user);
    res.send({ token });
  } catch (error) {
    res.status(500).send('Something went wrong');
    console.log(error);
  }
}

function createAuthToken(user) {
  const payload = { userId: user._id, email: user.email };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

export default router;
