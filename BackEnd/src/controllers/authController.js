const User = require("../models/User");

/**
 * Handles user login/registration via Google Firebase token.
 * If user exists, returns their data. If not, creates a new one.
 * @route POST /api/auth/google
 */
const googleAuth = async (req, res) => {
  try {
    const { name, email, photoURL, uid } = req.user;

    // Check if user already exists
    let user = await User.findOne({ firebaseUID: uid });

    if (!user) {
      // Create new user with default role "user"
      user = await User.create({
        name,
        email,
        photoURL,
        firebaseUID: uid,
        role: "user",
      });
    }

    res.status(200).json({
      message: "Authentication successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        photoURL: user.photoURL,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

module.exports = { googleAuth };