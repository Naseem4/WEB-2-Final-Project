const express = require("express");
const router = express.Router();
const { googleAuth } = require("../controllers/authController");
const verifyToken = require("../middleware/verifyToken");

/**
 * @swagger
 * /api/auth/google:
 *   post:
 *     summary: Authenticate user with Google Firebase token
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *       401:
 *         description: Unauthorized - Invalid token
 *       500:
 *         description: Server error
 */
router.post("/google", verifyToken, googleAuth);

module.exports = router;