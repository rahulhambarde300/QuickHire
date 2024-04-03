/**
 * Authors: Rahul Hambarde, Parth Modi
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * User Schema for MongoDB.
 *
 * @typedef {Object} UserSchema
 * @property {string} username - The unique username of the user.
 * @property {string} first_name - The first name of the user.
 * @property {string} last_name - The last name of the user.
 * @property {string} description - The description of the user.
 * @property {string} mobile - The mobile number of the user.
 * @property {string} email - The unique email address of the user.
 * @property {string} address - The address of the user.
 * @property {string} password - The hashed password of the user.
 * @property {string} profilePictureUrl - The URL to the user's profile picture.
 * @property {string} linkedInLink - The LinkedIn profile link of the user.
 * @property {string} instagramLink - The Instagram profile link of the user.
 * @property {string} facebookLink - The Facebook profile link of the user.
 * @property {boolean} isFreelancer - Indicates if the user is a freelancer.
 * @property {string} occupation - The occupation of the user.
 * @property {Array} skills - The skills of the user.
 * @property {string} experience - The experience of the user.
 * @property {Array} education - The education details of the user.
 */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: String,
  last_name: String,
  description: String,
  mobile: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
  password: String,
  profilePictureUrl: String,
  linkedInLink: String,
  instagramLink: String,
  facebookLink: String,
  isFreelancer: {
    type: Boolean,
    default: false,
  },
  occupation: String,
  skills: {
    type: Array,
    default: [],
  },
  description: String,
  experience: String,
  education: {
    type: Array,
    default: [],
  },
});

/**
 * Compares the provided password with the user's hashed password.
 *
 * @param {string} password - The password to compare.
 * @returns {Promise<boolean>} - Returns true if the password matches, false otherwise.
 */
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
