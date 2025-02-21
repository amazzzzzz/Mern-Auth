import mongoose from "mongoose";

// To create a user, we need an email, name, and password.
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name is required
  email: { type: String, required: true, unique: true }, // Email is required and must be unique
  password: { type: String, required: true }, // Password is required
  verifyOtp: { type: String, default: '' }, // OTP for email verification
  verifyOtpExpireAt: { type: Number, default: 0 }, // Expiry time for the OTP
  isVerified: { type: Boolean, default: false }, // Verification status
  resetOtp: { type: String, default: '' }, // OTP for password reset
  resetOtpExpireAt: { type: Number, default: 0 }, // Expiry time for reset OTP
});

// Create or retrieve the user model
const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;
