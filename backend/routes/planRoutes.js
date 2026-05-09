const express = require("express");

const router = express.Router();

/**
 * @swagger
 * /api/plan:
 *   post:
 *     summary: Generate personalized fitness plan
 *     description: Receives user fitness data from the form and returns the submitted data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - weight
 *               - height
 *               - age
 *               - gender
 *               - goal
 *               - days
 *             properties:
 *               weight:
 *                 type: number
 *                 example: 70
 *               height:
 *                 type: number
 *                 example: 165
 *               age:
 *                 type: number
 *                 example: 22
 *               gender:
 *                 type: string
 *                 example: female
 *               goal:
 *                 type: string
 *                 example: Weight Loss
 *               days:
 *                 type: number
 *                 example: 4
 *     responses:
 *       200:
 *         description: Plan generated successfully
 *       500:
 *         description: Server error
 */
router.post("/", async (req, res) => {
  try {
    const userData = req.body;

    console.log(userData);

    res.status(200).json({
      message: "Plan generated successfully",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;