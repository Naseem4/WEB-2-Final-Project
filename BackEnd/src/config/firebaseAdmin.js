const admin = require("firebase-admin");

/**
 * Initializes Firebase Admin SDK using environment variables.
 * Used to verify Google ID tokens sent from the frontend.
 */
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

module.exports = admin;