import React, { createContext, useContext, useEffect, useState } from "react";
import {
	getFirestore,
	collection,
	query,
	orderBy,
	limit,
	onSnapshot,
	Timestamp,
	enableIndexedDbPersistence,
} from "firebase/firestore";
import useAuth from "./auth";

const firestoreContext = createContext();

export default function useFirestore() {
	return useContext(firestoreContext);
}

export function FirestoreProvider(props) {
	const db = getFirestore();
	const [loading, setLoading] = useState(false);
	const [collections, setCollections] = useState([]);
	const [error, setError] = useState("");
	const { user } = useAuth();

	useEffect(() => {
		if (!collections) {
			enableIndexedDbPersistence(db).catch((err) => {
				if (err.code == "failed-precondition") {
					console.log("failed-precondition");
				} else if (err.code == "unimplemented") {
					console.log("unimplemented");
				}
			});
		}
		listenForData();
	}, []);

	const listenForData = async () => {
		setLoading(true);
		const q = query(
			collection(db, user.uid),
			orderBy("date", "desc"),
			limit(72)
		);
		const unsubscribe = await onSnapshot(q, (querySnapshot) => {
			const documents = [];
			querySnapshot.forEach((doc) => {
				documents.push({ docId: doc.id, ...doc.data() });
			});
			setCollections(documents);
			setLoading(false);
		});
	};

	const value = { collections, error, loading };

	return <firestoreContext.Provider value={value} {...props} />;
}
