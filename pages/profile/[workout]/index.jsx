import React, { useEffect, useReducer, useState } from "react";
import { workouts } from "../../../constants/workouts";
import { useRouter } from "next/router";
import useFirestore from "../../../src/hooks/firestore";
import { withProtected } from "../../../src/hooks/routes";
import { Seo } from "../../../shared";
import { LineChart, Header, TimeLine } from "../../../components/profile";
import BottomTabs from "../../../shared/bottomNav";

const Workout = () => {
  const { collections, getCollection } = useFirestore();
  const router = useRouter();
  const { workout } = router.query;
  // const [state, dispatch] = useReducer(reducer, { data: [] });
  const [data, setData] = useState([]);
  const [lineChart, setLineChart] = useState([]);
  const [labels, setLabels] = useState([]);
  const [reps, setReps] = useState([]);

  useEffect(() => {
    if (collections.length === 0) {
      getCollection();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (collections.length > 0) {
      setData(collections.filter((item) => item.workout === workout));
    }
  }, [collections, workout]);

  useEffect(() => {
    if (data.length > 0)
      setLineChart(data.filter((item, _, arr) => item.level === arr[0].level));
  }, [data]);

  useEffect(() => {
    if (lineChart.length > 0) {
      setLabels(lineChart.map((item) => item.date.toDate()).slice(0, 5));
      setReps(lineChart.map((item) => item.reps).slice(0, 5));
    }
  }, [lineChart]);

  return (
    <>
      <Seo title={workout} />
      <Header title={workout} isBackIcon={true} svg={workouts[workout]} />
      <LineChart repsArray={{ labels, reps, lastLevel: data[0]?.level }} />
      <TimeLine days={data} />
      <BottomTabs />
    </>
  );
};
export default withProtected(Workout);
