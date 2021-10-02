import React, { createContext, useContext, useEffect, useState } from "react";
import useAuth from "./auth";
import { FirestoreService } from "../service/firestoreService";

const firestoreContext = createContext();

export default function useFirestore() {
	return useContext(firestoreContext);
}

export function FirestoreProvider(props) {
	const [loading, setLoading] = useState(true);
	const [collections, setCollections] = useState(null);
	const [error, setError] = useState("");
	const { user } = useAuth();
	const collectionService = { setLoading, user, setCollections, setError };

	useEffect(async () => {
		if (collections === null) {
			try {
				setLoading(true);
				await FirestoreService.offLine;
				await FirestoreService.listenForData(collectionService);
				setLoading(false);
			} catch (error) {
				setError(error.message);
			}
		}
	}, []);

	const value = { collections, error, loading, setLoading };

	return <firestoreContext.Provider value={value} {...props} />;
}
