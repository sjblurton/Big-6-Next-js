import {
	collection,
	addDoc,
	Timestamp,
	getFirestore,
	enableIndexedDbPersistence,
	query,
	orderBy,
	limit,
	onSnapshot,
	deleteDoc,
	doc,
} from "firebase/firestore";

export const FirestoreService = {
	addDocs: async ({ auth, values }) => {
		const db = getFirestore();
		const colName = auth.user.uid;
		const doc = {
			workout: values.exercise,
			date: Timestamp.fromDate(new Date(values.date)),
			level: Number(values.level) + 1,
			reps: values.reps,
			comments: values.comments,
		};

		const docRef = await addDoc(collection(db, colName), {
			...doc,
		});
		return;
	},
	offLine: () => {
		const db = getFirestore();
		enableIndexedDbPersistence(db).catch((err) => {
			if (err.code == "failed-precondition") {
				console.log("failed-precondition");
			} else if (err.code == "unimplemented") {
				console.log("unimplemented");
			}
		});
	},
	listenForData: async ({ setLoading, user, setCollections }) => {
		const db = getFirestore();
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
	},
	removeDoc: async (user, docId) => {
		const db = getFirestore();
		console.log(db, user, docId);
		await deleteDoc(doc(db, user, docId));
	},
};
