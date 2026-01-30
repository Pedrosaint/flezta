// ================= Firebase errors =================
const firebaseErrorMessages: Record<string, string> = {
  "auth/email-already-in-use": "Email already in use",
  "auth/invalid-email": "Invalid email address",
  "auth/weak-password": "Password should be at least 6 characters",
  "auth/user-not-found": "User not found",
  "auth/wrong-password": "Incorrect password",
  "auth/popup-closed-by-user": "Popup closed before completing sign-in",
  "auth/invalid-credential": "Invalid login credentials",
};

// ================= Backend errors =================
const backendErrorMessages: Record<string, { message: string; type: "error" | "info" }> = {
  "User already exists": {
    message: "Account already exists. Logging you in...",
    type: "info",
  },
  "Unauthorized": {
    message: "You are not authorized to perform this action",
    type: "error",
  },
};

// ================= Firebase =================
const getFirebaseErrorMessage = (errorCode: string) => {
  return firebaseErrorMessages[errorCode] || "Something went wrong";
};

// ================= Backend =================
const getBackendError = (errorMessage: string) => {
  return (
    backendErrorMessages[errorMessage] || {
      message: errorMessage || "Something went wrong",
      type: "error",
    }
  );
};


export { getFirebaseErrorMessage, getBackendError };