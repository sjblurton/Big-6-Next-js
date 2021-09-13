import React from "react";
import { workouts } from "../../../constants/workouts";
import { useRouter } from "next/router";
import useFirestore from "../../../src/hooks/firestore";
import { withProtected } from "../../../src/hooks/routes";
import { Seo } from "../../../shared";
import { LineChart, Header, TimeLine } from "../../../components/profile";
import BottomTabs from "../../../shared/bottomNav";

const Workout = () => {
  const { collections } = useFirestore();
  const router = useRouter();
  const { workout } = router.query;
  const data = collections.filter((item) => item.workout === workout);
  const lastLevel = data[0].level;
  const lineChart = data.filter((item) => item.level === lastLevel);
  const labels = lineChart.map((item) => item.date.toDate()).slice(0, 5);
  const reps = lineChart.map((item) => item.reps).slice(0, 5);

  return (
    <>
      <Seo title={workout} />
      <Header title={workout} isBackIcon={true} svg={workouts[workout]} />
      <LineChart repsArray={{ labels, reps, lastLevel }} />
      <TimeLine days={data} />
      <BottomTabs />
    </>
  );
};
export default withProtected(Workout);
