import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";
import { unsubscribe } from "./firestoreService";

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
		try {
			await signOut(auth);
		} catch (e) {
			return { error: e.message };
		}
	},
};
