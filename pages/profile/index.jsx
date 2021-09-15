import React, { useEffect, useState } from "react";
import { ProfileLoader } from "../../components/loading";
import { Card, Header } from "../../components/profile";
import { SmallText } from "../../components/profile/card/styles";
import { Seo } from "../../shared";
import useFirestore from "../../src/hooks/firestore";
import { withProtected } from "../../src/hooks/routes";
import BottomTabs from "../../shared/bottomNav";

const Profile = () => {
  const [latest, setLatest] = useState([]);
  const { collections, error, getCollection, loading } = useFirestore();

  useEffect(() => {
    collections.length === 0 && getCollection();

    if (collections.length > 0) {
      let array = [];
      const upToDate = collections.filter((item) => {
        if (!array.includes(item.workout)) {
          array.push(item.workout);
          return true;
        }
      });
      setLatest(upToDate);
    }
  }, [collections, getCollection]);

  return (
    <>
      <Seo title="Profile" />
      <Header title="Profile" />
      {loading && !error && <ProfileLoader />}
      {latest && latest.map((item) => <Card key={item.docId} workout={item} />)}
      {error && <SmallText>{error}</SmallText>}
      <BottomTabs isPage="home" />
    </>
  );
};

export default withProtected(Profile);
