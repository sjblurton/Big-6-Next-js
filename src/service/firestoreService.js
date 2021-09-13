import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  where,
  getDocs,
} from "firebase/firestore";

export const FirestoreService = {
  getCollection: async (user) => {
    const db = getFirestore();
    const q = query(
      collection(db, user.uid),
      orderBy("date", "desc"),
      limit(72)
    );

    let collections = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        collections.push({
          docId: doc.id,
          workout: doc.data().workout,
          comments: doc.data().comment,
          date: doc.data().date,
          level: doc.data().level,
          reps: doc.data().reps,
        });
      });

      return { collections };
    } catch (e) {
      return { dataError: e.message };
    }
  },
};
