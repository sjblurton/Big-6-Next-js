import React, { createContext, useContext, useEffect, useState } from "react";
import useAuth from "./auth";
import { FirestoreService } from "../service/firestoreService";

const firestoreContext = createContext();

export default function useFirestore() {
	return useContext(firestoreContext);
}

export function FirestoreProvider(props) {
	const [loading, setLoading] = useState(false);
	const [collections, setCollections] = useState([]);
	const [error, setError] = useState("");
	const { user } = useAuth();

	useEffect(() => {
		if (!collections) {
			FirestoreService.offLine;
		}
		FirestoreService.listenForData({ setLoading, user, setCollections });
	}, []);

	const value = { collections, error, loading };

	return <firestoreContext.Provider value={value} {...props} />;
}
