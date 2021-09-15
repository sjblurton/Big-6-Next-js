import React, { useEffect, useReducer } from "react";
import { workouts } from "../../../constants/workouts";
import { useRouter } from "next/router";
import useFirestore from "../../../src/hooks/firestore";
import { withProtected } from "../../../src/hooks/routes";
import { Seo } from "../../../shared";
import { LineChart, Header, TimeLine } from "../../../components/profile";
import BottomTabs from "../../../shared/bottomNav";

const ACTIONS = {
  WORKOUT_DATA_TO_STATE: "workout-data-to-state",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.WORKOUT_DATA_TO_STATE:
      const data = action.payload.collections.filter(
        (item) => item.workout === state.filter
      );
      const lineChart = data.filter(
        (item, _, arr) => item.level === arr[0].level
      );
      return {
        ...state,
        data: data,
        level: data[0].level,
        lineChart: lineChart,
        labels: lineChart.map((item) => item.date.toDate()).slice(0, 5),
        reps: lineChart.map((item) => item.reps).slice(0, 5),
        loading: false,
      };

    default:
      return state;
  }
};

const Workout = () => {
  const { collections, getCollection } = useFirestore();
  const router = useRouter();
  const { workout } = router.query;

  const initialState = {
    data: [],
    filter: workout,
    level: 1,
    lineChart: [],
    labels: [],
    reps: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, level, labels, reps } = state;

  useEffect(() => {
    collections.length === 0 && getCollection();

    collections.length > 0 &&
      dispatch({
        type: ACTIONS.WORKOUT_DATA_TO_STATE,
        payload: { collections },
      });
  }, [collections, getCollection]);

  return (
    <>
      <Seo title={workout} />
      <Header title={workout} isBackIcon={true} svg={workouts[workout]} />
      <LineChart repsArray={{ labels, reps, lastLevel: level }} />
      <TimeLine days={data} />
      <BottomTabs />
    </>
  );
};
export default withProtected(Workout);
