import React, { createContext, useContext, useState } from "react";
import { FirestoreService } from "../service/firestoreService";
import { Timestamp } from "firebase/firestore";
import useAuth from "./auth";

const firestoreContext = createContext();

export default function useFirestore() {
  return useContext(firestoreContext);
}

export function FirestoreProvider(props) {
  const [loading, setLoading] = useState(false);
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const emptyItem = {
    workout: "Pull Ups",
    date: Timestamp.now(),
    level: 1,
    reps: [2, 0],
  };

  const getCollection = async () => {
    setLoading(true);
    const { dataError, collections } = await FirestoreService.getCollection(
      user
    );
    setCollections(collections ?? [emptyItem]);
    setError(dataError ?? "");
    setLoading(false);
  };

  const value = { collections, error, getCollection, loading };

  return <firestoreContext.Provider value={value} {...props} />;
}
