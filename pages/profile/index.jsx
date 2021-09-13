import React, { useEffect, useState } from "react";
import { ProfileLoader } from "../../components/loading";
import { Card, Header } from "../../components/profile";
import { SmallText } from "../../components/profile/card/styles";
import { Seo } from "../../shared";
import useFirestore from "../../src/hooks/firestore";
import { withProtected } from "../../src/hooks/routes";
import { Timestamp } from "firebase/firestore";
import BottomTabs from "../../shared/bottomNav";

const Profile = () => {
  const [latest, setLatest] = useState([]);
  const { collections, error, getCollection, loading } = useFirestore();
  const emptyItem = {
    workout: "Pull Ups",
    date: Timestamp.now(),
    level: 1,
    reps: [2, 0],
  };
  
  useEffect(() => {
    if (collections.length === 0) {
      getCollection();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let array = [];
    const upToDate = collections.filter((item) => {
      if (!array.includes(item.workout)) {
        array.push(item.workout);
        return true;
      }
    });
    setLatest(upToDate);
  }, [collections]);

  return (
    <>
      <Seo title="Profile" />
      <Header title="Profile" />
      {loading && !error && <ProfileLoader />}
      {!loading && latest.length === 0 && (
        <>
          <Card workout={emptyItem} />
          <SmallText>ready to log your first workout?</SmallText>
        </>
      )}
      {latest && latest.map((item) => <Card key={item.docId} workout={item} />)}
      {error && <SmallText>{error}</SmallText>}
      <BottomTabs isPage="home" />
    </>
  );
};

export default withProtected(Profile);
