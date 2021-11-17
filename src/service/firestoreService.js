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
  setDoc,
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
      uid: user.uid,
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
  listenForData: async ({ setLoading, user, setCollections, setError }) => {
    const db = getFirestore();
    setLoading(true);
    const q = query(
      collection(db, user.uid),
      orderBy("date", "desc"),
      limit(72)
    );
    try {
      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ docId: doc.id, ...doc.data() });
        });
        setCollections(
          documents || {
            workout: "Pull Up",
            date: Timestamp.fromDate(new Date()),
            level: 1,
            reps: [15, 12],
            comments: "sample data, please log your first exercise.",
            uid: user.uid,
          }
        );
        setLoading(false);
      });
    } catch (error) {
      setError(error.message);
    }
  },
  removeDoc: async (user, docId) => {
    const db = getFirestore();
    await deleteDoc(doc(db, user, docId));
  },
  createCollection: async (user) => {
    const db = getFirestore();
    await setDoc(doc(db, user.uid, "user"), {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      uid: user.uid,
    });
  },
};
