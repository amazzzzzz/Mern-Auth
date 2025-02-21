import express from 'express';
import { isAuthenticated, login, logout, register,resetPassword,sendResetOtp,sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();
// Routes
authRouter.post('/register', register);       // Register route
authRouter.post('/login', login);             // Login route
authRouter.post('/logout', logout);           // Logout route
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);       // Send OTP route
authRouter.post('/verify-account', userAuth, verifyEmail);
authRouter.get('/is-auth', userAuth, isAuthenticated);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);


export default authRouter; // Correct export
