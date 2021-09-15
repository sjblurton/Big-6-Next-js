import React, { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import useFirestore from "../../../../src/hooks/firestore";
import { withProtected } from "../../../../src/hooks/routes";
import { directions } from "../../../../data/directions";
import { formatDistance } from "date-fns";
import { BottomTabs, Seo } from "../../../../shared";
import { Timestamp } from "firebase/firestore";
import { workouts } from "../../../../constants/workouts";
import { Header, HeaderTitle } from "../../../../components/profile";

const ACTIONS = {
  DAY_DATA_TO_STATE: "day-data-to-state",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DAY_DATA_TO_STATE:
      const data = action.payload.collections.filter(
        (item) => item.docId === state.filter
      );
      const progressions = directions[data[0].workout][data[0].level - 1];
      const goal = progressions["progressions"][
        progressions["progressions"].length - 1
      ].reduce((acc, x) => acc * x, 1);
      const date = new Date(data[0].date?.toDate());
      const totalReps = data[0].reps.reduce((acc, x) => acc + x, 0);
      return {
        ...state,
        data: data[0],
        totalReps: totalReps,
        progressions: directions[data[0].workout][data[0].level - 1],
        goal: goal,
        ago: formatDistance(date, new Date(), {
          addSuffix: true,
        }),
      };

    default:
      return state;
  }
};

const Day = () => {
  const { collections, getCollection } = useFirestore();
  const router = useRouter();
  const { day } = router.query;
  const initialState = {
    data: {},
    progressions: {},
    filter: day,
    date: new Date(Timestamp.now().toDate()),
    ago: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, progressions, ago, goal, totalReps } = state;

  useEffect(() => {
    collections.length === 0 && getCollection();
    collections.length > 0 &&
      dispatch({
        type: ACTIONS.DAY_DATA_TO_STATE,
        payload: { collections },
      });
  }, [collections, getCollection]);

  return (
    <>
      <Seo
        title={`${data.workout}, Level: ${data.level}, for ${data.reps?.reduce(
          (acc, reps) => acc + reps,
          0
        )} reps`}
      />
      <Header
        title={data.workout}
        isBackIcon={true}
        svg={workouts[data.workout]}
      />
      <HeaderTitle
        progressions={progressions}
        ago={ago}
        reps={totalReps}
        goal={goal}
      />

      <BottomTabs />
    </>
  );
};

export default withProtected(Day);
