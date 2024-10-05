import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID!,
    privateKey: privateKey!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Reference to Firestore
const db = admin.firestore();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body; // Destructure form data

    try {
      // Save to Firestore
      await db.collection('contactMessages').add({
        name,
        email,
        message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(), // Optional timestamp
      });

      return res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error saving message:", error);
      return res.status(500).json({ message: "Failed to save message. Please try again." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
