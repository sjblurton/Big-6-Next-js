import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { useFirestore } from "../../src/hooks";
import { ACTIONS, dayReducer } from "../../src/reducers";
import { Timestamp } from "@firebase/firestore";
import { EditForm } from "../../src/components/form";
import { Seo } from "../../src/shared";

const EditDoc = () => {
  const router = useRouter();
  const { docId } = router.query;
  const [sendState, setSendState] = useState(null);
  const { collections, error, loading } = useFirestore();
  const initialState = {
    data: {},
    progressions: {},
    filter: docId,
    date: new Date(Timestamp.now().toDate()),
    ago: "",
  };
  const [state, dispatch] = useReducer(dayReducer, initialState);
  const { data } = state;

  useEffect(() => {
    if (Object.entries(collections).length > 0 && !loading) {
      dispatch({
        type: ACTIONS.DAY_DATA_TO_STATE,
        payload: { collections },
      });
    }
  }, [collections, loading]);

  useEffect(() => {
    if (Object.entries(state.data).length > 0) {
      setSendState({
        exercise: data.workout,
        level: data.level,
        reps: data.reps,
        date: data?.date?.toDate(),
        comments: data.comments,
        uid: data.uid,
        docId: data.docId,
      });
    }
  }, [state]);

  return (
    <>
      {sendState !== null && (
        <>
          <Seo title={`Edit Document: ${docId}`} />
          <EditForm initialValues={sendState} />
        </>
      )}
    </>
  );
};

export default EditDoc;
