const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

router.post("/ask", async function (req, res) {
    try {
        const question = req.body.question;

        if (!question) {
            return res.status(400).json({
                message: "Question is required"
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question
        });

        res.json({
            answer: response.text
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Gemini API Error"
        });
    }
});

module.exports = router;