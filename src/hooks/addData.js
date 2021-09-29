import {
	collection,
	addDoc,
	Timestamp,
	getFirestore,
	deleteDoc,
} from "firebase/firestore";

const db = getFirestore();

const addDocs = async ({ auth, values }) => {
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
};

export default addDocs;

export const deleteDocument = () => {};
