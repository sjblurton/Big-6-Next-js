import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useFirestore from "../../../../src/hooks/firestore";
import { withProtected } from "../../../../src/hooks/routes";
import { directions } from "../../../../data/directions";
import { formatDistance } from "date-fns";
import { Seo } from "../../../../shared";
import { Timestamp } from "firebase/firestore";

const Day = () => {
  const { collections, getCollection } = useFirestore();
  const [data, setData] = useState(collections);
  const router = useRouter();
  const { day } = router.query;
  const { workout, level, comments, reps, date } = data;
  const dateDone = new Date(date?.toDate() || Timestamp.now().toDate());
  const ago = formatDistance(dateDone, new Date(), {
    addSuffix: true,
  });
  const progressions = directions;
  // console.log(progressions);

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
    }
  }, [collections, day]);

  return (
    <>
      <Seo title={ago} />
      {/* <Header title={workout} isBackIcon={true} svg={workouts[workout]} /> */}
      {/* <LineChart repsArray={{ labels, reps, lastLevel }} /> */}
      {/* <TimeLine days={data} /> */}
      {/* <BottomTabs /> */}
    </>
  );
};

export default withProtected(Day);
