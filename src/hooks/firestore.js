import React, { createContext, useContext, useState } from "react";
import { FirestoreService } from "../service/firestoreService";
import useAuth from "./auth";

const firestoreContext = createContext();

export default function useFirestore() {
  return useContext(firestoreContext);
}

export function FirestoreProvider(props) {
  const [loading, setLoading] = useState(false)
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const getCollection = async () => {
    setLoading(true)
    const { dataError, collections } = await FirestoreService.getCollection(
      user
    );
    setCollections(collections ?? []);
    setError(dataError ?? "");
    setLoading(false);
  };

  const value = { collections, error, getCollection, loading };

  return <firestoreContext.Provider value={value} {...props} />;
}
