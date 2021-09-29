import {
	collection,
	addDoc,
	Timestamp,
	getFirestore,
} from "firebase/firestore";

const addDocs = async ({ auth, values }) => {
	const db = getFirestore();
	const colName = auth.user.uid;
	const doc = {
		workout: values.exercise,
		date: Timestamp.fromDate(new Date(values.date)),
		level: Number(values.level) + 1,
		reps: values.reps,
		comments: values.comments,
	};
	console.log("from addDocs: ", doc, colName);

	const docRef = await addDoc(collection(db, colName), {
		...doc,
	});
	return;
};

export default addDocs;
