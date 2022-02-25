import React from "react";
import { Header, TimeLine } from "../src/components/profile";
import { BottomTabs, Seo } from "../src/shared";
import { withProtected, useFirestore } from "../src/hooks";

const HistoryPage = () => {
  const { collections, loading } = useFirestore();

  return (
    <>
      <Seo title="History" />
      <Header title="History" />
      <div style={{ marginTop: "95px" }}></div>
      {!loading && collections !== null && <TimeLine days={collections} />}
      <div style={{ marginBottom: "80px" }}></div>
      <BottomTabs isPage="clipboard" />
    </>
  );
};

export default withProtected(HistoryPage);
