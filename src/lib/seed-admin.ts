/**
 * Run this ONCE to create the admin user in Firebase Auth.
 *
 * Steps:
 * 1. Go to Firebase Console → Authentication → Sign-in method → Enable "Email/Password"
 * 2. Go to Firebase Console → Authentication → Users → Add user
 *    - Email:    iniubongudofot2000@gmail.com
 *    - Password: (your chosen password)
 *
 * That's it — no script needed. Firebase Console lets you create users directly.
 *
 * Firestore rules (paste in Firebase Console → Firestore → Rules):
 *
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     // Anyone can CREATE a contact message
 *     match /contactMessages/{messageId} {
 *       allow create: if true;
 *       allow read, update, delete: if request.auth != null;
 *     }
 *   }
 * }
 */

export {};
