 const firebaseErrorMessages: Record<string, string> = {
  "auth/email-already-in-use": "Email already in use",
  "auth/invalid-email": "Invalid email address",
  "auth/weak-password": "Password should be at least 6 characters",
  "auth/user-not-found": "User not found",
  "auth/wrong-password": "Incorrect password",
  "auth/popup-closed-by-user": "Popup closed before completing sign-in",
  // add more Firebase error codes as needed
};

/**
 * Get a friendly error message from a Firebase error code
 */
 const getFirebaseErrorMessage = (errorCode: string) => {
  return firebaseErrorMessages[errorCode] || "Something went wrong";
};

export default getFirebaseErrorMessage;
