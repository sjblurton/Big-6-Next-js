import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useFirestore from "../../../../src/hooks/firestore";
import { withProtected } from "../../../../src/hooks/routes";
import { directions } from "../../../../data/directions";
import { formatDistance } from "date-fns";
import { BottomTabs, Seo } from "../../../../shared";
import { Timestamp } from "firebase/firestore";
import { workouts } from "../../../../constants/workouts";
import { Header } from "../../../../components/profile";

const Day = () => {
  const { collections, getCollection } = useFirestore();
  const [data, setData] = useState(collections);
  const [progressions, setProgressions] = useState({});
  const [date, setDate] = useState(
    data?.date?.toDate() || Timestamp.now().toDate()
  );
  const router = useRouter();
  const { day } = router.query;
  const dateDone = new Date(date);
  const ago = formatDistance(dateDone, new Date(), {
    addSuffix: true,
  });

  console.log(progressions);

  useEffect(() => {
    if (collections.length === 0) {
      getCollection();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (collections.length > 0) {
      const data = collections.find((workout) => workout.docId === day);
      setData(data);
      setProgressions(directions[data.workout][data.level - 1]);
      setDate(data.date?.toDate());
    }
  }, [collections, day]);

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

      <BottomTabs />
    </>
  );
};

export default withProtected(Day);
