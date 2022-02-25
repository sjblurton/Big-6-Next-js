import React, { useEffect, useState } from "react";
import { ProfileLoader } from "../../src/components/loading";
import { Card, Header } from "../../src/components/profile";
import { SmallText } from "../../src/components/profile/card/styles";
import { Seo } from "../../src/shared";
import { withProtected, useFirestore } from "../../src/hooks";
import BottomTabs from "../../src/shared/bottomNav";

const Profile = () => {
  const [latest, setLatest] = useState([]);
  const { collections, error, loading } = useFirestore();
  const latestList = () => {
    let array = [];
    const upToDate = collections?.filter((value) => {
      loading;
      if (!array.includes(value.workout)) {
        array.push(value.workout);
        return true;
      }
      return false;
    });
    setLatest(upToDate);
  };

  useEffect(() => {
    latestList();
  }, [collections]);

  return (
    <>
      <Seo title="Profile" />
      <Header title="Profile" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "100%",
          minHeight: "calc(100vh - 160px)",
          marginTop: "100px",
          gap: "16px",
        }}
      >
        {loading && !error && <ProfileLoader />}
        {latest &&
          latest.map((item) => <Card key={item.docId} workout={item} />)}
        {error && <SmallText>{error}</SmallText>}
      </div>
      <BottomTabs isPage="home" />
    </>
  );
};

export default withProtected(Profile);
