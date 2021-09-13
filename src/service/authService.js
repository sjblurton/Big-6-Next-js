import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const AuthService = {
  loginWithGoogle: async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return { user: result.user };
    } catch (e) {
      return { error: e.message };
    }
  },
  logout: async () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((e) => {
        return { error: e.message };
      });
  },
};
