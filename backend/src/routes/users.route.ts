import express from 'express';
import * as usersController from '../controllers/users.controller.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World - Users');
});
router.post('/register', (req, res) => usersController.registerUser(req, res));
router.post('/login', (req, res) => usersController.loginUser(req, res));

export default router;
