import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { withProtected, useFirestore } from "../../../../src/hooks";
import { BottomTabs, Seo } from "../../../../src/shared";
import { Timestamp } from "firebase/firestore";
import { big6 } from "../../../../src/constants";
import {
  BarChart,
  Comments,
  Header,
  HeaderTitle,
} from "../../../../src/components/profile";
import DeleteModal from "../../../../src/components/modal";
import { ACTIONS, dayReducer } from "../../../../src/reducers";
import { SmallText } from "../../../../src/components/profile/card/styles";

const Day = () => {
  const [openModal, setOpenModal] = useState(false);
  const { collections, error, loading } = useFirestore();
  const router = useRouter();
  const { day } = router.query;
  const workoutSvg = big6.filter((item) => item.key === router.query.workout)[0]
    .value;
  const initialState = {
    data: {},
    progressions: {},
    filter: day,
    date: new Date(Timestamp.now().toDate()),
    ago: "",
  };
  const [state, dispatch] = useReducer(dayReducer, initialState);
  const { data, progressions, ago, goal, totalReps } = state;

  useEffect(() => {
    if (Object.entries(collections).length > 0 && !loading) {
      dispatch({
        type: ACTIONS.DAY_DATA_TO_STATE,
        payload: { collections },
      });
    }
  }, [collections]);

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "50px" }}>
      <Seo
        title={`${data.workout}, Level: ${data.level}, for ${data.reps?.reduce(
          (acc, reps) => acc + reps,
          0
        )} reps`}
      />
      <Header
        title={data.workout || "loading"}
        isBackIcon={true}
        svg={workoutSvg}
      />
      {openModal && <DeleteModal data={data} setOpenModal={setOpenModal} />}
      {!loading && collections !== null && (
        <>
          <HeaderTitle
            data={data}
            progressions={progressions}
            ago={ago}
            reps={totalReps}
            goal={goal}
            setOpenModal={setOpenModal}
          />
          <BarChart reps={data.reps} level={data.level} />
          <Comments data={data} />
        </>
      )}
      {error && <SmallText>{error}</SmallText>}
      <BottomTabs />
    </div>
  );
};

export default withProtected(Day);
